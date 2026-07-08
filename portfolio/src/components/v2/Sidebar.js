import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { colors, fonts } from "../../utils/theme"
import { contactItems } from "../../utils/commons"
import { media, smoothScrollToId } from "./shared"

const RESUME_URL = "https://krushiraj.github.io/KrushiRajTula_Resume.pdf"

const StyledSidebar = styled.aside`
  position: sticky;
  top: 0;
  align-self: flex-start;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5rem 3rem 3rem 0;

  ${media.tablet} {
    position: relative;
    height: auto;
    padding: 4rem 0 0;
  }

  .portrait {
    width: 72px;
    height: 72px;
    border-radius: 18px;
    object-fit: cover;
    margin: 0 0 1.5rem;
    display: block;
    outline: 1px solid ${colors.line};
    outline-offset: 4px;
  }

  h1 {
    font-family: ${fonts.display};
    font-size: clamp(2.6rem, 4.2vw, 3.6rem);
    font-weight: 580;
    letter-spacing: -0.03em;
    line-height: 1.02;
    margin: 0 0 1rem;
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
    margin: 3rem 0;

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

  .bottom {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;

    ${media.tablet} {
      margin-top: 2rem;
    }
  }

  .socials {
    display: flex;
    align-items: center;
    gap: 1.4rem;

    a {
      color: ${colors.muted};
      font-size: 1.05rem;

      &:after {
        display: none;
      }

      &:hover {
        color: ${colors.paperBright};
        transform: translateY(-2px);
      }

      transition: color 0.25s ease, transform 0.25s ease;
    }
  }

  .resume {
    align-self: flex-start;
    font-family: ${fonts.mono};
    font-size: 0.75rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: ${colors.paperBright};
    border: 1px solid ${colors.line};
    border-radius: 999px;
    padding: 0.7rem 1.4rem;
    transition: border-color 0.25s ease, background 0.25s ease,
      color 0.25s ease;

    &:after {
      display: none;
    }

    .arrow {
      display: inline-block;
      margin-left: 0.5rem;
      transition: transform 0.25s ease;
    }

    &:hover {
      border-color: ${colors.accent};
      background: rgba(255, 74, 47, 0.08);
      color: ${colors.paperBright};

      .arrow {
        transform: translate(2px, -2px);
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
      <img className="portrait" src="/krushi.jpg" alt="Krushi Raj Tula" />
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
        I build search systems at 230M-document scale, developer tools people
        actually enjoy, and AI-native products.
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
    </div>

    <div className="bottom">
      <div className="socials">
        {contactItems.map(({ href, icon, title }) => (
          <a
            key={title}
            href={href}
            title={title}
            aria-label={title}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={icon} />
          </a>
        ))}
      </div>
      <a
        className="resume"
        href={RESUME_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Résumé <span className="arrow">↗</span>
      </a>
    </div>
  </StyledSidebar>
)

export default Sidebar
