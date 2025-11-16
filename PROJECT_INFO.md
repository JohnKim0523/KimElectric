# Kim Electric LLC Website

Professional fire protection contractor website serving commercial and residential clients in New Jersey.

## Project Overview

This is a Next.js website for Kim Electric LLC, a licensed fire protection contractor specializing in:
- Fire Alarm Systems
- Fire Alarm Monitoring
- Commercial Fire Protection
- Residential Fire Safety

## Website Structure

### Pages
- **Home (`/`)** - Hero section, featured projects, company highlights, licensing info
- **About Us (`/about`)** - Company overview, services, team information
- **Contact Us (`/contact`)** - Contact form and company contact information
- **Online Payment (`/payment`)** - Payment portal placeholder

### Navigation
- Home
- Online Payment
- About Us
- Contact Us

## Design & Branding

### Color Scheme
- Primary Navy: `#273446`
- Secondary Dark Navy: `#1A2533`
- White: `#FFFFFF`
- Light Gray: `#F5F5F5`, `#F9FAFB`

### Typography
- Logo: Damion (cursive script font)
- Body: Inter (sans-serif)

### Key Features
1. **Licensed & Insured** - Fully licensed fire protection contractor
2. **Industry Experience** - Years of expertise in commercial and residential
3. **Quality Customer Service** - Dedicated to customer satisfaction

## Licensing Credentials

- **State of New Jersey Fire Protection Contractor Permit No. P01654**
- **NJ HIC License No. 13VH12649700**

## Notable Projects

- **46 Plaza (Palisades Park)** - Fire alarm monitoring and installation

## Technical Stack

- **Framework**: Next.js 16.0.2
- **React**: 19.2.0
- **TypeScript**: 5.9.3
- **Styling**: Tailwind CSS 4.1.17
- **Animations**: Framer Motion 12.23.24

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Server runs on port 5000 by default.

## Image Assets Needed

All images have been removed and replaced with placeholders. You need to add:

1. **Logo** - Kim Electric LLC company logo
2. **Hero Banner** - Professional fire protection imagery
3. **Project Photos** - 46 Plaza and other notable projects
4. **Team Photos** - Professional team/facility images
5. **Service Images** - Fire alarm systems, installation work, etc.

Place images in the `/public` directory and update the ImagePlaceholder components with actual Image components.

## Contact API

The contact form submits to `/api/contact` - ensure this endpoint is configured with your email service or contact management system.

## Notes

- Website is fully responsive (mobile, tablet, desktop)
- All sections use placeholder images that can be replaced with actual photos
- Color scheme matches Kim Electric LLC branding
- Licensing credentials are prominently displayed throughout the site
- Professional, clean design focused on fire protection services
