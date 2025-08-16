# GTM Verification Checklist

Use this checklist to verify that Google Tag Manager is working correctly on your website.

## ✅ Implementation Checklist

### 1. GTM Script Loading

- [ ] GTM script is loaded (check Network tab for googletagmanager.com requests)
- [ ] No 404 errors for GTM scripts
- [ ] Container ID GTM-KNSHDN66 is correct

### 2. DataLayer Availability

- [ ] `window.dataLayer` exists in browser console
- [ ] No console errors related to GTM
- [ ] GTM test utility shows "✅ dataLayer is available"

### 3. Page View Tracking

- [ ] Page views are tracked on initial load
- [ ] Page views are tracked on client-side navigation
- [ ] Console shows "GTM Page View:" logs
- [ ] Events appear in GTM Preview mode

### 4. Button Click Tracking

- [ ] "Get Started" buttons track clicks
- [ ] "Start project" buttons track clicks
- [ ] Generic buttons track clicks
- [ ] Console shows "GTM Event pushed: button_click"

### 5. Form Submission Tracking

- [ ] Contact form tracks successful submissions
- [ ] Contact form tracks failed submissions
- [ ] Contact form tracks validation errors
- [ ] Onboarding form tracks progress
- [ ] Console shows "GTM Event pushed: form_submission"

### 6. Link Click Tracking

- [ ] Automatic link tracking is working
- [ ] Internal links are tracked
- [ ] External links are tracked
- [ ] Console shows "GTM Event pushed: link_click"

## 🔧 GTM Configuration Checklist

### 1. Triggers Created

- [ ] Page View Trigger (event: `page_view`)
- [ ] Form Submission Trigger (event: `form_submission`)
- [ ] Button Click Trigger (event: `button_click`)
- [ ] Link Click Trigger (event: `link_click`)

### 2. Variables Created

- [ ] `{{DLV - form_name}}` - Form name variable
- [ ] `{{DLV - button_name}}` - Button name variable
- [ ] `{{DLV - link_text}}` - Link text variable
- [ ] `{{DLV - page_path}}` - Page path variable
- [ ] `{{DLV - page_title}}` - Page title variable

### 3. Tags Created

- [ ] Google Analytics 4 Configuration tag
- [ ] Page View tag (GA4 Event)
- [ ] Form Submission tag (GA4 Event)
- [ ] Button Click tag (GA4 Event)
- [ ] Link Click tag (GA4 Event)

## 🧪 Testing Checklist

### 1. GTM Preview Mode

- [ ] Enable GTM Preview mode
- [ ] Enter website URL
- [ ] Navigate through pages
- [ ] Click buttons and links
- [ ] Submit forms
- [ ] Verify events appear in real-time

### 2. Browser Console Testing

- [ ] Open browser console
- [ ] Check for GTM event logs
- [ ] Verify no errors
- [ ] Test manual event push

### 3. GTM Debug Component

- [ ] Debug component is visible in development
- [ ] Shows real-time dataLayer events
- [ ] Displays correct event count
- [ ] Shows recent events

## 📊 Event Verification

### Expected Events

#### Page Views

```javascript
{
  event: "page_view",
  page_path: "/",
  page_title: "Innate Design & Build",
  page_location: "https://innate.com/",
  timestamp: "2024-01-01T00:00:00.000Z"
}
```

#### Button Clicks

```javascript
{
  event: "button_click",
  button_name: "get_started_button",
  button_text: "Get Started",
  button_location: "navigation",
  destination: "/onboarding"
}
```

#### Form Submissions

```javascript
{
  event: "form_submission",
  form_name: "contact_form",
  form_success: true,
  form_type: "contact",
  project_type: "kitchen_remodel"
}
```

#### Link Clicks

```javascript
{
  event: "link_click",
  link_text: "About Us",
  link_url: "https://innate.com/about",
  link_location: "automatic_tracking",
  link_type: "internal"
}
```

## 🚨 Troubleshooting

### If Events Not Appearing

1. **Check GTM Container ID**

   - Verify GTM-KNSHDN66 is correct
   - Check if container is published

2. **Check Script Loading**

   - Network tab for googletagmanager.com requests
   - No 404 errors
   - Script loads before page content

3. **Check Console Errors**

   - No JavaScript errors
   - GTM utilities load properly
   - dataLayer is available

4. **Check GTM Configuration**
   - Triggers are set up correctly
   - Variables are configured
   - Tags are published

### Common Issues

1. **Page views not tracking**

   - GTMPageTracker component missing
   - Route changes not client-side
   - GTM script not loaded

2. **Button clicks not tracking**

   - Button components not updated
   - onClick handlers not calling tracking
   - Event names don't match triggers

3. **Form submissions not tracking**
   - Form components not importing GTM utilities
   - Validation preventing tracking calls
   - API errors not being tracked

## 📈 Next Steps

1. **Monitor Events**

   - Check GTM Preview mode regularly
   - Monitor Google Analytics for events
   - Set up conversion goals

2. **Optimize Tracking**

   - Remove unnecessary events
   - Optimize event data structure
   - Monitor performance impact

3. **Set Up Goals**

   - Form submission conversions
   - Button click conversions
   - Page view goals

4. **Documentation**
   - Keep track of all events
   - Document event purposes
   - Update team on tracking

## ✅ Final Verification

Before considering GTM setup complete:

- [ ] All events are firing in GTM Preview mode
- [ ] Events are appearing in Google Analytics
- [ ] No console errors
- [ ] Performance is not impacted
- [ ] Team understands how to add new tracking
- [ ] Documentation is complete

## 🆘 Support

If you need help:

1. Check this checklist first
2. Use the GTM Debug component
3. Check browser console for errors
4. Verify GTM configuration
5. Test in GTM Preview mode
