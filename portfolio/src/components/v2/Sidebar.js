import React from "react"
import styled from "styled-components"
import { colors, fonts, accentTint } from "../../utils/theme"
import { media, smoothScrollToId } from "./shared"
import ThemeToggle from "./ThemeToggle"

const StyledSidebar = styled.aside`
  position: sticky;
  top: 0;
  align-self: flex-start;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 4rem 3rem 3rem 0;

  ${media.tablet} {
    position: relative;
    min-height: auto;
    padding: 4rem 0 0;
  }

  .portrait {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center top;
    margin: 0 0 1.5rem;
    display: block;
    background: radial-gradient(
      circle at 50% 28%,
      ${accentTint("34%")},
      ${accentTint("10%")} 72%
    );
    outline: 1px solid ${accentTint("55%")};
    outline-offset: 4px;
    box-shadow: 0 10px 24px -10px ${accentTint("45%")};
  }

  .theme-toggle {
    margin-top: 1.75rem;
  }

  h1 {
    font-family: ${fonts.display};
    font-size: clamp(2.4rem, 3.6vw, 3.1rem);
    font-weight: 580;
    letter-spacing: -0.03em;
    line-height: 1.02;
    margin: 0 0 0.9rem;
    color: ${colors.paperBright};

    em {
      font-style: italic;
      font-weight: 420;
      color: ${colors.accent};
    }
  }

  .role {
    font-family: ${fonts.mono};
    font-size: 0.8rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: ${colors.paper};
    margin: 0 0 0.4rem;

    a {
      color: ${colors.accentBright};
    }
  }

  .tagline {
    font-size: 1rem;
    line-height: 1.65;
    color: ${colors.muted};
    max-width: 34ch;
    margin: 0.75rem 0 0;
  }

  nav {
    margin: 2rem 0 0;

    ${media.tablet} {
      display: none;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    li {
      margin: 0;
    }

    a {
      display: flex;
      align-items: center;
      gap: 0.9rem;
      padding: 0.45rem 0;
      color: ${colors.faint};
      font-family: ${fonts.mono};
      font-size: 0.78rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;

      &:after {
        display: none;
      }

      .idx {
        font-size: 0.65rem;
        color: ${colors.faint};
        transition: color 0.25s ease;
      }

      .tick {
        width: 1.6rem;
        height: 1px;
        background: ${colors.faint};
        transition: width 0.25s ease, background 0.25s ease;
      }

      &:hover {
        color: ${colors.paperBright};

        .tick {
          width: 2.6rem;
          background: ${colors.paper};
        }
      }

      &.active {
        color: ${colors.paperBright};

        .idx {
          color: ${colors.accent};
        }

        .tick {
          width: 3.4rem;
          background: ${colors.accent};
        }
      }
    }
  }
`

export const navItems = [
  { id: "about-me", index: "01", title: "About" },
  { id: "experience", index: "02", title: "Experience" },
  { id: "skills", index: "03", title: "Skills" },
  { id: "my-works", index: "04", title: "Works" },
  { id: "writings", index: "05", title: "Writings" },
  { id: "contact", index: "06", title: "Contact" },
]

const Sidebar = ({ activeId }) => (
  <StyledSidebar>
    <div>
      <picture>
        <source
          type="image/webp"
          srcSet="/krushi-portrait-256.webp 256w, /krushi-portrait-512.webp 512w"
          sizes="76px"
        />
        <img
          className="portrait"
          src="/krushi-portrait-256.png"
          srcSet="/krushi-portrait-256.png 256w, /krushi-portrait-512.png 512w"
          sizes="76px"
          width="76"
          height="76"
          alt="Krushi Raj Tula"
        />
      </picture>
      <h1>
        Krushi Raj
        <br />
        <em>Tula</em>
      </h1>
      <p className="role">
        Full-Stack Engineer ·{" "}
        <a
          href="https://www.paperpile.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Paperpile
        </a>
      </p>
      <p className="tagline">
        I design and scale backend systems, ship developer tools people
        actually enjoy, and build AI-native products end to end.
      </p>

      <nav aria-label="Section navigation">
        <ul>
          {navItems.map(({ id, index, title }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={activeId === id ? "active" : ""}
                aria-current={activeId === id ? "true" : undefined}
                onClick={event => {
                  event.preventDefault()
                  window.history.replaceState(null, "", `#${id}`)
                  smoothScrollToId(id)
                }}
              >
                <span className="idx">{index}</span>
                <span className="tick" />
                {title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <ThemeToggle className="theme-toggle" />
    </div>
  </StyledSidebar>
)

export default Sidebar
