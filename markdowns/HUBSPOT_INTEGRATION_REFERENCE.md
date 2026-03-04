# HubSpot Integration Reference

## Current Configuration

### HubSpot Account Details
- **Portal ID**: `243705543`
- **Form GUID**: `6de90993-88c4-4beb-8608-1ca14a841aaa`
- **Tracking Script**: `//js-na2.hs-scripts.com/243705543.js`

### API Endpoint
```
https://api.hsforms.com/submissions/v3/integration/submit/243705543/6de90993-88c4-4beb-8608-1ca14a841aaa
```

## How It Works

### Form Fields Mapped to HubSpot
The contact form collects the following data and maps it to HubSpot fields:

```javascript
{
  fields: [
    { name: 'firstname', value: data.first_name },
    { name: 'lastname', value: data.last_name },
    { name: 'email', value: data.email },
    { name: 'phone', value: data.phone },
    { name: 'message', value: [
      'Event Type: ' + data.event_type,
      'Event Date: ' + data.event_date,
      'Guest Count: ' + data.guest_count,
      'Venue: ' + data.venue_name,
      'Location: ' + data.venue_location,
      'Services: ' + data.services.join(', '),
      'Additional Details: ' + data.additional_details
    ].join('\n') }
  ],
  context: {
    pageUri: window.location.href,
    pageName: document.title
  }
}
```

### Smart Workaround for Free Plan
Since HubSpot Free limits custom properties, all event-specific details (event type, date, guest count, venue, services) are concatenated into the standard "message" field. This preserves all data without requiring paid custom fields.

## Current Implementation Location

**File**: `contact.html` (lines 425-487)

The form submission logic:
1. Prevents default form submission
2. Validates required fields (first name, last name, email)
3. Collects all form data via `FormData` API
4. Formats data for HubSpot API
5. Sends POST request to HubSpot
6. Shows success message on completion
7. Tracks conversion in Google Analytics

## Integration Points

### 1. Form HTML
- Multi-step wizard (4 steps)
- Event type selection (radio buttons)
- Event details (date, guest count, venue, location)
- Services needed (checkboxes)
- Contact info (name, email, phone, additional details)

### 2. JavaScript Handler
- Located in `<script>` tag at bottom of `contact.html`
- Handles step navigation and form submission
- Formats data for HubSpot API
- Shows success/error states

### 3. HubSpot Tracking Script
```html
<script type="text/javascript" id="hs-script-loader" async defer src="//js-na2.hs-scripts.com/243705543.js"></script>
```

This script enables:
- Page view tracking
- Form analytics
- Visitor identification
- Cookie-based tracking

## Alternative Options (For Future Reference)

### Option 1: Netlify Forms
**Pros:**
- Free, unlimited submissions
- Built into Netlify hosting
- Can forward to email or Zapier
- Spam filtering included

**Implementation:**
```html
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact">
  <!-- your fields -->
</form>
```

**Cons:**
- Less CRM integration than HubSpot
- Submissions stored in Netlify dashboard (not a full CRM)

### Option 2: Keep HubSpot + Add Netlify Backup
Use both: HubSpot as primary, Netlify as failover if HubSpot API fails.

### Option 3: Upgrade HubSpot
**Starter Plan** (~$20/month) adds:
- Custom contact properties
- Email automation
- Better reporting
- More form fields

## Notes

- Current setup is working well for a free plan
- The "message field concatenation" is a smart workaround
- Form has good UX with multi-step wizard
- Proper error handling and success states
- Google Analytics tracking integrated

## Free Plan Limitations to Watch

- **Monthly submission limits** (typically 1,000+ on free)
- **Limited custom properties** (currently bypassed with message field)
- **Basic email notifications only**
- **Limited automation workflows**

If you start getting high volume or need better lead qualification, consider upgrading to HubSpot Starter or switching to Netlify Forms + Zapier for more flexibility.
