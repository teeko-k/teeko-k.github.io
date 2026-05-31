# Photography Portfolio — Next.js + Tailwind

A dark, editorial-style photography & filmography portfolio. Built with Next.js 14 App Router and Tailwind CSS.

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# → http://localhost:3000

# Build for production
npm run build
npm start
```

---

## Project Structure

```
/
├── app/
│   ├── layout.js        # Root layout, fonts, metadata
│   ├── page.js          # Main page (assembles all sections)
│   └── globals.css      # Global styles, animations, custom properties
├── components/
│   ├── Header.js        # Sticky header + burger + overlay nav
│   ├── Hero.js          # Full-screen hero section
│   ├── Photography.js   # Masonry photo grid
│   ├── Filmography.js   # Film list with thumbnails
│   ├── About.js         # About section with portrait
│   ├── Contact.js       # Contact form + social links
│   └── Footer.js        # Footer
├── public/              # Static assets (add your images here)
├── tailwind.config.js
└── next.config.js
```

---

## Customisation Checklist

### 1. Your Details
Search and replace these placeholders across the codebase:
- `Your Name` → your actual name
- `@yourhandle` → your Instagram handle
- `hello@yourname.com` → your email
- `Based in your city` → your location
- `yourname.com` → your domain

### 2. Replace Placeholder Images
All images currently use Unsplash URLs. Replace them with your own:

**Using Next.js `<Image>` (recommended):**
```jsx
import Image from 'next/image'

// Replace <img> tags with:
<Image
  src="/your-photo.jpg"   // place in /public folder
  alt="Description"
  fill
  className="object-cover"
/>
```

**Update photo data in `components/Photography.js`:**
```js
const photos = [
  {
    id: 1,
    src: '/photos/your-photo-1.jpg',
    caption: 'Your caption',
    location: 'City, Country',
    year: '2024',
    span: 'row-span-2',  // makes the card taller in grid
  },
  // ...
]
```

**Update films in `components/Filmography.js`:**
```js
const films = [
  {
    title: 'Your Film Title',
    type: 'Short Film',           // Documentary, Brand Film, etc.
    year: '2024',
    duration: '4:32',
    thumbnail: '/films/thumb-1.jpg',
    description: 'Your description.',
  },
]
```

### 3. Instagram Link
Update in `Header.js`, `Contact.js`, and `Footer.js`:
```
href="https://instagram.com/yourhandle"
```

### 4. Hero Image
In `components/Hero.js`, replace the background URL:
```jsx
// Option A: Static image
backgroundImage: `url("/hero.jpg")`,

// Option B: Next.js Image component (better performance)
// Replace the div with:
<Image src="/hero.jpg" alt="Hero" fill className="object-cover opacity-40" priority />
```

### 5. About Portrait
In `components/About.js`, replace the portrait image similarly.

### 6. Contact Form
The form currently uses a simple alert. Wire it up to your preferred service:
- **Formspree**: add `action="https://formspree.io/f/YOUR_ID"` to the form
- **Resend / Nodemailer**: create an API route at `app/api/contact/route.js`
- **EmailJS**: drop in their SDK

---

## Fonts
- **Cormorant Garamond** — display headings (editorial, serif)
- **DM Sans** — body text (clean, legible)
- **Geist Mono** — labels, numbers, metadata

Loaded via Google Fonts in `app/layout.js`. Swap for any Google Fonts pair you prefer.

---

## Colour Palette
Defined in `tailwind.config.js` and `globals.css`:

| Token | Hex | Usage |
|-------|-----|-------|
| `obsidian` | `#0a0a0a` | Page background |
| `charcoal` | `#141414` | Card/surface backgrounds |
| `warm-white` | `#f5f0eb` | Primary text |
| `dim-white` | `#b8b0a8` | Secondary text, metadata |
| `amber` | `#c9a96e` | Accent colour |
| `amber-dim` | `#8a6f47` | Dimmed accent |

---

## Deployment

### Vercel (recommended)
```bash
npx vercel
```

### Netlify
```bash
npm run build
# Deploy the `.next` folder
```

---

## Tips
- The grain overlay (`globals.css`) adds subtle film texture — reduce opacity or remove if too strong
- The photo grid uses CSS grid with `auto-rows` — adjust `auto-rows-[320px]` in `Photography.js` for taller/shorter cells
- `row-span-2` on a photo makes it take double height in the grid — great for portrait shots
- All scroll animations use `IntersectionObserver` — no external animation library needed
