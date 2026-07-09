import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { MDXProvider } from "@mdx-js/react"

import mdxComponents from "../Mdx"
import Fonts from "./Fonts"
import ThemeToggle from "./ThemeToggle"
import { GlobalStyle, colors, fonts, accentTint } from "../../utils/theme"

/*
 * Same film-grain trick as the home page: data URIs inside
 * styled-components templates get mangled by stylis, so the grain is an
 * inline-styled element instead.
 */
const GRAIN =
  `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E` +
  `%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E` +
  `%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`

const grainStyle = {
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundImage: GRAIN,
  opacity: 0.05,
  pointerEvents: "none",
  zIndex: 0,
}

const Shell = styled.div`
  position: relative;
  min-height: 100vh;

  &:before {
    content: "";
    position: fixed;
    inset: 0;
    background: radial-gradient(
        55rem 35rem at 15% -8%,
        ${accentTint("8%")},
        transparent 60%
      ),
      radial-gradient(
        45rem 30rem at 95% 110%,
        ${accentTint("5%")},
        transparent 55%
      );
    pointer-events: none;
    z-index: 0;
  }

  .frame {
    position: relative;
    z-index: 1;
    max-width: 780px;
    margin: 0 auto;
    padding: 0 1.5rem 4rem;
  }

  header.masthead {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    padding: 2.2rem 0 0;

    .crumbs {
      font-family: ${fonts.mono};
      font-size: 0.72rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: ${colors.muted};
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.6rem;
      min-width: 0;

      a {
        color: ${colors.muted};

        &:hover {
          color: ${colors.paperBright};
        }
      }

      .sep {
        color: ${colors.faint};
      }

      .here {
        color: ${colors.accent};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 22ch;
      }
    }
  }

  footer.colophon {
    position: relative;
    z-index: 1;
    max-width: 780px;
    margin: 0 auto;
    padding: 2rem 1.5rem 4rem;
    font-size: 0.8rem;
    color: ${colors.faint};

    a {
      color: ${colors.muted};

      &:hover {
        color: ${colors.paperBright};
      }
    }
  }
`

/**
 * Shared shell for the writings index and post pages: the home page's
 * atmosphere (accent glow + grain), a mono breadcrumb masthead with the
 * theme toggle, a reading-width container, and the same minimal footer.
 * Includes the MDXProvider so post bodies keep code highlighting.
 */
const BlogShell = ({ crumbs = [], children }) => {
  const year = new Date().getFullYear()
  return (
    <Shell>
      <GlobalStyle />
      <Fonts />
      <div style={grainStyle} aria-hidden="true" />
      <div className="frame">
        <header className="masthead">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Krushi Raj Tula</Link>
            {crumbs.map(({ label, to }, i) => (
              <React.Fragment key={i}>
                <span className="sep">/</span>
                {to ? (
                  <Link to={to}>{label}</Link>
                ) : (
                  <span className="here">{label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
          <ThemeToggle />
        </header>
        <MDXProvider components={mdxComponents}>{children}</MDXProvider>
      </div>
      <footer className="colophon">
        © {year} Krushi Raj Tula · Designed &amp; built by me, like everything
        else here ·{" "}
        <a
          href="https://github.com/krushiraj/krushiraj.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source on GitHub
        </a>
      </footer>
    </Shell>
  )
}

export default BlogShell
