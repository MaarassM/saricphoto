# SaricPhoto - Professional Photography Portfolio

A modern, responsive portfolio website for a professional photographer based in Pula, Croatia. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Hero Section** with animated background and photographer branding
- **About Section** showcasing the photographer's story and experience
- **Portfolio Gallery** with categories:
  - Apartments
  - Weddings
  - Events
  - Promotions
- **Contact Section** with contact information and inquiry form
- **Smooth Animations** using Framer Motion
- **Fully Responsive** design for all devices
- **SEO Optimized** with Next.js metadata

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Vercel** - Deployment platform (recommended)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd saricphoto
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Add the logo image:
   - Place the SaricPhoto logo in `/public/images/` as `logo.jpg` or `logo.png`

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment on Vercel

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

2. Go to [vercel.com](https://vercel.com) and sign up/login

3. Click "Add New Project"

4. Import your repository

5. Vercel will automatically detect Next.js and configure the build settings

6. Click "Deploy"

Your site will be live in minutes!

### Environment Variables (if needed)

If you add environment variables later, create a `.env.local` file:

```bash
# Example
NEXT_PUBLIC_CONTACT_EMAIL=contact@saricphoto.com
```

Then add them in Vercel's project settings.

## Customization

### Colors

The color scheme is based on the SaricPhoto logo (navy blue). To customize colors, edit `tailwind.config.ts`:

```typescript
colors: {
  primary: { ... },
  navy: { ... },
}
```

### Content

- **Hero text**: `components/Hero.tsx`
- **About section**: `components/About.tsx`
- **Portfolio images**: `components/Portfolio.tsx` (replace Unsplash URLs with real images)
- **Contact info**: `components/Contact.tsx`

### Adding Real Photos

Replace the Unsplash URLs in `components/Portfolio.tsx` with your actual photo URLs:

```typescript
const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    category: 'apartments',
    title: 'Your Photo Title',
    imageUrl: '/images/your-photo.jpg'
  },
  // ... more items
];
```

Place your images in the `/public/images/` directory.

## Project Structure

```
saricphoto/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   └── Portfolio.tsx
├── public/
│   └── images/
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## License

All rights reserved © 2026 SaricPhoto

## Support

For issues or questions, please open an issue in the repository or contact the developer.
