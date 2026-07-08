import Typography from "typography"

/**
 * Redesign 2026 type stack:
 *  - Fraunces (display serif) for headings
 *  - Hanken Grotesk for body copy
 *  - IBM Plex Mono for labels / code (applied per-component)
 *
 * The font files themselves are loaded via the <Fonts /> Helmet
 * component (src/components/v2/Fonts.js) using the css2 API, since
 * typography.js's googleFonts option only speaks the legacy API.
 */
const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: ["Fraunces", "Georgia", "serif"],
  bodyFontFamily: [
    "Hanken Grotesk",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== "production") {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
