# GTM Setup for Next.js

## What's Been Implemented

1. **GoogleTagManager Component** - Uses `@next/third-parties` for proper GTM integration
2. **GTMPageTracker** - Automatically tracks page views on client-side navigation
3. **GTM Utilities** - Helper functions for tracking custom events

## Events Tracked

- **Page Views**: `page_view` (automatic)
- **Form Submissions**: `form_submission` (with success/failure tracking)
- **Button Clicks**: `button_click`
- **Link Clicks**: `link_click`
- **Custom Events**: Any event via `pushGTMEvent()`

## Usage Examples

```typescript
import { trackFormSuccess, trackFormFailure } from '@/utils/gtm';

// Track successful form submission
trackFormSuccess('contact_form', { form_type: 'contact' });

// Track failed form submission
trackFormFailure('contact_form', { error: 'validation_failed' });
```

## Next Steps

1. Install the package: `pnpm install @next/third-parties@latest next@latest`
2. Test tracking in GTM Preview mode
3. Create triggers for the custom events in GTM
4. Set up conversion tracking tags

The system is now ready to capture page views and form submissions properly! 