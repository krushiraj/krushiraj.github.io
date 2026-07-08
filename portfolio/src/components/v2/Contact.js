import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { colors, fonts } from "../../utils/theme"
import { contactItems } from "../../utils/commons"
import { Section, Reveal, media } from "./shared"

const RESUME_URL = "https://krushiraj.github.io/KrushiRajTula_Resume.pdf"

const StyledContact = styled.div`
  h3 {
    font-family: ${fonts.display};
    font-size: clamp(2.2rem, 5vw, 3.4rem);
    font-weight: 560;
    letter-spacing: -0.03em;
    line-height: 1.05;
    margin: 0 0 1.25rem;
    color: ${colors.paperBright};
    max-width: 18ch;

    em {
      font-style: italic;
      font-weight: 420;
      color: ${colors.accent};
    }
  }

  p {
    font-size: 1.02rem;
    line-height: 1.7;
    color: ${colors.muted};
    max-width: 52ch;
    margin: 0 0 2.25rem;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.1rem;
    margin-bottom: 2.5rem;

    ${media.phone} {
      gap: 0.8rem;
    }
  }

  .cta {
    font-family: ${fonts.mono};
    font-size: 0.78rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    border-radius: 999px;
    padding: 0.85rem 1.7rem;
    transition: transform 0.25s ease, background 0.25s ease,
      border-color 0.25s ease, color 0.25s ease;

    &:after {
      display: none;
    }

    &.primary {
      background: ${colors.accent};
      color: ${colors.ink};
      font-weight: 500;

      &:hover,
      &:visited:hover {
        background: ${colors.accentBright};
        color: ${colors.ink};
        transform: translateY(-2px);
      }

      &:visited {
        color: ${colors.ink};
      }
    }

    &.ghost {
      border: 1px solid ${colors.line};
      color: ${colors.paperBright};

      &:hover {
        border-color: ${colors.accent};
        transform: translateY(-2px);
      }
    }
  }

  .socials {
    display: flex;
    align-items: center;
    gap: 1.6rem;

    a {
      color: ${colors.muted};
      font-size: 1.3rem;
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
`

const Contact = () => (
  <Section id="contact" index="06" title="Contact">
    <Reveal>
      <StyledContact>
        <h3>
          Have a hard problem?
          <br />
          <em>Let&rsquo;s fix it.</em>
        </h3>
        <p>
          Whether it&rsquo;s search infrastructure, a full-stack product, or an
          AI agent that needs guardrails &mdash; my inbox is open. I usually
          reply within a day.
        </p>
        <div className="actions">
          <a className="cta primary" href="mailto:krushiraj123+portfolio@gmail.com">
            Say hello ↗
          </a>
          <a
            className="cta ghost"
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Résumé ↗
          </a>
        </div>
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
      </StyledContact>
    </Reveal>
  </Section>
)

export default Contact
