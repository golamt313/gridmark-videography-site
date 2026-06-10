---
name: Gridmark Videography
description: Strategic social media video content for Detroit businesses
colors:
  deep-black: "#050505"
  warm-white: "#fafafa"
  screen-gold: "#f8d17d"
  gold-contrast: "#1c1917"
  surface-dark: "#18181b"
  surface-deep: "#09090b"
  surface-elevated: "#27272a"
  muted-text: "#71717a"
  subtle-text: "#a1a1aa"
  light-text: "#d4d4d8"
  border-subtle: "#ffffff0d"
typography:
  display:
    fontFamily: "Geist Sans, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 3vw, 1.5rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.1em"
  headline:
    fontFamily: "Geist Sans, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 5vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Geist Sans, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.05em"
  body:
    fontFamily: "Geist Sans, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  label:
    fontFamily: "Geist Sans, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.1em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  pill: "9999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.screen-gold}"
    textColor: "{colors.gold-contrast}"
    rounded: "{rounded.pill}"
    padding: "16px 32px"
  button-primary-hover:
    backgroundColor: "#f0c06a"
    textColor: "{colors.gold-contrast}"
    rounded: "{rounded.pill}"
    padding: "16px 32px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.warm-white}"
    rounded: "{rounded.pill}"
    padding: "8px 24px"
  chip-active:
    backgroundColor: "{colors.screen-gold}"
    textColor: "{colors.gold-contrast}"
    rounded: "{rounded.pill}"
    padding: "8px 24px"
  chip-inactive:
    backgroundColor: "transparent"
    textColor: "{colors.muted-text}"
    rounded: "{rounded.pill}"
    padding: "8px 24px"
---

# Design System: Gridmark Videography

## 1. Overview

**Creative North Star: "The Curated Archive"**

Every frame is selected. Every piece earns its place. The site functions as a curated archive of cinematic work, not a freelancer's highlight reel. Dark, warm, unhurried. Visitors enter a space where the portfolio breathes and the interface recedes.

The system is committed-dark: a warm near-black canvas that lets the Screen Gold accent mark decisive moments. Tonal layering, not shadows, creates depth. Surfaces are flat at rest; the only glow belongs to the accent. Typography is uppercase and tracked-out at small sizes, giving labels and navigation a cinematic stamp. At display scale, the same family tightens its tracking for impact. The overall density is low, with generous negative space treating the viewport like a gallery wall.

This system explicitly rejects cookie-cutter freelancer portfolios with their stock vibes and template layouts, bloated agency sites that prioritize spectacle over substance, and neon club flyer aesthetics where flash substitutes for taste. As PRODUCT.md states: the craft speaks through composition, pacing, and selection. The site gets out of the way.

**Key Characteristics:**
- Dark warm canvas with tonal layering, no structural shadows
- Single accent (Screen Gold) used sparingly at decision points and highlights
- Uppercase tracked labels as cinematic stamps throughout
- 9:16 portrait video cards as the signature format
- Generous negative space, low visual density
- Framer Motion for entrance choreography only, no decorative animation

## 2. Colors

A dark, warm palette where one saturated gold marks every decisive moment.

### Primary
- **Screen Gold** (#f8d17d / oklch(0.83 0.13 80)): The singular accent. Used on CTAs, active states, client labels, and the few elements that must draw the eye. Never as a background wash or large fill outside of primary buttons.

### Neutral
- **Deep Black** (#050505 / oklch(0.022 0.005 80)): Page background. Warm-tinted near-black with a barely perceptible amber cast, like a darkroom.
- **Warm White** (#fafafa / oklch(0.98 0.005 80)): Primary text color. Tinted toward warmth, never pure white.
- **Gold Contrast** (#1c1917 / oklch(0.15 0.01 70)): Text on gold surfaces. A warm near-black that reads as confidently dark against Screen Gold.
- **Surface Dark** (#18181b / oklch(0.22 0.008 80)): Elevated surfaces like cards and pricing blocks. Warm-tinted zinc.
- **Surface Deep** (#09090b / oklch(0.14 0.008 80)): Deepest surface layer for CTA sections and overlays. Warm-tinted near-black.
- **Surface Elevated** (#27272a / oklch(0.27 0.008 80)): Hover states and mid-level surfaces. Warm-tinted zinc.
- **Muted Text** (#71717a / oklch(0.55 0.015 80)): Secondary text, inactive chips, captions. Tinted toward warmth.
- **Subtle Text** (#a1a1aa / oklch(0.70 0.015 80)): Tertiary text, hover states on muted elements.
- **Light Text** (#d4d4d8 / oklch(0.87 0.01 80)): High-emphasis secondary text, icon hover states.
- **Border Subtle** (#ffffff0d / oklch(0.98 0.005 80) at 5% opacity): Default border for cards and dividers. Barely there.

### Named Rules
**The One Accent Rule.** Screen Gold is the only saturated color on the page. It appears at decision points (buttons, active chips, client labels, package highlights) and never as decoration. Its rarity is the point. If a second saturated color feels needed, the solution is to remove something, not add a color.

**The Warm Dark Doctrine.** Every neutral, from the deepest black to the lightest gray, carries a chroma of 0.005 to 0.015 toward hue 80 (warm amber). Pure #000 or #fff is prohibited. The warmth is subtle but structural: it unifies the palette under the same light source as the gold accent.

## 3. Typography

**Display Font:** Geist Sans (system-ui, sans-serif fallback)
**Body Font:** Geist Sans (system-ui, sans-serif fallback)
**Mono Font:** Geist Mono (system monospace fallback)

**Character:** A single geometric sans with a wide weight range. At display scale it commands with bold weight and tight tracking; at label scale it stamps with uppercase and wide letter-spacing. The pairing of heavy heads and light bodies creates cinema-program contrast: the title card, then the screening notes.

### Hierarchy
- **Display** (700, clamp 1.25rem/3vw/1.5rem, 1.2, 0.1em tracking): Brand name and section markers. Always uppercase. The widest tracking in the system.
- **Headline** (700, clamp 1.875rem/5vw/3rem, 1.1, -0.01em tracking): Section headlines like "Video Content Packages" and "Ready to elevate your brand?" Negative tracking at scale for visual density.
- **Title** (700, 1.25rem, 1.3, 0.05em tracking): Package names, card client names. Uppercase for client labels.
- **Body** (400, 0.875rem, 1.625, normal tracking): Description text, package details, explanatory copy. Max line length 65ch.
- **Label** (700, 0.75rem, 1, 0.1em tracking): Category pills, package badges, CTA button text. Always uppercase. The cinematic stamp.

### Named Rules
**The Uppercase Stamp Rule.** Any text at 0.75rem or 0.875rem that functions as a label, badge, or navigation element is set uppercase with 0.1em letter-spacing. This is the signature type treatment. Headlines above 1.5rem use negative or neutral tracking.

## 4. Elevation

This system is flat by default. Depth is conveyed through tonal layering: stepping the background lightness from Deep Black (page) through Surface Deep and Surface Dark to Surface Elevated (hover). No element casts a structural shadow at rest.

The sole exception is the Screen Gold ambient glow: a diffuse radial shadow (e.g., `0 0 30px -5px` in the accent color) that appears on the Scale package card and CTA button. This glow is reserved for the primary conversion path and never used decoratively.

Modal overlays use a black scrim at 90% opacity with backdrop-blur-sm, creating a theatrical dimming effect consistent with the screening room metaphor.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. The only shadow-like effect is the Screen Gold glow on primary conversion elements. If a card appears to float, the background shade is wrong, not the shadow.

## 5. Components

### Buttons
- **Shape:** Pill (9999px radius)
- **Primary:** Screen Gold background, Gold Contrast text, 16px 32px padding, font-weight 700, uppercase, 0.1em tracking. Ambient gold glow on CTA variant.
- **Hover:** Slightly darker gold (#f0c06a), scale 1.02 for pricing cards, 1.05 for hero CTA.
- **Ghost:** Transparent background, white text, white/10 hover. Used in modal controls.
- **Focus:** Visible ring at 3px, matching accent tone.

### Chips (Category Filter)
- **Shape:** Pill (9999px radius)
- **Active:** Screen Gold background, Gold Contrast text, subtle gold ambient shadow.
- **Inactive:** Transparent background, Muted Text color, border-subtle border. Hover lightens to Subtle Text and border moves to Surface Elevated.
- **Transition:** 300ms all properties.

### Video Cards
- **Shape:** 12px radius (xl), 9:16 aspect ratio
- **Background:** Surface Dark
- **Border:** border-subtle at rest, Screen Gold at 50% opacity on hover
- **Internal Padding:** 20px bottom overlay (gradient from black/95 via black/60 to transparent)
- **States:** Static poster at rest, hover-to-play on desktop, tap-to-modal on mobile. Play button fades in on hover (scale 0.5 to 1.0, opacity 0 to 1.0). Client and title info appears in bottom gradient overlay on hover.
- **Note:** Contains a border-left stripe on the info overlay (2px Screen Gold). This is a known pattern from the current codebase that should be migrated to a full-width bottom gradient with background tint per the shared design bans on side-stripe borders.

### Video Modal
- **Shape:** 8px radius, 9:16 aspect ratio, max-width 500px
- **Scrim:** Black at 90% opacity, backdrop-blur-sm
- **Controls:** Appear on hover over bottom gradient overlay. Scrub bar, play/pause, mute toggles.
- **CTA:** Screen Gold pill button inline with controls for "Book: (313) 742-5658"

### Pricing Cards
- **Shape:** 16px radius (2xl)
- **Default:** Surface Deep at 50% opacity, border-subtle, transparent background
- **Best Value:** Surface Dark at 80% opacity, Screen Gold border, ambient gold glow (`0 0 30px -5px`), "Best Value" badge floating above card in Screen Gold pill
- **Hover:** Scale 1.02, border brightens to white/20
- **Internal Padding:** 24px

### CTA Section
- **Background:** Surface Deep with radial gradient from Surface Dark at center fading to Surface Deep
- **Button:** Screen Gold pill, Phone icon inline, font-weight 700, uppercase, ambient gold glow on hover
- **Text:** Headline with Screen Gold inline span for the key word

### Navigation
- **None.** The site is a single-page scroll with no persistent nav. Category filters serve as in-page navigation within the portfolio. BackToTop button appears after 500px scroll.

## 6. Do's and Don'ts

### Do:
- **Do** use Screen Gold only at decision points: primary buttons, active chips, client labels, and package highlights. Its rarity is its power.
- **Do** warm-tint every neutral toward hue 80 with chroma 0.005 to 0.015. Pure #000 and #fff are prohibited.
- **Do** use tonal layering (stepping background lightness) instead of shadows to convey depth.
- **Do** set labels and navigation text uppercase with 0.1em tracking for the cinematic stamp.
- **Do** keep the video card as the signature component: 9:16 portrait, hover-to-play, bottom gradient overlay.
- **Do** cap body line length at 65ch for readable prose.
- **Do** use exponential ease-out curves (ease-out-quart, ease-out-quint) for all motion.

### Don't:
- **Don't** use border-left or border-right greater than 1px as a colored accent stripe on cards, list items, or callouts. The current VideoCard info overlay uses a 2px border-left brand stripe; migrate to a full-width bottom gradient with background tint.
- **Don't** use `background-clip: text` with a gradient. Screen Gold is always a single solid color.
- **Don't** add glassmorphism (backdrop-blur cards) as a default surface treatment. The modal scrim blur is the only permitted use.
- **Don't** use the hero-metric template (big number, small label, gradient accent). This is a SaaS cliché, not a cinema archive.
- **Don't** create identical card grids repeating the same icon/heading/text pattern endlessly. Vary scale and emphasis.
- **Don't** add structural box-shadows to cards at rest. The system is flat by default; use tonal layering.
- **Don't** use cookie-cutter freelancer portfolio patterns, bloated agency spectacle, or neon club flyer aesthetics (per PRODUCT.md anti-references).
- **Don't** use em dashes. Use commas, colons, semicolons, periods, or parentheses.
- **Don't** animate CSS layout properties. Use transform and opacity only.
