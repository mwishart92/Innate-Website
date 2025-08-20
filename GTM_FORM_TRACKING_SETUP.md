# GTM Form Tracking Setup Guide

## Problem

Form submit buttons are not tracking in Google Tag Manager.

## Root Cause Analysis

### Issues Found

1. **Contact Form**: Using `onClick` instead of `onSubmit` - form submission not properly tracked
2. **Press Contact Form**: No form handling at all - static form with no submission logic
3. **Missing Form Tracking**: No automatic form tracking across the site
4. **Inconsistent Event Names**: Different forms using different event naming conventions

## Solutions Implemented

### 1. Fixed Contact Form (`src/components/Contact/Form.tsx`)

- ✅ Changed from `onClick` to `onSubmit` handler
- ✅ Added proper form submission tracking
- ✅ Added button click tracking
- ✅ Added comprehensive error tracking
- ✅ Added success/failure tracking

### 2. Enhanced Press Contact Form (`src/components/Press/Contact/Form.tsx`)

- ✅ Added complete form functionality
- ✅ Added form state management
- ✅ Added validation
- ✅ Added GTM tracking for all events
- ✅ Added loading states and user feedback

### 3. Added Automatic Form Tracking (`src/utils/gtm.ts`)

- ✅ `initializeFormTracking()` function
- ✅ Automatic tracking of all form submissions
- ✅ Form metadata tracking
- ✅ Fallback tracking for forms without manual tracking

### 4. Enhanced Page Tracker (`src/components/GTMPageTracker.tsx`)

- ✅ Added form tracking initialization
- ✅ Automatic form tracking across all pages
- ✅ Comprehensive cleanup handling

## Events Now Being Tracked

### Contact Form Events

```javascript
// Button Click
{
  event: "button_click",
  button_name: "contact_form_submit",
  button_text: "Submit",
  form_type: "contact",
  button_location: "contact_form"
}

// Form Success
{
  event: "form_submission",
  form_name: "contact_form",
  form_success: true,
  form_type: "contact",
  project_type: "kitchen_remodel",
  has_message: true
}

// Form Failure
{
  event: "form_submission",
  form_name: "contact_form",
  form_success: false,
  form_type: "contact",
  error_message: "Missing required fields"
}
```

### Press Contact Form Events

```javascript
// Button Click
{
  event: "button_click",
  button_name: "press_contact_form_submit",
  button_text: "Submit",
  form_type: "press_contact",
  button_location: "press_contact_form"
}

// Form Success
{
  event: "form_submission",
  form_name: "press_contact_form",
  form_success: true,
  form_type: "press_contact",
  project_type: "architectural_design"
}

// Form Failure
{
  event: "form_submission",
  form_name: "press_contact_form",
  form_success: false,
  form_type: "press_contact",
  error_message: "Invalid email format"
}
```

### Automatic Form Events

```javascript
// Any form submission
{
  event: "form_submission",
  form_name: "unknown_form",
  form_action: "/api/submit",
  form_method: "POST",
  form_location: "automatic_tracking",
  form_elements_count: 6
}
```

## GTM Configuration Required

### 1. Create Form-Specific Triggers

#### Contact Form Button Click Trigger

- **Event Name**: `button_click`
- **Condition**: `button_name` equals `contact_form_submit`

#### Contact Form Submission Trigger

- **Event Name**: `form_submission`
- **Condition**: `form_name` equals `contact_form`

#### Press Contact Form Button Click Trigger

- **Event Name**: `button_click`
- **Condition**: `button_name` equals `press_contact_form_submit`

#### Press Contact Form Submission Trigger

- **Event Name**: `form_submission`
- **Condition**: `form_name` equals `press_contact_form`

#### General Form Submission Trigger

- **Event Name**: `form_submission`
- **Use for**: All form submissions

### 2. Create Form-Specific Variables

#### Form Variables

- `{{DLV - form_name}}` - Name of the form
- `{{DLV - form_type}}` - Type of form (contact, press_contact)
- `{{DLV - form_success}}` - Success/failure status
- `{{DLV - project_type}}` - Selected project type
- `{{DLV - error_message}}` - Error message if failed

#### Button Variables

- `{{DLV - button_name}}` - Name of the button
- `{{DLV - button_text}}` - Text of the button
- `{{DLV - button_location}}` - Location of the button

### 3. Create Form Tracking Tags

#### Contact Form Success Tag

- **Tag Type**: Google Analytics: GA4 Event
- **Event Name**: form_submission
- **Parameters**:
  - form_name: `{{DLV - form_name}}`
  - form_type: `{{DLV - form_type}}`
  - form_success: `{{DLV - form_success}}`
  - project_type: `{{DLV - project_type}}`
- **Trigger**: Contact Form Submission Trigger + form_success equals true

#### Contact Form Failure Tag

- **Tag Type**: Google Analytics: GA4 Event
- **Event Name**: form_submission
- **Parameters**:
  - form_name: `{{DLV - form_name}}`
  - form_type: `{{DLV - form_type}}`
  - form_success: `{{DLV - form_success}}`
  - error_message: `{{DLV - error_message}}`
- **Trigger**: Contact Form Submission Trigger + form_success equals false

#### Form Button Click Tag

- **Tag Type**: Google Analytics: GA4 Event
- **Event Name**: button_click
- **Parameters**:
  - button_name: `{{DLV - button_name}}`
  - button_text: `{{DLV - button_text}}`
  - form_type: `{{DLV - form_type}}`
- **Trigger**: Form Button Click Triggers

## Testing Form Tracking

### 1. Test Contact Form

1. Navigate to `/contact`
2. Fill out the form with valid data
3. Click Submit
4. Check console for:
   - "GTM Event pushed: button_click"
   - "GTM Event pushed: form_submission"
5. Check GTM Preview mode for events

### 2. Test Contact Form Validation

1. Navigate to `/contact`
2. Fill out form with invalid data (missing fields or invalid email)
3. Click Submit
4. Check console for form failure events
5. Verify error tracking in GTM

### 3. Test Press Contact Form

1. Navigate to `/press`
2. Fill out the contact form
3. Click Submit
4. Check console for press contact form events
5. Verify tracking in GTM

### 4. Test Automatic Form Tracking

1. Any form submission should trigger automatic tracking
2. Check for "form_submission" events with automatic_tracking location
3. Verify form metadata is captured

## Expected Console Output

### Successful Form Submission

```
GTM Event pushed: button_click {button_name: "contact_form_submit", ...}
GTM Event pushed: form_submission {form_name: "contact_form", form_success: true, ...}
```

### Failed Form Submission

```
GTM Event pushed: button_click {button_name: "contact_form_submit", ...}
GTM Event pushed: form_submission {form_name: "contact_form", form_success: false, ...}
```

## Troubleshooting

### If Form Events Not Appearing

1. **Check Form Structure**

   - Verify forms have `onSubmit` handlers
   - Check that buttons are `type="submit"`
   - Ensure forms have proper validation

2. **Check GTM Loading**

   - Verify GTM is loaded on form pages
   - Check console for GTM loading status
   - Ensure dataLayer is available

3. **Check Event Names**

   - Verify event names match GTM triggers
   - Check for typos in event names
   - Ensure consistent naming conventions

4. **Check Form Validation**
   - Ensure validation doesn't prevent tracking
   - Check that tracking happens before validation errors
   - Verify error tracking is working

### Common Issues

1. **Forms using onClick instead of onSubmit**

   - Solution: Change to proper form submission handling

2. **Missing form state management**

   - Solution: Add proper form state and validation

3. **GTM not loaded on form pages**

   - Solution: Check GTM loading status and force loading if needed

4. **Event names don't match GTM triggers**
   - Solution: Update GTM triggers to match event names

## Next Steps

1. **Test Implementation**

   - Test all forms manually
   - Check console logs
   - Verify in GTM Preview mode

2. **Configure GTM**

   - Create the form-specific triggers
   - Set up the form tracking variables
   - Create the form tracking tags

3. **Monitor Results**

   - Check Google Analytics for form events
   - Monitor form conversion rates
   - Track form abandonment

4. **Optimize if Needed**
   - Remove duplicate events if necessary
   - Optimize event data structure
   - Add additional form metrics

The form tracking implementation should now capture all form submissions, button clicks, and form-related events properly in GTM.
