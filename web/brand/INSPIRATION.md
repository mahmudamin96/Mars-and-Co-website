# Inspiration: two26.studio

What we take from it is its **feel and motion**: playful, confident and lively. We don't copy its layout, illustrations or copy. Everything is rebuilt in Mars & Co's own brand (see `BRAND.md`).

## Tech the site uses
- Built in Webflow, with **GSAP 3** (ScrollTrigger, SplitText, DrawSVG, MotionPath, CustomEase) and **Lenis** smooth scroll.
- Our equivalent: hand-built site + GSAP + Lenis. GSAP's plugins are now free, so we can use all of them.

## What makes it feel good
| # | Pattern on two26 | How it translates to Mars & Co |
|---|---|---|
| 1 | **Floating pill nav**: pills on the left, centered logo, hours plus a round "Let's Talk ↗" button on the right; stays fixed while scrolling | Same structure as our Figma nav (SERVICES · WORK · ABOUT, centered logo, a red dot plus START A PROJECT). It becomes a sticky pill bar. |
| 2 | **Hero:** huge condensed uppercase headline with small black **tilted label stickers** ("Independent studio", "No funny business") that pop in | "CRAFTING IDEAS FOR FORWARD **THINKING BRANDS**" with stickers like "Strategy-led", "Design-obsessed", "Built to perform" |
| 3 | **Curved marquee ribbon**: an orange band of text that scrolls endlessly | A Mars Red ribbon: "BRANDING • EXPERIENCE DESIGN • MARKETING • CONTENT • TECH ADVISORY •" |
| 4 | **Scroll-scrubbed text reveal**: a big statement fades from faint to solid letter by letter as you scroll, with tag pills dropping in | Our About statement ("We help ambitious brands grow…") in Larken serif fills from `#A4A7AE` to ink, letter by letter |
| 5 | **Showreel strip**: horizontal row of rounded media cards | Our "PLAY ▶ REEL" band |
| 6 | **Selected works**: 3-column tall cards with rounded corners, client avatar, name, category in accent color, and an orange ↗ button | Our Work cards: client name, category in red, round red ↗ |
| 7 | **"We could keep going…"** quirky closing line with tilted stickers plus a "See all projects" pill | Our own witty line, e.g. "THERE'S MORE WHERE THAT CAME FROM." |
| 8 | **Services as a path**: one thick orange line **draws itself** (DrawSVG) as you scroll, looping between big service names with icons and tilted description pills | Our five services along a red path that draws itself |
| 9 | **Testimonials**: a stack of tilted cards on an orange panel, with a side progress indicator | Same idea, using our "4.7/5" rating and quotes |
| 10 | **FAQ as a chat**: question pills, answers appear as chat bubbles with an avatar badge | Our "Curious?" section, with the answer bubble coming from a "mars&co" badge |
| 11 | **Footer reveal**: the orange footer slides up from under the page; giant logo; a cheeky line ("Okay, that's enough website") | Our red footer with the giant mars&co script logo (already in Figma) |

## Motion details
- Lenis smooth scroll (~1.1 lerp)
- Springy, bouncy easing (CustomBounce) on stickers and pills
- Everything enters with a slight tilt: rotate ±3–8°
- Round arrow buttons that **rotate or shift on hover**
- All motion is turned off for visitors who set "reduce motion" (`prefers-reduced-motion`)

## Visual differences to keep
- two26 uses orange `#FF5400` on a warm cream `#F8EEE8`. **We keep Mars Red `#CB423C` and our white/ink palette.** A soft warm off-white (e.g. `#FBF6F3`) could give us some of that warmth. Optional; decide before build.
- two26 relies on custom illustrations (cats, people). We don't have those. We lean on our script logo, photos of our work, and simple line icons instead.
