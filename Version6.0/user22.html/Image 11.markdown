---
name: FPV Education Design System
colors:
  surface: '#fbf8fa'
  surface-dim: '#dcd9db'
  surface-bright: '#fbf8fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f4'
  surface-container: '#f0edef'
  surface-container-high: '#eae7e9'
  surface-container-highest: '#e4e2e3'
  on-surface: '#1b1b1d'
  on-surface-variant: '#45474c'
  inverse-surface: '#303032'
  inverse-on-surface: '#f3f0f2'
  outline: '#75777d'
  outline-variant: '#c5c6cd'
  surface-tint: '#545f73'
  primary: '#091426'
  on-primary: '#ffffff'
  primary-container: '#1e293b'
  on-primary-container: '#8590a6'
  inverse-primary: '#bcc7de'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#1e1200'
  on-tertiary: '#ffffff'
  tertiary-container: '#35260c'
  on-tertiary-container: '#a38c6a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e3fb'
  primary-fixed-dim: '#bcc7de'
  on-primary-fixed: '#111c2d'
  on-primary-fixed-variant: '#3c475a'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#fadfb8'
  tertiary-fixed-dim: '#ddc39d'
  on-tertiary-fixed: '#271902'
  on-tertiary-fixed-variant: '#564427'
  background: '#fbf8fa'
  on-background: '#1b1b1d'
  surface-variant: '#e4e2e3'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 48px
  margin-tablet: 32px
  margin-mobile: 16px
---

## Brand & Style

The design system is anchored in the concept of "Technical Clarity." Designed for an FPV (First Person View) education platform, it balances the high-octane energy of drone flight with a disciplined, academic environment. The aesthetic is strictly minimalist, utilizing a "white and simplistic" foundation to reduce cognitive load, allowing complex technical diagrams and flight footage to take center stage.

The emotional response should be one of professional trust and precision. By removing unnecessary visual noise, this design system mirrors the clarity required for a "perfect line" in racing or a "clean shot" in cinematography. It avoids the stereotypical "gamer" aesthetic in favor of a sophisticated, high-end educational tool for serious pilots.

## Colors

This design system utilizes a high-key color palette to maximize the sense of "airiness." The foundation is pure white (#FFFFFF), used for the primary background to ensure a clean slate. Very light grays are employed for surface differentiation and container backgrounds to subtly guide the eye without breaking the minimalist flow.

The primary accent is **Midnight Indigo** (#1E293B), a deep, sophisticated blue-gray that provides high contrast against the white base. This color is reserved for primary actions, navigation states, and critical information, lending the platform a premium, authoritative feel. Secondary grays handle less critical UI elements and decorative borders, maintaining a soft, low-contrast hierarchy for the interface itself while allowing content—like drone videos and technical schematics—to provide the secondary color through their own imagery.

## Typography

This design system relies exclusively on **Inter**, a typeface celebrated for its exceptional legibility and neutral, utilitarian character. The typography strategy emphasizes a vertical hierarchy through weight and scale rather than decorative shifts. 

Headlines use semi-bold weights with slight negative letter-spacing to appear tight and structured. Body text is prioritized for readability with generous line-height (1.5x - 1.6x) to prevent eye fatigue during long technical lessons. Label styles utilize a slightly tighter tracking and uppercase transformations for functional metadata, creating a clear distinction between educational content and navigational UI elements.

## Layout & Spacing

The layout philosophy follows a strict 8px grid system to ensure mathematical harmony. A 12-column fixed grid is the standard for desktop, centered within the viewport with a maximum width of 1280px to prevent excessively long line lengths.

On mobile and tablet devices, the grid transitions to 4 and 8 columns respectively, using a fluid model. Spacing between components (margins and gutters) is kept generous to enhance the "airy" feel of the design system. Whitespace is treated as a functional element—use it to group related concepts and separate distinct modules, ensuring that the student is never overwhelmed by information density.

## Elevation & Depth

To maintain the minimalist and simplistic requirement, this design system eschews heavy shadows and skeuomorphic effects. Depth is primarily communicated through **Tonal Layers** and **Subtle Outlines**.

1.  **Level 0 (Base):** Pure White (#FFFFFF).
2.  **Level 1 (Sub-surfaces):** Very Light Gray (#F8FAFC) used for sidebars, secondary content areas, or card backgrounds.
3.  **Depth Markers:** Instead of shadows, use 1px borders in a soft gray (#E2E8F0) to define containers.
4.  **Interactive States:** Only use extremely diffused, low-opacity shadows (e.g., 8% opacity of Midnight Indigo) for elements that are physically "lifted," such as active dropdowns or modals. This keeps the interface feeling flat and modern while providing necessary affordances.

## Shapes

The shape language is disciplined and geometric. A subtle roundedness of **8px (0.5rem)** is applied to all primary UI elements including buttons, cards, and input fields. This radius is soft enough to feel modern and friendly but sharp enough to maintain a professional, technical edge.

Larger containers or sections may use a slightly larger radius (16px) for a "nested" look, while extremely small elements like tags or badges use a fully pill-shaped radius to distinguish them as discrete interactive tokens.

## Components

### Buttons
Primary buttons use a solid **Midnight Indigo** fill with white text. Secondary buttons utilize a "ghost" style with a 1px border and indigo text. Hover states should involve a subtle shift in background brightness or a very soft tint of the primary color.

### Cards
Cards are the primary vehicle for course content. They should have a 1px #E2E8F0 border, no shadow, and an 8px corner radius. The internal padding should be generous (24px or 32px) to keep the layout breathable.

### Form Inputs
Inputs use a white background with a #E2E8F0 border. Upon focus, the border transitions to Midnight Indigo with a subtle 2px outer ring (focus-ring) to ensure accessibility.

### Learning Modules
Specific to the FPV platform, course progress bars should be slim and use the primary indigo against a light gray track. Video players should be framed with the standard 8px radius to integrate seamlessly with the rest of the UI.

### Chips & Badges
Used for difficulty levels (e.g., "Beginner", "Advanced") or drone categories. Use light tinted backgrounds of the primary color with semi-bold text to ensure they are readable at small sizes.