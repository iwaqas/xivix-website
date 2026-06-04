# XiViX LLC — Modern Website

Corporate website for XiViX LLC, a technology consulting and wealth management firm. Built with Next.js 14, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + `tailwindcss-animate`
- **Animations:** Framer Motion
- **Carousel:** Embla Carousel
- **UI Primitives:** Radix UI
- **Forms:** React Hook Form + Zod
- **Icons:** Lucide React
- **Language:** TypeScript

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> **Note:** If your network uses an SSL inspection proxy, run `npm config set strict-ssl false` before installing.

## Project Structure

```
app/
  layout.tsx          # Root layout (fonts, theme provider)
  page.tsx            # Home page — composes all sections
  globals.css         # Global styles and CSS variables

components/
  sections/
    navigation.tsx    # Sticky top nav with smooth-scroll links
    hero.tsx          # Hero section with background, headline, embedded services carousel, and CTA buttons
    services-carousel.tsx  # Shared carousel component (used in hero + services section)
    services.tsx      # Full services section with header and carousel
    about.tsx         # About / mission section
    values.tsx        # Company values section
    products.tsx      # Products showcase
    contact.tsx       # Contact form
    footer.tsx        # Site footer
  layouts/
    section.tsx       # Generic section wrapper
```

## Sections

| Section | ID | Description |
|---|---|---|
| Navigation | — | Fixed top bar with logo, nav links, and phone CTA |
| Hero | `#home` | Full-screen dark hero with animated particles, headline, services carousel, and CTA buttons |
| Services | `#services` | Business solutions carousel with 8 slides |
| About | `#about` | Company mission and background |
| Values | — | Core company values |
| Products | `#products` | Products and offerings |
| Contact | `#contact` | Contact form |

## Services Carousel

The carousel (`ServicesCarousel`) is a shared component that renders across two contexts:

- **Hero section** — dark theme (`theme="dark"`), autoplays on page load, sits between the headline and the CTA buttons
- **Services section** — light theme (`theme="light"`), animates in on scroll

Each slide features a split layout: full-bleed image with a number watermark on the left, and title, description, feature tags, and a "Get Started" CTA on the right. Adjacent slides peek in from the edges. Navigation includes prev/next arrows, dot indicators, and a slide counter.

## Business Solutions

1. Office Augmentation
2. AI & Data Tech
3. Hardware & Apps
4. Deployment Services
5. Remote Network Administration
6. Cyber & Information Security
7. eCommerce Virtual Agents
8. Wealth & Business Portfolio Management

## Contact

**XiViX LLC** — info@xivixllc.com | (949) 742-5202
