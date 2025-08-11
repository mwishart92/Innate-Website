# Google Tag Manager (GTM) Tracking Implementation

This document explains how GTM tracking has been implemented in your Next.js application to capture page views and custom events.

## Overview

The GTM implementation addresses the common issues with Next.js applications:
- **Page Views**: Captures client-side navigation events
- **Form Submissions**: Tracks form success/failure events
- **Custom Events**: Provides utilities for tracking user interactions

## Components

### 1. GoogleTagManager Component
Located in `src/app/layout.tsx`, this component initializes GTM with your container ID `GTM-KNSHDN66`.

### 2. GTMPageTracker Component
Located in `src/components/GTMPageTracker.tsx`, this component automatically tracks page views on client-side navigation.

### 3. GTM Utilities
Located in `src/utils/gtm.ts`, provides helper functions for tracking custom events.

## Events Being Tracked

### Automatic Events

#### Page Views
- **Event**: `page_view`
- **Data**: 
  - `page_path`: Current route path
  - `page_title`: Document title
  - `page_location`: Full URL

### Custom Events

#### Form Submissions
- **Event**: `form_submission`
- **Data**:
  - `form_name`: Name of the form
  - `form_success`: Boolean indicating success/failure
  - `step_count`: Current step (for multi-step forms)
  - `form_data_keys`: Keys of submitted data
  - `error_message`: Error message if submission failed

#### Button Clicks
- **Event**: `button_click`
- **Data**:
  - `button_name`: Name/identifier of the button

#### Link Clicks
- **Event**: `link_click`
- **Data**:
  - `link_text`: Text of the clicked link
  - `link_url`: URL of the clicked link

#### Scroll Depth
- **Event**: `scroll_depth`
- **Data**:
  - `scroll_percentage`: Percentage of page scrolled

#### Time on Page
- **Event**: `time_on_page`
- **Data**:
  - `time_seconds`: Time spent on page in seconds

## Usage Examples

### Tracking Form Submissions

```typescript
import { trackFormSuccess, trackFormFailure } from '@/utils/gtm';

// On successful form submission
trackFormSuccess('contact_form', {
  form_type: 'contact',
  user_type: 'new',
});

// On failed form submission
trackFormFailure('contact_form', {
  form_type: 'contact',
  error_message: 'Validation failed',
});
```

### Tracking Button Clicks

```typescript
import { trackButtonClick } from '@/utils/gtm';

const handleButtonClick = () => {
  trackButtonClick('cta_button', {
    button_location: 'hero_section',
    button_text: 'Get Started',
  });
  // Your button logic here
};
```

### Tracking Link Clicks

```typescript
import { trackLinkClick } from '@/utils/gtm';

const handleLinkClick = (url: string, text: string) => {
  trackLinkClick(text, url, {
    link_location: 'navigation',
    link_type: 'internal',
  });
};
```

### Custom Events

```typescript
import { pushGTMEvent } from '@/utils/gtm';

// Track any custom event
pushGTMEvent('video_play', {
  video_title: 'Product Demo',
  video_duration: 120,
  video_source: 'homepage',
});
```

## GTM Configuration

### Triggers to Create

1. **Page View Trigger**
   - Event: `page_view`
   - Use for: Google Analytics page view tags

2. **Form Submission Trigger**
   - Event: `form_submission`
   - Use for: Form conversion tracking, analytics

3. **Button Click Trigger**
   - Event: `button_click`
   - Use for: CTA button tracking, user engagement

4. **Link Click Trigger**
   - Event: `link_click`
   - Use for: Navigation tracking, outbound link tracking

### Variables to Use

- `{{Event}}` - The event name
- `{{Event}}` - Custom event data (e.g., `{{DLV - form_name}}`)
- `{{Page Path}}` - Current page path
- `{{Page Title}}` - Current page title

## Testing

### Verify GTM is Working

1. Open browser DevTools
2. Go to Console tab
3. Type: `window.dataLayer`
4. You should see an array with events

### Test Page Views

1. Navigate between pages
2. Check console for `page_view` events
3. Verify events appear in GTM Preview mode

### Test Custom Events

1. Submit a form
2. Click buttons/links
3. Check console for custom events
4. Verify events appear in GTM Preview mode

## Troubleshooting

### Common Issues

1. **Events not appearing in GTM**
   - Check if GTM container ID is correct
   - Verify GTM script is loading (check Network tab)
   - Check browser console for errors

2. **Page views not tracking**
   - Ensure GTMPageTracker is included in layout
   - Check if using App Router (not Pages Router)
   - Verify route changes are client-side

3. **Custom events not working**
   - Check if `window.dataLayer` exists
   - Verify event names match GTM triggers
   - Check browser console for errors

### Debug Mode

Enable GTM Preview mode to see real-time events and debug tracking issues.

## Best Practices

1. **Event Naming**: Use consistent, descriptive event names
2. **Data Structure**: Keep event data consistent across similar events
3. **Performance**: Don't track too many events on a single page
4. **Privacy**: Ensure tracking complies with privacy regulations
5. **Testing**: Always test tracking in development before production

## Support

If you encounter issues with GTM tracking:
1. Check browser console for errors
2. Verify GTM container configuration
3. Test in GTM Preview mode
4. Check network requests for GTM script loading 