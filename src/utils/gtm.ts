// GTM utility functions for tracking custom events

// Type definition for GTM loading status
interface GTMLoadingStatus {
  gtmScript: boolean;
  gtmInlineScript: boolean;
  dataLayerExists: boolean;
  gtagExists: boolean;
  allLoaded: boolean;
}

// Initialize GTM dataLayer
export const initializeGTM = () => {
  if (typeof window === "undefined") return;

  // Initialize dataLayer if it doesn't exist
  if (!(window as any).dataLayer) {
    (window as any).dataLayer = [];
    console.log('GTM dataLayer initialized');
  }

  // Push initial GTM configuration
  (window as any).dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js'
  });

  console.log('GTM initialized successfully');
};

// Check if GTM script is loaded
export const checkGTMLoading = (): GTMLoadingStatus => {
  if (typeof window === "undefined") {
    return {
      gtmScript: false,
      gtmInlineScript: false,
      dataLayerExists: false,
      gtagExists: false,
      allLoaded: false
    };
  }

  // Check if GTM script is in the DOM
  const gtmScript = document.querySelector('script[src*="googletagmanager.com"]');
  const gtmInlineScript = document.querySelector('script[innerHTML*="googletagmanager.com"]');
  
  // Check if dataLayer exists
  const dataLayerExists = !!(window as any).dataLayer;
  
  // Check if gtag function exists
  const gtagExists = !!(window as any).gtag;

  console.log('GTM Loading Check:', {
    gtmScript: !!gtmScript,
    gtmInlineScript: !!gtmInlineScript,
    dataLayerExists,
    gtagExists,
    dataLayerLength: dataLayerExists ? (window as any).dataLayer.length : 0
  });

  return {
    gtmScript: !!gtmScript,
    gtmInlineScript: !!gtmInlineScript,
    dataLayerExists,
    gtagExists,
    allLoaded: !!(gtmScript || gtmInlineScript) && dataLayerExists
  };
};

// Force GTM script loading if not present
export const forceGTMLoading = () => {
  if (typeof window === "undefined") return;

  const loadingStatus = checkGTMLoading();
  
  if (!loadingStatus.allLoaded) {
    console.log('Forcing GTM script loading...');
    
    // Create and inject GTM script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-KNSHDN66';
    script.onload = () => {
      console.log('GTM script loaded successfully');
      initializeGTM();
    };
    script.onerror = () => {
      console.error('Failed to load GTM script');
    };
    
    document.head.appendChild(script);
  }
};

// Push custom events to GTM dataLayer
export const pushGTMEvent = (
  eventName: string,
  eventData: Record<string, any> = {}
) => {
  if (typeof window !== "undefined") {
    // Check GTM loading status
    const loadingStatus = checkGTMLoading();
    
    // Force loading if not loaded
    if (!loadingStatus.allLoaded) {
      forceGTMLoading();
    }

    // Ensure dataLayer exists
    if (!(window as any).dataLayer) {
      initializeGTM();
    }

    const event = {
      event: eventName,
      ...eventData,
    };

    (window as any).dataLayer.push(event);
    console.log('GTM Event pushed:', eventName, eventData);
  } else {
    console.warn('GTM dataLayer not available');
  }
};

// Track form submissions
export const trackFormSubmission = (
  formName: string,
  formData: Record<string, any> = {},
  isSuccess: boolean = true
) => {
  pushGTMEvent("form_submission", {
    form_name: formName,
    form_success: isSuccess,
    ...formData,
  });
};

// Track form submission success
export const trackFormSuccess = (
  formName: string,
  formData: Record<string, any> = {}
) => {
  trackFormSubmission(formName, formData, true);
};

// Track form submission failure
export const trackFormFailure = (
  formName: string,
  formData: Record<string, any> = {},
  error?: string
) => {
  trackFormSubmission(
    formName,
    {
      ...formData,
      error_message: error,
    },
    false
  );
};

// Track button clicks
export const trackButtonClick = (
  buttonName: string,
  buttonData: Record<string, any> = {}
) => {
  pushGTMEvent("button_click", {
    button_name: buttonName,
    ...buttonData,
  });
};

// Track link clicks
export const trackLinkClick = (
  linkText: string,
  linkUrl: string,
  linkData: Record<string, any> = {}
) => {
  pushGTMEvent("link_click", {
    link_text: linkText,
    link_url: linkUrl,
    ...linkData,
  });
};

// Track scroll depth
export const trackScrollDepth = (scrollDepth: number) => {
  pushGTMEvent("scroll_depth", {
    scroll_percentage: scrollDepth,
  });
};

// Track time on page
export const trackTimeOnPage = (timeInSeconds: number) => {
  pushGTMEvent("time_on_page", {
    time_seconds: timeInSeconds,
  });
};

// Hook to automatically track link clicks
export const useLinkTracking = () => {
  const trackLink = (linkText: string, linkUrl: string, additionalData: Record<string, any> = {}) => {
    trackLinkClick(linkText, linkUrl, {
      link_location: 'page_content',
      ...additionalData,
    });
  };

  return { trackLink };
};

// Hook to automatically track button clicks
export const useButtonTracking = () => {
  const trackButton = (buttonName: string, additionalData: Record<string, any> = {}) => {
    trackButtonClick(buttonName, {
      button_location: 'page_content',
      ...additionalData,
    });
  };

  return { trackButton };
};

// Initialize automatic link tracking
export const initializeLinkTracking = () => {
  if (typeof window === "undefined") return;

  const handleLinkClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const link = target.closest('a');
    
    if (link) {
      const linkText = link.textContent?.trim() || link.getAttribute('aria-label') || 'Unknown Link';
      const linkUrl = link.href;
      
      // Don't track internal navigation links that use Next.js router
      if (linkUrl && !linkUrl.startsWith('javascript:') && !linkUrl.startsWith('#')) {
        trackLinkClick(linkText, linkUrl, {
          link_location: 'automatic_tracking',
          link_type: linkUrl.startsWith(window.location.origin) ? 'internal' : 'external',
        });
      }
    }
  };

  document.addEventListener('click', handleLinkClick);
  
  // Cleanup function
  return () => {
    document.removeEventListener('click', handleLinkClick);
  };
};

// Initialize automatic form tracking
export const initializeFormTracking = () => {
  if (typeof window === "undefined") return;

  const handleFormSubmit = (event: Event) => {
    const form = event.target as HTMLFormElement;
    
    if (form) {
      const formName = form.getAttribute('data-form-name') || form.id || 'unknown_form';
      const formAction = form.action || 'unknown_action';
      const formMethod = form.method || 'unknown_method';
      
      // Track form submission attempt
      trackFormSubmission(formName, {
        form_action: formAction,
        form_method: formMethod,
        form_location: 'automatic_tracking',
        form_elements_count: form.elements.length
      });
    }
  };

  // Track form submissions
  document.addEventListener('submit', handleFormSubmit);
  
  // Cleanup function
  return () => {
    document.removeEventListener('submit', handleFormSubmit);
  };
};

// Initialize GTM on module load
if (typeof window !== "undefined") {
  // Initialize after a short delay to ensure DOM is ready
  setTimeout(() => {
    initializeGTM();
    checkGTMLoading();
  }, 100);
}
