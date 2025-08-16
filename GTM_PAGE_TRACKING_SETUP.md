# GTM Page Tracking Setup for Specific Pages

## Problem Pages Identified

- `/press` - Press & Media page
- `/project` - Projects overview page
- `/project/freitas-bathroom` - Dynamic project page

## Solutions Implemented

### 1. Enhanced GTMPageTracker

- Added multiple event types for better tracking
- Added route type detection (static vs dynamic)
- Added initial page view tracking
- Added custom page view events

### 2. ManualPageTracker Component

- Added to specific pages that need guaranteed tracking
- Provides additional metadata for each page
- Ensures tracking even if automatic tracking fails

### 3. GTM Initialization

- Added robust GTM initialization
- Ensures dataLayer is always available
- Added fallback mechanisms

## GTM Configuration Required

### 1. Create Additional Triggers

#### Manual Page View Trigger

- **Event Name**: `manual_page_view`
- **Use for**: Pages with ManualPageTracker component

#### Custom Page View Trigger

- **Event Name**: `custom_page_view`
- **Use for**: Additional page view tracking

#### Initial Page View Trigger

- **Event Name**: `initial_page_view`
- **Use for**: Initial page load tracking

### 2. Create Additional Variables

#### Page Type Variables

- `{{DLV - page_type}}` - Type of page (app_router, app_router_initial)
- `{{DLV - route_type}}` - Route type (static, dynamic)
- `{{DLV - page_category}}` - Page category (media, portfolio)
- `{{DLV - page_section}}` - Page section (press, projects, project_detail)
- `{{DLV - project_slug}}` - Project slug for dynamic pages
- `{{DLV - tracking_method}}` - Tracking method used

### 3. Create Additional Tags

#### Manual Page View Tag

- **Tag Type**: Google Analytics: GA4 Event
- **Event Name**: manual_page_view
- **Parameters**:
  - page_path: `{{DLV - page_path}}`
  - page_title: `{{DLV - page_title}}`
  - page_name: `{{DLV - page_name}}`
  - page_category: `{{DLV - page_category}}`
  - page_section: `{{DLV - page_section}}`
- **Trigger**: Manual Page View Trigger

#### Custom Page View Tag

- **Tag Type**: Google Analytics: GA4 Event
- **Event Name**: custom_page_view
- **Parameters**:
  - page_path: `{{DLV - page_path}}`
  - page_title: `{{DLV - page_title}}`
  - route_type: `{{DLV - route_type}}`
- **Trigger**: Custom Page View Trigger

#### Initial Page View Tag

- **Tag Type**: Google Analytics: GA4 Event
- **Event Name**: initial_page_view
- **Parameters**:
  - page_path: `{{DLV - page_path}}`
  - page_title: `{{DLV - page_title}}`
  - page_type: `{{DLV - page_type}}`
- **Trigger**: Initial Page View Trigger

## Testing Specific Pages

### 1. Test /press Page

1. Navigate to `/press`
2. Check browser console for:
   - "Manual Page Tracker:"
   - "GTM Page View:"
   - "GTM Initial Page View:"
3. Verify in GTM Preview mode:
   - `manual_page_view` event
   - `page_view` event
   - `initial_page_view` event

### 2. Test /project Page

1. Navigate to `/project`
2. Check browser console for same events as above
3. Verify page_category: "portfolio"
4. Verify page_section: "projects"

### 3. Test /project/freitas-bathroom Page

1. Navigate to `/project/freitas-bathroom`
2. Check browser console for same events
3. Verify project_slug: "freitas-bathroom"
4. Verify route_type: "dynamic"

## Debugging Steps

### 1. Check Console Logs

Look for these specific messages:

```
Manual Page Tracker: {event: "manual_page_view", ...}
GTM Page View: {event: "page_view", ...}
GTM Initial Page View: {event: "initial_page_view", ...}
```

### 2. Check GTM Preview Mode

- Enable GTM Preview mode
- Navigate to each problematic page
- Verify events appear in real-time
- Check event parameters are correct

### 3. Check Network Tab

- Look for GTM requests
- Verify no 404 errors
- Check if events are being sent

### 4. Use GTM Debug Component

- Look for the debug button in development
- Check if events are being pushed to dataLayer
- Verify event counts are increasing

## Expected Events for Each Page

### /press Page

```javascript
{
  event: "manual_page_view",
  page_path: "/press",
  page_name: "press_page",
  page_category: "media",
  page_section: "press"
}
```

### /project Page

```javascript
{
  event: "manual_page_view",
  page_path: "/project",
  page_name: "projects_page",
  page_category: "portfolio",
  page_section: "projects"
}
```

### /project/freitas-bathroom Page

```javascript
{
  event: "manual_page_view",
  page_path: "/project/freitas-bathroom",
  page_name: "project_freitas-bathroom",
  page_category: "portfolio",
  page_section: "project_detail",
  project_slug: "freitas-bathroom",
  project_type: "dynamic_route"
}
```

## Troubleshooting

### If Pages Still Not Tracking

1. **Check Component Loading**

   - Verify ManualPageTracker is imported
   - Check for console errors
   - Ensure component renders

2. **Check GTM Configuration**

   - Verify triggers are set up correctly
   - Check variables are configured
   - Ensure tags are published

3. **Check Browser Console**

   - Look for "GTM dataLayer initialized"
   - Check for "GTM Event pushed:" messages
   - Verify no JavaScript errors

4. **Check Network Requests**
   - Look for googletagmanager.com requests
   - Verify events are being sent
   - Check for any blocked requests

## Next Steps

1. **Test Implementation**

   - Navigate to each problematic page
   - Check console logs
   - Verify in GTM Preview mode

2. **Configure GTM**

   - Create the additional triggers
   - Set up the new variables
   - Create the new tags

3. **Monitor Results**

   - Check Google Analytics for events
   - Verify page views are being tracked
   - Monitor for any issues

4. **Optimize if Needed**
   - Remove duplicate events if necessary
   - Optimize event data structure
   - Monitor performance impact

The implementation should now ensure that all pages, including the problematic ones, are properly tracked in GTM.
