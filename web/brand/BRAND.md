# Mars & Co — Brand Brief

Taken from the Figma file "Demo mars and Co", page **-->UI Desgin** (`1208:63`), Section 1.

## Positioning
- **What they are:** A creative studio that builds bold, user-centric digital experiences so brands can stand out and grow.
- **Tagline (hero):** "Crafting ideas for forward thinking brands"
- **Core promise:** Strategy + design + technology. Brands that "don't just stand out, they stand for something." Creative thinking that leads to measurable results.
- **Services:** Branding · Experience Design (UI/UX) · Marketing · Content · Tech Advisory
- **Industries:** Fintech · Healthtech · SaaS · D2C & Wellness · Hospitality
- **Voice:** Confident and warm, with a bit of wit. Example: the contact form asks "Why do round pizzas come in square boxes?" CTAs are short and direct: "Start a Project", "Know More", "View All FAQs", "Knock Our Door".

## Logo
- A rounded script wordmark, **"mars&co"**, all lowercase, with heavy monoline strokes and a retro feel.
- File: `assets/logo-marsandco.svg` (215 × 40). It appears red on white in the nav and white on red as a full-width footer graphic.

## Color
| Token | Hex | Use |
|---|---|---|
| Mars Red | `#CB423C` | Signature accent: hero highlight words, services block, market band, footer |
| Mars Red Deep | ~`#B0302B` | Footer bottom bar (sampled from the screenshot) |
| Ink | `#2B2B2B` | Headlines, nav, primary button |
| Near Black | `#181818` / `#1B1B1B` | Dark sections ("Curious?" FAQ band, Contact card) |
| Paragraph Dark | `#545459` | Body text, eyebrow labels (Figma variable) |
| Muted Gray | `#A4A7AE` | Second half of two-tone headlines |
| Paragraph Light | `#E6E6E6` | Body text on dark backgrounds (Figma variable) |
| Border | `#E9E9E9` | Nav divider, hairlines |
| White | `#FFFFFF` | Main background |

Shadow token: `0 12px 24px rgba(0,0,0,0.06)`.

## Typography
| Role | Font in Figma | Spec | Free fallback |
|---|---|---|---|
| Display / H1 | **Atelia** (also ABC Solar Display Extrabold) | 110px / 98px, UPPERCASE, −1.1px tracking | Archivo Black, Anton |
| Editorial serif | **Larken** | 56px / 64px, capitalized, two-tone (black + `#A4A7AE`) | Fraunces, Playfair Display |
| UI / body | **Aeonik Pro** (Regular, Medium) | Body 24/34 and 32/40, nav 16 Medium uppercase, buttons 20 Medium | Inter, Manrope, General Sans |
| Mono labels | **Aeonik Mono** | 24/40 eyebrows ("About Us", "FILTER:", tags) | JetBrains Mono, DM Mono |

The type system mixes three voices: a **chunky uppercase display** face for impact, an **elegant serif** for storytelling, and a **mono** face for small technical labels.

## Layout & components
- 1440 canvas, **100px side padding**, sections about 96–120px apart vertically.
- **Nav:** links on the left (SERVICES · WORK · ABOUT), logo centered, a red dot plus "START A PROJECT" on the right, and a hairline bottom border.
- **Buttons:** pill-shaped (`radius 100px`), 32 × 16 padding. Primary is filled `#2B2B2B`; secondary is a 2px black outline.
- **Work cards:** full-bleed photos with a dark gradient at the bottom, a small mono "Branding" tag pill, a short subtitle, and the client name in serif.
- **Signature moves:** red full-bleed blocks where the services list is set in big uppercase type; a "PLAY ▶ REEL" video band; a footer with a giant logo; two-tone serif headlines; a "Curious?" FAQ band.

## Page inventory (Figma)
Landing (`1632:453`) with its scroll states · About Us (`1654:300`) · Services (`1732:18793`) · Service Details (`1733:19657`) · Work, plus a hover state (`1661:12971`, `1733:20841`) · Case Study, light and heavy text (`1669:13509`, `1736:21249`) · Contact (`1676:14393`) · Footer (`2058:1479`).

## Landing page section order
1. Hero (headline, intro paragraph, CTA)
2. Showreel ("Play ▶ Reel", dark band)
3. About statement (two-tone serif headline) with a client logo strip
4. Stats cards (Years of Experience, Awards, Projects Done, Satisfied Clients)
5. Red services block with a grid of work cards
6. Industries carousel
7. "Mars & Co Market" red band
8. Testimonials (4.7/5)
9. "Curious?" FAQ band
10. Insights / blog cards
11. "Start your project" contact card
12. Red footer with the giant wordmark

## Notes
- Atelia, Larken, Aeonik Pro and ABC Solar are commercial fonts. The site needs licenses for them, or the fallbacks above.
- The footer and some cards still contain placeholder text (lorem ipsum, `mars@email.com`, a sample phone number).
