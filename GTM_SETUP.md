# GTM Setup for Next.js - UPDATED

## What's Been Implemented

1. **GoogleTagManager Component** - Uses `@next/third-parties` for proper GTM integration
2. **GTMPageTracker** - Automatically tracks page views on client-side navigation
3. **GTM Utilities** - Helper functions for tracking custom events
4. **GTMDebug Component** - Development debugging tool for GTM events
5. **Automatic Link Tracking** - Automatically tracks link clicks throughout the site
6. **Enhanced Button Tracking** - Updated button components with built-in tracking

## Events Tracked

### Automatic Events

- **Page Views**: `page_view` (automatic on route changes)
- **Link Clicks**: `link_click` (automatic tracking)

### Manual Events

- **Form Submissions**: `form_submission` (with success/failure tracking)
- **Button Clicks**: `button_click`
- **Custom Events**: Any event via `pushGTMEvent()`

## Components Updated with Tracking

1. **Contact Form** (`src/components/Contact/Form.tsx`)

   - Tracks form submission success/failure
   - Tracks validation errors
   - Tracks API errors

2. **ButtonGetStarted** (`src/components/ui/ButtonGetStarted.tsx`)

   - Tracks "Get Started" button clicks
   - Includes destination and button text

3. **Button** (`src/components/ui/Button.tsx`)

   - Generic button tracking with customizable data
   - Supports buttonName and buttonData props

4. **Project Description** (`src/components/Project/ProjectDescription/index.tsx`)

   - Tracks "Start project" button clicks
   - Includes project slug and location

5. **Onboarding Form** (already implemented)
   - Tracks multi-step form progress
   - Tracks form submission success/failure

## GTM Configuration Required

### 1. Create Triggers in GTM

#### Page View Trigger

- **Event Name**: `page_view`
- **Use for**: Google Analytics page view tags

#### Form Submission Trigger

- **Event Name**: `form_submission`
- **Use for**: Form conversion tracking, analytics

#### Button Click Trigger

- **Event Name**: `button_click`
- **Use for**: CTA button tracking, user engagement

#### Link Click Trigger

- **Event Name**: `link_click`
- **Use for**: Navigation tracking, outbound link tracking

### 2. Create Variables in GTM

#### Custom Event Variables

- `{{DLV - form_name}}` - Form name
- `{{DLV - button_name}}` - Button name
- `{{DLV - link_text}}` - Link text
- `{{DLV - page_path}}` - Page path
- `{{DLV - page_title}}` - Page title

### 3. Create Tags in GTM

#### Google Analytics 4 Configuration

- **Tag Type**: Google Analytics: GA4 Configuration
- **Measurement ID**: Your GA4 measurement ID
- **Trigger**: All Pages

#### Page View Tag

- **Tag Type**: Google Analytics: GA4 Event
- **Event Name**: page_view
- **Trigger**: Page View Trigger

#### Form Submission Tag

- **Tag Type**: Google Analytics: GA4 Event
- **Event Name**: form_submission
- **Parameters**:
  - form_name: `{{DLV - form_name}}`
  - form_success: `{{DLV - form_success}}`
- **Trigger**: Form Submission Trigger

#### Button Click Tag

- **Tag Type**: Google Analytics: GA4 Event
- **Event Name**: button_click
- **Parameters**:
  - button_name: `{{DLV - button_name}}`
  - button_text: `{{DLV - button_text}}`
- **Trigger**: Button Click Trigger

## Testing and Debugging

### 1. Enable GTM Preview Mode

1. Go to GTM Admin
2. Click "Preview" button
3. Enter your website URL
4. Test events in real-time

### 2. Use GTM Debug Component

- Available in development mode
- Shows real-time dataLayer events
- Located at bottom-right corner of the page
- Click "Show GTM Debug" to view events

### 3. Browser Console

- Check for GTM event logs
- Look for "GTM Event pushed:" messages
- Verify dataLayer is available

### 4. Network Tab

- Check if GTM script is loading
- Look for requests to `googletagmanager.com`
- Verify no 404 errors

## Troubleshooting

### Common Issues

1. **Events not appearing in GTM**

   - Check if GTM container ID is correct (GTM-KNSHDN66)
   - Verify GTM script is loading (check Network tab)
   - Check browser console for errors
   - Ensure triggers are set up correctly

2. **Page views not tracking**

   - Ensure GTMPageTracker is included in layout
   - Check if using App Router (not Pages Router)
   - Verify route changes are client-side
   - Check console for "GTM Page View:" logs

3. **Custom events not working**

   - Check if `window.dataLayer` exists
   - Verify event names match GTM triggers
   - Check browser console for "GTM Event pushed:" logs
   - Ensure GTM utilities are imported correctly

4. **Form submissions not tracking**
   - Verify form components import GTM utilities
   - Check form submission handlers include tracking calls
   - Ensure form validation doesn't prevent tracking
   - Check console for form tracking logs

### Debug Steps

1. **Check GTM Container ID**

   ```javascript
   // In browser console
   console.log(window.dataLayer);
   ```

2. **Verify GTM Script Loading**

   ```javascript
   // In browser console
   console.log(window.gtag);
   ```

3. **Test Manual Event**

   ```javascript
   // In browser console
   window.dataLayer.push({
     event: "test_event",
     test_data: "test_value",
   });
   ```

4. **Check Network Requests**
   - Open DevTools > Network tab
   - Filter by "googletagmanager"
   - Verify requests are successful

## Best Practices

1. **Event Naming**: Use consistent, descriptive event names
2. **Data Structure**: Keep event data consistent across similar events
3. **Performance**: Don't track too many events on a single page
4. **Privacy**: Ensure tracking complies with privacy regulations
5. **Testing**: Always test tracking in development before production
6. **Documentation**: Keep track of all events and their purposes

## Support

If you encounter issues with GTM tracking:

1. Check browser console for errors
2. Verify GTM container configuration
3. Test in GTM Preview mode
4. Use the GTM Debug component
5. Check network requests for GTM script loading

## Next Steps

1. ✅ Install the package: `@next/third-parties@latest`
2. ✅ Test tracking in GTM Preview mode
3. ✅ Create triggers for the custom events in GTM
4. ✅ Set up conversion tracking tags
5. ✅ Monitor events in Google Analytics
6. ✅ Set up conversion goals and funnels

The system is now ready to capture page views, form submissions, and button clicks properly!
