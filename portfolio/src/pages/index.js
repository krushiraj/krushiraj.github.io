import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import SEO from "../components/SEO"
import { GlobalStyle, colors, accentTint } from "../utils/theme"
import {
  Fonts,
  Sidebar,
  navItems,
  About,
  Experience,
  Skills,
  Works,
  WritingsList,
  Contact,
  TerminalLink,
  smoothScrollToId,
} from "../components/v2"

/*
 * Subtle film-grain overlay (inline SVG turbulence, no asset needed).
 * Applied as an inline style on a dedicated element - data URIs inside
 * styled-components templates get mangled by stylis.
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

const Page = styled.div`
  position: relative;
  min-height: 100vh;

  /* atmosphere: accent glow top-left + bottom-right, plus faint grain */
  &:before {
    content: "";
    position: fixed;
    inset: 0;
    background: radial-gradient(
        60rem 40rem at 12% -5%,
        ${accentTint("9%")},
        transparent 60%
      ),
      radial-gradient(
        50rem 35rem at 95% 110%,
        ${accentTint("6%")},
        transparent 55%
      );
    pointer-events: none;
    z-index: 0;
  }

  .frame {
    position: relative;
    z-index: 1;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2.5rem;
    display: grid;
    /* minmax(0, …) so a wide child can never blow the track past the
       viewport (the classic 1fr grid overflow on mobile) */
    grid-template-columns: minmax(320px, 5fr) minmax(0, 7fr);
    gap: 4rem;

    @media (max-width: 1024px) {
      grid-template-columns: minmax(0, 1fr);
      gap: 0;
      padding: 0 1.5rem;
    }
  }

  main {
    padding-bottom: 4rem;
  }

  footer {
    position: relative;
    z-index: 1;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 2.5rem 5rem;
    font-size: 0.8rem;
    color: ${colors.faint};

    a {
      color: ${colors.muted};

      &:hover {
        color: ${colors.paperBright};
      }
    }

    @media (max-width: 1024px) {
      padding: 2rem 1.5rem 5rem;
    }
  }
`

const useActiveSection = () => {
  const [activeId, setActiveId] = useState(navItems[0].id)

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return undefined
    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: "-35% 0px -55% 0px" }
    )

    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return activeId
}

const IndexPage = ({ data, location }) => {
  const activeId = useActiveSection()
  const year = new Date().getFullYear()

  // Support deep links like /#experience (also used by old inbound links).
  // Deferred so it wins over Gatsby's own scroll restoration (which resets
  // the position right after hydration).
  useEffect(() => {
    const hash = location && location.hash
    if (!hash) return undefined
    const timer = setTimeout(() => smoothScrollToId(hash.slice(1)), 100)
    return () => clearTimeout(timer)
  }, [location])

  return (
    <Page>
      <GlobalStyle />
      <Fonts />
      <SEO />
      <div style={grainStyle} aria-hidden="true" />
      <div className="frame">
        <Sidebar activeId={activeId} />
        <main>
          <About />
          <Experience />
          <Skills />
          <Works />
          <WritingsList />
          <Contact />
        </main>
      </div>
      <footer>
        © {year} {data.site.siteMetadata.title} · Designed &amp; built by me,
        like everything else here ·{" "}
        <a
          href="https://github.com/krushiraj/krushiraj.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source on GitHub
        </a>
      </footer>
      <TerminalLink />
    </Page>
  )
}

export default IndexPage

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
