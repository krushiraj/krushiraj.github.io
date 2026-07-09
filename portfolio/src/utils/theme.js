import { createGlobalStyle } from "styled-components"
import { rhythm } from "./typography"

/**
 * Redesign 2026 - "Periwinkle Ink"
 *
 * Soft indigo-periwinkle accent on a cool ink canvas, with a full
 * light/dark theme. Every token is a CSS custom property so the theme
 * can flip at runtime (see <ThemeToggle /> and gatsby-ssr.js) without
 * re-rendering React - styled-components interpolate `var(--x)` and the
 * browser resolves it against the `data-theme` on <html>.
 *
 * Key trick: --accent is the *legibility-appropriate* shade per theme
 * (bright periwinkle on dark, deep periwinkle on light) and --ink is
 * always the opposite lightness. So "accent fill + ink text" - the
 * contact button - stays high-contrast in both themes for free.
 *
 * Legacy color keys (skyblue, yellow, goldenred, ...) are kept as
 * aliases so the older blog-post styles inherit the new theme too.
 */
const v = name => `var(--${name})`

const colors = {
  // new tokens
  ink: v("ink"),
  inkRaised: v("inkRaised"),
  inkOverlay: v("inkOverlay"),
  line: v("line"),
  lineSoft: v("lineSoft"),
  paper: v("paper"),
  paperBright: v("paperBright"),
  muted: v("muted"),
  faint: v("faint"),
  accent: v("accent"),
  accentBright: v("accentBright"),
  accentDeep: v("accentDeep"),

  // legacy aliases → new tokens
  background: v("ink"),
  text: v("paper"),
  headings: v("paperBright"),
  red: v("accent"),
  blue: v("muted"),
  skyblue: v("accentBright"),
  green: v("accentBright"),
  techfont: v("paper"),
  techborder: v("line"),
  yellow: v("paperBright"),
  lightyellow: v("muted"),
  palered: v("accent"),
  goldenred: v("muted"),
}

const fonts = {
  display: `"Fraunces", "Georgia", serif`,
  body: `"Hanken Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif`,
  mono: `"IBM Plex Mono", "SFMono-Regular", Menlo, Consolas, monospace`,
}

/** A translucent accent tint, theme-aware (used for glows and hovers). */
const accentTint = pct => `color-mix(in srgb, ${colors.accent} ${pct}, transparent)`

const GlobalStyle = createGlobalStyle`
  /* ---- theme tokens: dark is the default, light overrides ---- */
  :root, :root[data-theme="dark"] {
    color-scheme: dark;
    --ink: #0C0D11;
    --inkRaised: #141621;
    --inkOverlay: #1C1F2E;
    --line: rgba(226, 227, 245, 0.13);
    --lineSoft: rgba(226, 227, 245, 0.06);
    --paper: #E4E4EE;
    --paperBright: #F4F4FA;
    --muted: #9B9AB0;
    --faint: #66647C;
    --accent: #8E97F2;
    --accentBright: #B4BAF8;
    --accentDeep: #5A63D8;
  }

  :root[data-theme="light"] {
    color-scheme: light;
    --ink: #ECECF3;
    --inkRaised: #F7F7FC;
    --inkOverlay: #FFFFFF;
    --line: rgba(32, 30, 54, 0.14);
    --lineSoft: rgba(32, 30, 54, 0.07);
    --paper: #35333F;
    --paperBright: #17151F;
    --muted: #6B6982;
    --faint: #9C9AAE;
    --accent: #5A63D8;
    --accentBright: #4A53C8;
    --accentDeep: #3F47BC;
  }

  html {
    scroll-behavior: auto;
  }

  body {
    background: ${colors.ink};
    color: ${colors.text};
    font-family: ${fonts.body};
    font-display: auto;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    transition: background-color 0.3s ease, color 0.3s ease;
    /* safety net against horizontal scroll on small screens; clip (not
       hidden) so it does not break position: sticky */
    overflow-x: clip;
  }

  ::selection {
    background: ${colors.accent};
    color: ${colors.ink};
  }

  h1, h2, h3, h4 {
    font-family: ${fonts.display};
    font-weight: 550;
    letter-spacing: -0.01em;
    color: ${colors.headings};

    a {
      box-shadow: none;
      text-decoration: none;
      color: inherit;

      &:hover {
        text-decoration: none;
      }
    }
  }

  a {
    color: ${colors.headings};
    position: relative;
    text-decoration: none;
    display: inline-block;
    padding: 0;

    &:after {
      background: none repeat scroll 0 0 transparent;
      bottom: -1px;
      content: "";
      display: block;
      height: 1px;
      left: 50%;
      position: absolute;
      background: ${colors.accent};
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
      width: 0;
    }

    &:hover:after {
      width: 100%;
      left: 0;
    }

    &:hover {
      color: ${colors.paperBright};
    }

    &:active {
      color: ${colors.text};
    }

    &:visited {
      color: ${colors.text};
    }
  }

  hr {
    background: ${colors.line};
    height: 1px;
    border: none;
  }

  .gh-card-wrap {
    margin-top: 20px;
    .github-card {
      .card {
        margin: 0 auto;
        max-width: 400px;
        border-radius: 5px;
        border: 1px solid ${colors.line};
        .main {
          border-bottom: 1px solid ${colors.line};
          padding: 0 10px;
          .user {
            display: flex;
            .avatar {
              margin: 10px;
              border-radius: 50%;
              border: 2px solid ${colors.paper};
            }
            .user-details {
              margin: 10px;
              h3 {
                margin: 10px 0px;
              }
              p {
                margin: 0;
              }
            }

          }
        }
        .stats {
          padding: 0 10px;
          margin: 10px;
          text-align: right;
          .summary {
            font-size: 0.9em;
          }
        }
      }
      .card-caption {
        text-align: center;
        font-size: 0.8em;
        font-weight: 200;
        margin: 0;
        a {
          color: ${colors.muted};
        }
      }
    }
  }

  blockquote {
    background: ${colors.inkRaised};
    border-left: 2px solid ${colors.accent};
    margin-left: 0;
    padding: ${rhythm(0.5)} ${rhythm(0.75)};
    font-family: ${fonts.display};
    font-style: italic;
    font-size: 1.1em;
    color: ${colors.paper};
  }

  :not(pre) > code {
    border-radius: .3em;
    font-family: ${fonts.mono};
    color: ${colors.accentDeep};
    padding: .1em .3em;
    background: ${colors.inkRaised};
  }
`

export { colors, fonts, accentTint, GlobalStyle }
