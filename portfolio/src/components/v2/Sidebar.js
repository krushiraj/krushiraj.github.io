import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { colors, fonts, accentTint } from "../../utils/theme"
import { contactItems } from "../../utils/commons"
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

  .hire-banner {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    margin: 0 0 1.5rem;
    padding: 0.45rem 0.95rem 0.45rem 0.75rem;
    border-radius: 999px;
    border: 1px dashed ${accentTint("55%")};
    background: ${accentTint("10%")};
    color: ${colors.paperBright};
    font-size: 0.82rem;
    line-height: 1.35;
    transition: transform 0.25s ease, border-color 0.25s ease;

    &:after {
      display: none;
    }

    &:hover {
      transform: translateY(-2px) rotate(-0.6deg);
      border-color: ${colors.accent};
    }

    .dot {
      flex: none;
      width: 0.55rem;
      height: 0.55rem;
      border-radius: 50%;
      background: #4ade80;
      box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.6);
      animation: hire-pulse 2s ease-out infinite;
    }

    b {
      font-weight: 600;
      color: ${colors.accent};
    }

    @media (prefers-reduced-motion: reduce) {
      .dot {
        animation: none;
      }
    }
  }

  @keyframes hire-pulse {
    70% {
      box-shadow: 0 0 0 0.5rem rgba(74, 222, 128, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(74, 222, 128, 0);
    }
  }

  .socials {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.1rem;
    margin: 1.5rem 0 0;

    a {
      color: ${colors.muted};
      font-size: 1.15rem;
      transition: color 0.25s ease, transform 0.25s ease;

      &:after {
        display: none;
      }

      &:hover {
        color: ${colors.paperBright};
        transform: translateY(-3px);
      }
    }
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
      <a
        className="hire-banner"
        href="mailto:krushiraj123+portfolio@gmail.com?subject=Let%27s%20talk%20about%20a%20role"
      >
        <span className="dot" aria-hidden="true" />
        <span>
          <b>Looking for my next role.</b> Refer me, test me, or hire me
          directly. Say hi &rarr;
        </span>
      </a>
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
        Senior Full Stack Engineer ·{" "}
        <a
          href="https://www.paperpile.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Paperpile
        </a>
      </p>
      <p className="tagline">
        I own a 230M+ document search platform end to end, ship developer
        tools people actually enjoy, and build AI agents that verify before
        they act. Open to remote roles.
      </p>

      <div className="socials">
        {contactItems.map(({ href, icon, title }) => (
          <a
            key={title}
            href={href}
            title={title}
            aria-label={title}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={icon} />
          </a>
        ))}
      </div>

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
