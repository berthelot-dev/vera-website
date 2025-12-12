# Setup Guide for Vera Website

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Create a `.env.local` file in the root directory:
   ```env
   CONTENTFUL_SPACE_ID=your_space_id
   CONTENTFUL_ACCESS_TOKEN=your_access_token
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

## Contentful Setup (for Events Management)

### Step 1: Create Contentful Account
1. Go to https://www.contentful.com
2. Sign up for a free account
3. Create a new space (choose "Empty space")

### Step 2: Create Event Content Model
1. Go to Content model in the sidebar
2. Click "Add content type"
3. Name it "Event" and set API Identifier to "event"
4. Add the following fields:

   **Title** (Short text)
   - Name: Title
   - Field ID: title
   - Required: Yes

   **Date** (Date & time)
   - Name: Date
   - Field ID: date
   - Required: Yes

   **End Time** (Date & time)
   - Name: End Time
   - Field ID: endTime
   - Required: No

   **Description** (Long text)
   - Name: Description
   - Field ID: description
   - Required: No

   **Address** (Short text)
   - Name: Address
   - Field ID: address
   - Required: No

   **Ticket Link** (Short text)
   - Name: Ticket Link
   - Field ID: ticketLink
   - Required: No
   - Validation: URL format

   **Image** (Media)
   - Name: Image
   - Field ID: image
   - Required: No
   - Allowed media types: Images only

   **Published** (Boolean)
   - Name: Published
   - Field ID: published
   - Required: Yes
   - Default value: true

5. Click "Save" and then "Publish"

### Step 3: Get API Credentials
1. Go to Settings > API keys
2. Click "Add API key"
3. Copy the "Space ID" and "Content Delivery API - access token"
4. Add them to your `.env.local` file

### Step 4: Create Your First Event
1. Go to Content in the sidebar
2. Click "Add entry"
3. Select "Event"
4. Fill in the event details
5. Make sure "Published" is checked
6. Click "Publish"

## EmailJS Setup (for Contact Form)

### Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com
2. Sign up for a free account

### Step 2: Add Email Service
1. Go to Email Services
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Copy the "Service ID"

### Step 3: Create Email Template
1. Go to Email Templates
2. Click "Create New Template"
3. Set "To Email" to: `thedeetzes@hotmail.com`
4. Set "From Name" to: `fro{{m_name}}`
5. Set "From Email" to: `{{from_email}}`
6. Set "Subject" to: `Booking Inquiry from {{from_name}}`
7. Set "Content" to:
   ```
   Name: {{from_name}}
   Email: {{from_email}}
   Phone: {{phone}}
   Event Date: {{event_date}}
   Event Type: {{event_type}}
   
   Message:
   {{message}}
   ```
8. Click "Save"
9. Copy the "Template ID"

### Step 4: Get Public Key
1. Go to Account > General
2. Copy your "Public Key"

### Step 5: Add to Environment Variables
Add all three values (Public Key, Service ID, Template ID) to your `.env.local` file.

## Testing

1. **Test the website:**
   ```bash
   npm run dev
   ```
   Visit http://localhost:3000

2. **Test Contentful integration:**
   - Create an event in Contentful
   - Visit http://localhost:3000/events
   - You should see your event listed

3. **Test EmailJS integration:**
   - Visit http://localhost:3000/book-me
   - Fill out and submit the form
   - Check thedeetzes@hotmail.com for the email

## Troubleshooting

### Events not showing?
- Check that Contentful credentials are correct in `.env.local`
- Verify the content model is named "event" (lowercase)
- Make sure events are published in Contentful
- Check browser console for errors

### Contact form not working?
- Verify EmailJS credentials are correct
- Check that the template variables match exactly
- Make sure the "To Email" in the template is set correctly
- Check browser console for errors

### Images not loading?
- Verify images exist in `public/images/curated/`
- Check that image paths in `app/page.tsx` match the actual filenames
- Ensure image file extensions are correct (.jpg, .jpeg, .png)

