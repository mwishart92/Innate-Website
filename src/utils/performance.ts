// Performance monitoring utilities
interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  fcpScore: number;
  lcpScore: number;
  fidScore: number;
  clsScore: number;
  ttfbScore: number;
}

// Core Web Vitals thresholds
const CORE_WEB_VITALS_THRESHOLDS = {
  fcp: { good: 1800, poor: 3000 },
  lcp: { good: 2500, poor: 4000 },
  fid: { good: 100, poor: 300 },
  cls: { good: 0.1, poor: 0.25 },
  ttfb: { good: 800, poor: 1800 }
};

// Calculate score based on threshold
const calculateScore = (value: number, metric: keyof typeof CORE_WEB_VITALS_THRESHOLDS): number => {
  const { good, poor } = CORE_WEB_VITALS_THRESHOLDS[metric];
  
  if (value <= good) return 1;
  if (value <= poor) return 0.5;
  return 0;
};

// Get performance metrics
export const getPerformanceMetrics = (): PerformanceMetrics | null => {
  if (typeof window === 'undefined' || !('performance' in window)) {
    return null;
  }

  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  const paint = performance.getEntriesByType('paint');
  
  const fcp = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
  const lcp = 0; // Will be updated by LCP observer
  const fid = 0; // Will be updated by FID observer
  const cls = 0; // Will be updated by CLS observer
  const ttfb = navigation.responseStart - navigation.requestStart;

  return {
    fcp,
    lcp,
    fid,
    cls,
    ttfb,
    fcpScore: calculateScore(fcp, 'fcp'),
    lcpScore: calculateScore(lcp, 'lcp'),
    fidScore: calculateScore(fid, 'fid'),
    clsScore: calculateScore(cls, 'cls'),
    ttfbScore: calculateScore(ttfb, 'ttfb')
  };
};

// Monitor Core Web Vitals
export const monitorCoreWebVitals = (callback?: (metrics: PerformanceMetrics) => void) => {
  if (typeof window === 'undefined') return;

  let lcp = 0;
  let fid = 0;
  let cls = 0;

  // LCP Observer
  if ('PerformanceObserver' in window) {
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      lcp = lastEntry.startTime;
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // FID Observer
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const firstInputEntry = entries[0] as PerformanceEventTiming;
      if (firstInputEntry && 'processingStart' in firstInputEntry) {
        fid = firstInputEntry.processingStart - firstInputEntry.startTime;
      }
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // CLS Observer
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const layoutShiftEntry = entry as any;
        if (!layoutShiftEntry.hadRecentInput) {
          cls += layoutShiftEntry.value;
        }
      }
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });
  }

  // Report metrics after page load
  window.addEventListener('load', () => {
    setTimeout(() => {
      const metrics = getPerformanceMetrics();
      if (metrics) {
        metrics.lcp = lcp;
        metrics.fid = fid;
        metrics.cls = cls;
        metrics.lcpScore = calculateScore(lcp, 'lcp');
        metrics.fidScore = calculateScore(fid, 'fid');
        metrics.clsScore = calculateScore(cls, 'cls');
        
        callback?.(metrics);
        
        // Send to analytics
        if (typeof window !== 'undefined' && (window as any).dataLayer) {
          (window as any).dataLayer.push({
            event: 'core_web_vitals',
            ...metrics
          });
        }
      }
    }, 1000);
  });
};

// Monitor resource loading performance
export const monitorResourcePerformance = () => {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

  const resourceObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      const resourceEntry = entry as PerformanceResourceTiming;
      
      // Track slow resources
      if (resourceEntry.duration > 3000) {
        console.warn('Slow resource detected:', {
          name: resourceEntry.name,
          duration: resourceEntry.duration,
          size: resourceEntry.transferSize
        });
      }
    }
  });

  resourceObserver.observe({ entryTypes: ['resource'] });
};

// Monitor long tasks
export const monitorLongTasks = () => {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

  const longTaskObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      console.warn('Long task detected:', {
        duration: entry.duration,
        startTime: entry.startTime
      });
    }
  });

  longTaskObserver.observe({ entryTypes: ['longtask'] });
};

// Get bundle size information
export const getBundleInfo = () => {
  if (typeof window === 'undefined') return null;

  const resources = performance.getEntriesByType('resource');
  const scripts = resources.filter(resource => 
    resource.name.includes('.js') || resource.name.includes('chunk')
  ) as PerformanceResourceTiming[];

  return {
    totalScripts: scripts.length,
    totalScriptSize: scripts.reduce((sum, script) => sum + (script.transferSize || 0), 0),
    averageScriptSize: scripts.reduce((sum, script) => sum + (script.transferSize || 0), 0) / scripts.length
  };
};

// Initialize performance monitoring
export const initPerformanceMonitoring = () => {
  monitorCoreWebVitals((metrics) => {
    console.log('Core Web Vitals:', metrics);
  });
  
  monitorResourcePerformance();
  monitorLongTasks();
  
  // Log bundle info after load
  window.addEventListener('load', () => {
    setTimeout(() => {
      const bundleInfo = getBundleInfo();
      if (bundleInfo) {
        console.log('Bundle Info:', bundleInfo);
      }
    }, 2000);
  });
};
