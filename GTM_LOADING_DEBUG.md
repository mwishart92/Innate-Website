# GTM Loading Debug Guide

## Problem

GTM is loading on homepage, about, contact, and work pages, but NOT loading on press and project pages.

## Root Cause Analysis

### Possible Causes

1. **Script Loading Issues** - GTM script not being injected properly
2. **Layout Conflicts** - Different layouts being used
3. **Route-specific Issues** - Next.js routing problems
4. **Script Blocking** - Ad blockers or security software
5. **Timing Issues** - Script loading before DOM is ready

## Solutions Implemented

### 1. Enhanced Layout Configuration

- Moved `GoogleTagManager` component to `<head>` section
- Added fallback inline GTM script
- Added noscript fallback
- Added comprehensive error checking

### 2. Robust GTM Initialization

- Added `checkGTMLoading()` function to verify script loading
- Added `forceGTMLoading()` function to inject script if missing
- Enhanced error handling and debugging
- Added multiple fallback mechanisms

### 3. Enhanced Page Tracking

- Updated `GTMPageTracker` with loading checks
- Updated `ManualPageTracker` with loading checks
- Added comprehensive console logging
- Added automatic script injection if needed

## Debugging Steps

### 1. Check Browser Console

Look for these specific messages:

#### ✅ Good Signs

```
GTM dataLayer initialized
GTM initialized successfully
GTM Loading Check: {gtmScript: true, gtmInlineScript: true, dataLayerExists: true, gtagExists: true, allLoaded: true}
GTM Page View: {event: "page_view", ...}
```

#### ❌ Problem Signs

```
GTM dataLayer not available
GTM Loading Check: {gtmScript: false, gtmInlineScript: false, dataLayerExists: false, gtagExists: false, allLoaded: false}
GTMPageTracker - Forcing GTM loading...
```

### 2. Check Network Tab

1. Open DevTools > Network tab
2. Filter by "googletagmanager"
3. Navigate to `/press` and `/project` pages
4. Look for:
   - `gtm.js` requests
   - `collect` requests
   - Any 404 errors

### 3. Check DOM Elements

1. Open DevTools > Elements tab
2. Search for "googletagmanager"
3. Look for:
   - `<script src="https://www.googletagmanager.com/gtm.js?id=GTM-KNSHDN66">`
   - `<script>...googletagmanager.com...</script>`
   - `<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KNSHDN66">`

### 4. Test Manual Script Injection

In browser console, run:

```javascript
// Check if GTM is loaded
console.log(
  "GTM Script:",
  document.querySelector('script[src*="googletagmanager.com"]')
);
console.log(
  "GTM Inline:",
  document.querySelector('script[innerHTML*="googletagmanager.com"]')
);
console.log("DataLayer:", window.dataLayer);
console.log("Gtag:", window.gtag);

// Force load GTM if not present
if (!window.dataLayer) {
  window.dataLayer = [];
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtm.js?id=GTM-KNSHDN66";
  document.head.appendChild(script);
}
```

## Page-Specific Testing

### Test /press Page

1. Navigate to `/press`
2. Check console for:
   - "ManualPageTracker - GTM Loading Status:"
   - "Manual Page Tracker:"
   - "GTM Page View:"
3. Check Network tab for GTM requests
4. Check Elements tab for GTM scripts

### Test /project Page

1. Navigate to `/project`
2. Check console for same messages as above
3. Verify page_category: "portfolio"
4. Verify page_section: "projects"

### Test /project/[slug] Page

1. Navigate to `/project/freitas-bathroom`
2. Check console for same messages
3. Verify project_slug: "freitas-bathroom"
4. Verify route_type: "dynamic"

## Expected Console Output

### Working Page (e.g., /about)

```
GTM dataLayer initialized
GTM initialized successfully
GTM Loading Check: {gtmScript: true, gtmInlineScript: true, dataLayerExists: true, gtagExists: true, allLoaded: true}
GTMPageTracker - GTM Loading Status: {gtmScript: true, gtmInlineScript: true, dataLayerExists: true, gtagExists: true, allLoaded: true}
GTM Page View: {event: "page_view", page_path: "/about", ...}
GTM Initial Page View: {event: "initial_page_view", page_path: "/about", ...}
```

### Problematic Page (e.g., /press)

```
GTM dataLayer initialized
GTM initialized successfully
GTM Loading Check: {gtmScript: false, gtmInlineScript: false, dataLayerExists: true, gtagExists: false, allLoaded: false}
ManualPageTracker - GTM Loading Status: {gtmScript: false, gtmInlineScript: false, dataLayerExists: true, gtagExists: false, allLoaded: false}
ManualPageTracker - Forcing GTM loading...
GTM script loaded successfully
Manual Page Tracker: {event: "manual_page_view", page_path: "/press", ...}
```

## Troubleshooting Checklist

### If GTM Still Not Loading

1. **Check Ad Blockers**

   - Disable ad blockers temporarily
   - Check browser extensions
   - Test in incognito mode

2. **Check Security Software**

   - Disable antivirus web protection
   - Check firewall settings
   - Test on different network

3. **Check Browser Compatibility**

   - Test in different browsers
   - Check browser console for errors
   - Verify JavaScript is enabled

4. **Check Next.js Configuration**

   - Verify `next.config.ts` doesn't block scripts
   - Check for CSP headers
   - Verify no middleware blocking requests

5. **Check GTM Container**
   - Verify GTM-KNSHDN66 is correct
   - Check if container is published
   - Verify container is active

## Manual Fixes

### If Script Still Not Loading

Add this to the problematic pages:

```typescript
// In page component
useEffect(() => {
  // Force GTM loading
  if (typeof window !== "undefined" && !window.dataLayer) {
    window.dataLayer = [];
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtm.js?id=GTM-KNSHDN66";
    document.head.appendChild(script);
  }
}, []);
```

### If Events Not Firing

Add this to force event tracking:

```typescript
// Force push event
if (typeof window !== "undefined" && window.dataLayer) {
  window.dataLayer.push({
    event: "manual_page_view",
    page_path: window.location.pathname,
    page_title: document.title,
    timestamp: new Date().toISOString(),
  });
}
```

## Next Steps

1. **Test the Implementation**

   - Navigate to problematic pages
   - Check console logs
   - Verify GTM script loading

2. **Monitor Results**

   - Check GTM Preview mode
   - Verify events in Google Analytics
   - Monitor for any remaining issues

3. **Optimize if Needed**
   - Remove duplicate scripts if necessary
   - Optimize loading performance
   - Clean up console logs in production

The enhanced implementation should now ensure GTM loads on all pages, including the problematic press and project pages.
