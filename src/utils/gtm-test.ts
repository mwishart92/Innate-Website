// GTM Test Utility - Use this to verify GTM is working

export const testGTM = () => {
  if (typeof window === "undefined") {
    console.log("GTM Test: Running on server side");
    return;
  }

  console.log("=== GTM Test Utility ===");
  
  // Check if dataLayer exists
  if ((window as any).dataLayer) {
    console.log("✅ dataLayer is available");
    console.log("Current dataLayer length:", (window as any).dataLayer.length);
  } else {
    console.log("❌ dataLayer is NOT available");
  }

  // Check if gtag exists
  if ((window as any).gtag) {
    console.log("✅ gtag is available");
  } else {
    console.log("❌ gtag is NOT available");
  }

  // Check if GTM script is loaded
  const gtmScript = document.querySelector('script[src*="googletagmanager.com"]');
  if (gtmScript) {
    console.log("✅ GTM script is loaded");
  } else {
    console.log("❌ GTM script is NOT loaded");
  }

  // Test pushing an event
  if ((window as any).dataLayer) {
    const testEvent = {
      event: 'gtm_test',
      test_timestamp: new Date().toISOString(),
      test_message: 'GTM test event from utility'
    };
    
    (window as any).dataLayer.push(testEvent);
    console.log("✅ Test event pushed to dataLayer:", testEvent);
  }

  console.log("=== End GTM Test ===");
};

// Auto-run test in development
if (typeof window !== "undefined" && process.env.NODE_ENV === 'development') {
  // Wait for GTM to load
  setTimeout(() => {
    testGTM();
  }, 2000);
}
