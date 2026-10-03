# Avgova Solutions — React + Tailwind Frontend

A responsive frontend recreation of the public Avgova Solutions homepage, using the live site as the structural/content reference and a refreshed visual system.

## What changed

- React + Vite frontend
- Tailwind CSS v4
- Framer Motion scroll/reveal/hover animations
- New professional palette: deep navy, teal and violet
- New font pairing: Space Grotesk + DM Sans
- Responsive mobile / tablet / laptop layouts
- Mobile navigation drawer
- Program category filtering
- FAQ accordion
- Animated stats and trust bar
- Internship domain section
- Resource hub section
- Contact form UI
- Separate component files
- Reference images supplied in `/public/assets`

## Project structure

```text
avgova-pro/
├── public/
│   └── assets/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── FAQ.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── InternshipCTA.jsx
│   │   ├── Journey.jsx
│   │   ├── Logo.jsx
│   │   ├── Navbar.jsx
│   │   ├── Programs.jsx
│   │   ├── ResourceHub.jsx
│   │   ├── SectionHeading.jsx
│   │   ├── Stats.jsx
│   │   ├── TrustBar.jsx
│   │   └── WhyUs.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Requirements

- Node.js 18+ recommended
- npm 9+

## Install

```bash
npm install
```

## Run development server

```bash
npm run dev
```

Open the local Vite URL, normally:

```text
http://localhost:5173
```

## Production build

```bash
npm run build
```

## Preview production build

```bash
npm run preview
```

## Deploy to Vercel

1. Push this folder to GitHub.
2. Import the repository into Vercel.
3. Framework preset: Vite.
4. Build command: `npm run build`.
5. Output directory: `dist`.

## Deploy to Netlify

Build command:

```text
npm run build
```

Publish directory:

```text
dist
```

For a single-page app, add a redirect from all paths to `/index.html` if you later add client-side routes.

## Connecting the form

`Contact.jsx` currently prevents submission because this is a frontend-only implementation. Replace the submit handler with your API call, Formspree, Firebase, Supabase, or your own backend endpoint.

## Replacing images

Put production images in:

```text
public/assets/
```

Then reference them with paths such as:

```jsx
<img src="/assets/your-image.png" alt="..." />
```

## Notes

The implementation is intentionally not a pixel-for-pixel copy of the live site's styling. It keeps the site's information architecture and content direction while changing the typography, palette, component styling, responsiveness and motion as requested.
