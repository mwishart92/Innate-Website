import dynamic from 'next/dynamic';
import React from 'react';

// Dynamic imports for heavy components
export const DynamicContactForm = dynamic(() => import('@/components/Contact/Form'), {
  ssr: false,
  loading: () => React.createElement('div', { className: "animate-pulse bg-gray-200 h-96 rounded" })
});

export const DynamicOnboardingForm = dynamic(() => import('@/components/OnBoarding'), {
  ssr: false,
  loading: () => React.createElement('div', { className: "animate-pulse bg-gray-200 h-screen" })
});

// Dynamic imports for heavy sections
export const DynamicWorkSlider = dynamic(() => import('@/components/Work/WorkSlider'), {
  ssr: false,
  loading: () => React.createElement('div', { className: "animate-pulse bg-gray-200 h-96 rounded" })
});

export const DynamicProjectSlider = dynamic(() => import('@/components/Slider/ProjectSlider'), {
  ssr: false,
  loading: () => React.createElement('div', { className: "animate-pulse bg-gray-200 h-96 rounded" })
});

// Utility function to create dynamic imports with custom loading
export const createDynamicImport = (
  importFn: () => Promise<any>,
  loadingComponent?: React.ComponentType,
  options: any = {}
) => {
  return dynamic(importFn, {
    ssr: false,
    loading: loadingComponent || (() => React.createElement('div', { className: "animate-pulse bg-gray-200 h-32 rounded" })),
    ...options
  });
};

// Preload critical components
export const preloadCriticalComponents = () => {
  if (typeof window !== 'undefined') {
    // Preload components that are likely to be needed soon
    import('@/components/Contact/Form');
    import('@/components/OnBoarding');
  }
};

// Lazy load components based on intersection
export const lazyLoadComponent = (
  component: React.ComponentType,
  threshold: number = 0.1
) => {
  return dynamic(() => Promise.resolve(component), {
    ssr: false,
    loading: () => React.createElement('div', { className: "animate-pulse bg-gray-200 h-32 rounded" })
  });
};
