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
