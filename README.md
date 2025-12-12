# Vera Drag Performer Website

An elegant Old Hollywood-themed website for drag performer Vera, featuring event management, contact forms, and curated photography.

## Features

- **Homepage**: Hero section with Vera's name, Instagram link, achievements, and curated photo gallery
- **Bio Page**: Full biography and background information
- **Upcoming Events**: Event listings managed through Contentful CMS
- **Book Me**: Contact form for booking inquiries (EmailJS integration)
- **Merch**: Link to Threadless merchandise store
- **Media**: Media appearances and press coverage

## Technology Stack

- **Framework**: Next.js 14 (App Router) with TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Contentful for event management
- **Form Handling**: EmailJS for contact form submissions
- **Icons**: Lucide React

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Contentful CMS Configuration
CONTENTFUL_SPACE_ID=your_contentful_space_id
CONTENTFUL_ACCESS_TOKEN=your_contentful_access_token

# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
```

### 3. Contentful Setup

1. Create a Contentful account at https://www.contentful.com
2. Create a new space
3. Create a content model called "Event" with the following fields:
   - `title` (Short text, required)
   - `date` (Date & time, required)
   - `endTime` (Date & time, optional)
   - `description` (Long text)
   - `address` (Short text)
   - `ticketLink` (Short text, URL)
   - `image` (Media, single asset, optional)
   - `published` (Boolean, default: true)
4. Get your Space ID and Access Token from Settings > API keys
5. Add them to your `.env.local` file

### 4. EmailJS Setup

1. Create an EmailJS account at https://www.emailjs.com
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template with the following variables:
   - `to_email`
   - `from_name`
   - `from_email`
   - `phone`
   - `event_date`
   - `event_type`
   - `message`
4. Set the "To Email" field in the template to: `thedeetzes@hotmail.com`
5. Get your Public Key, Service ID, and Template ID
6. Add them to your `.env.local` file

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 6. Build for Production

```bash
npm run build
npm start
```

## Image Curation

Curated images are located in `public/images/curated/`. To update the gallery:

1. Select images from `Images from Instagram/vera.just.vera/`
2. Copy them to `public/images/curated/` with names `vera-1.jpg`, `vera-2.jpg`, etc.
3. Update the `curatedImages` array in `app/page.tsx` if you add or remove images

## Design

- **Colors**: Black, White, Hot Pink (#FF1493)
- **Fonts**: Playfair Display (serif for headings), Lato (sans-serif for body)
- **Style**: Old Hollywood aesthetic with clean, minimalist layout

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Add your environment variables in Vercel's project settings
4. Deploy

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Homepage
│   ├── bio/page.tsx        # Bio page
│   ├── events/page.tsx     # Events page
│   ├── book-me/page.tsx    # Contact form page
│   ├── merch/page.tsx      # Merch page
│   └── media/page.tsx      # Media page
├── components/
│   ├── Navigation.tsx      # Main navigation
│   ├── Hero.tsx            # Homepage hero
│   ├── PhotoGallery.tsx    # Photo gallery
│   ├── EventCard.tsx       # Event card component
│   ├── ContactForm.tsx     # Contact form
│   └── MediaCard.tsx       # Media appearance card
├── lib/
│   ├── contentful.ts       # Contentful client
│   └── emailjs.ts          # EmailJS integration
└── public/
    └── images/curated/     # Curated photos
```

## License

Private project for Vera.
