// GTM utility functions for tracking custom events

// Push custom events to GTM dataLayer
export const pushGTMEvent = (
  eventName: string,
  eventData: Record<string, any> = {}
) => {
  if (typeof window !== "undefined" && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: eventName,
      ...eventData,
    });
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
