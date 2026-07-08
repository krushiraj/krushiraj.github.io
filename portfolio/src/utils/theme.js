import { createGlobalStyle } from "styled-components"
import { rhythm } from "./typography"

/**
 * Redesign 2026 — "engineering editorial"
 *
 * Warm ink canvas, paper-white type, vermillion accent (a refined
 * descendant of the original #e10000 brand red).
 *
 * The legacy color keys (skyblue, yellow, goldenred, ...) are kept as
 * aliases so older styled-components (blog post styles) keep working,
 * but they now resolve into the new palette.
 */
const palette = {
  ink: "#0D0C0A",
  inkRaised: "#161411",
  inkOverlay: "#1E1B17",
  line: "rgba(232, 226, 214, 0.14)",
  lineSoft: "rgba(232, 226, 214, 0.08)",
  paper: "#E9E3D6",
  paperBright: "#F7F3EA",
  muted: "#A69D8C",
  faint: "#6E675B",
  accent: "#FF4A2F",
  accentBright: "#FF6A50",
  accentDeep: "#B62E1A",
}

const colors = {
  // new tokens
  ...palette,

  // legacy aliases — old keys mapped into the new palette
  background: palette.ink,
  text: palette.paper,
  headings: palette.paperBright,
  red: palette.accent,
  blue: palette.muted,
  skyblue: palette.accentBright,
  green: palette.accentBright,
  techfont: palette.paper,
  techborder: palette.line,
  yellow: palette.paperBright,
  lightyellow: palette.muted,
  palered: palette.accent,
  goldenred: palette.muted,
}

const fonts = {
  display: `"Fraunces", "Georgia", serif`,
  body: `"Hanken Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif`,
  mono: `"IBM Plex Mono", "SFMono-Regular", Menlo, Consolas, monospace`,
}

/**
 * Global styles are placed here instead of gatsby-browser.js
 * because we make use of the power of styled-components
 * and can change the theme easily.
 */
const GlobalStyle = createGlobalStyle`
  body {
    background: ${colors.ink};
    color: ${colors.text};
    font-family: ${fonts.body};
    font-display: auto;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
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
    color: ${colors.accentBright};
    padding: .1em .3em;
    background: ${colors.inkRaised};
  }
`

export { colors, fonts, GlobalStyle }
