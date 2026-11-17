# Mars & Co website

Next.js 16 (App Router) + GSAP 3 + Lenis. The brand comes from the Figma file (`../brand/BRAND.md`); the motion and feel are inspired by two26.studio (`../brand/INSPIRATION.md`).

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Pages

| Route | Figma frame |
|---|---|
| `/` | Landing page |
| `/about` | About Us |
| `/services` | Services + Services Details (tiles open the detail panel; `/services#marketing` deep-links) |
| `/work` | Work (filters for region / industry / service) |
| `/work/[slug]` | Case Study Details |
| `/contact` | Contact |

## Where things live

- `src/lib/content.ts` — **all copy, project data and image paths**. Edit text here.
- `src/app/globals.css` — design tokens (colours, fonts, spacing), buttons, stickers, form fields.
- `src/app/layout.css`, `sections.css`, `pages.css` — component and page styles.
- `src/components/motion.tsx` — reusable animations: `Reveal`, `SplitLines`, `ScrubText` (letter-by-letter colour fill), `Stickers`, `Marquee`, `Counter`, `Parallax`.
- `src/components/sections/*` — page sections.
- `public/figma/*` — images exported from Figma (converted to WebP by `scripts/optimize-images.mjs`).

## Fonts

The brand fonts (Atelia, Larken, Aeonik Pro, Aeonik Mono) are commercial. Free stand-ins are loaded in `src/app/layout.tsx`:
Montserrat 900 → Atelia, Fraunces → Larken, Instrument Sans → Aeonik Pro, DM Mono → Aeonik Mono.
Once licensed, load the real files with `next/font/local` and point the `--font-*` variables at them.

## Still placeholder (search for `TODO`)

- Footer email/phone and blurb, testimonials, stats numbers, insight articles, team names.
- Work projects use Figma's sample clients and one shared image; only SAFF has a real case study.
- Forms (`StartProject`, `ContactForm`, FAQ) show a thank-you message but don't send anywhere yet.
- The showreel button has no video yet.
