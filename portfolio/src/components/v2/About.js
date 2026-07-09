import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { colors, fonts } from "../../utils/theme"
import { Section, Reveal, media } from "./shared"

const StyledAbout = styled.div`
  p {
    font-size: 1.06rem;
    line-height: 1.75;
    color: ${colors.paper};
    max-width: 62ch;
    margin: 0 0 1.25rem;

    strong {
      color: ${colors.paperBright};
      font-weight: 600;
    }

    a {
      color: ${colors.accentBright};
    }
  }

  .stats {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1px;
    background: ${colors.line};
    border: 1px solid ${colors.line};
    border-radius: 12px;
    overflow: hidden;
    margin-top: 2.5rem;

    ${media.phone} {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  .stat {
    background: ${colors.inkRaised};
    padding: 1.3rem 1.2rem 1.1rem;
    min-width: 0;

    ${media.phone} {
      padding: 1rem 0.9rem 0.9rem;
    }

    .value {
      font-family: ${fonts.display};
      font-size: 1.7rem;
      font-weight: 560;
      letter-spacing: -0.02em;
      color: ${colors.paperBright};
      display: block;

      ${media.phone} {
        font-size: 1.35rem;
      }

      em {
        font-style: italic;
        color: ${colors.accent};
      }
    }

    .caption {
      font-family: ${fonts.mono};
      font-size: 0.66rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: ${colors.muted};
      display: block;
      margin-top: 0.45rem;
      line-height: 1.5;
    }
  }
`

// First full-time role (NCR, Jul 2019). Years of experience are derived
// from this so the number stays current without manual edits.
const CAREER_START = new Date("2019-07-01")
const yearsOfExperience = Math.floor(
  (Date.now() - CAREER_START.getTime()) / (365.25 * 24 * 60 * 60 * 1000)
)

const stats = [
  { value: <>{yearsOfExperience}<em>+</em> yrs</>, caption: "shipping production software" },
  { value: <>Full<em>-</em>stack</>, caption: "frontend, backend, data & infra" },
  { value: <>End<em>-</em>to<em>-</em>end</>, caption: "design, ship, run, and own it" },
  { value: <>AI<em>-</em>native</>, caption: "MCP servers, agents & guardrails" },
]

const About = () => (
  <Section id="about-me" index="01" title="About">
    <Reveal>
      <StyledAbout>
        <p>
          I&rsquo;m a senior full-stack engineer who loves solving hard problems
          and fixing things with technology. I own products{" "}
          <strong>end to end</strong>, React and Next.js frontends, Node
          and Python services, and the search, data, and infrastructure
          underneath, and I care as much about how a system behaves in
          production as how it&rsquo;s built.
        </p>
        <p>
          Since 2020 I&rsquo;ve been building at <strong>Paperpile</strong>,
          currently as the sole engineer behind its internal academic search
          platform. A lot of my work lately is <strong>AI-native</strong>:
          MCP servers, agent harnesses, and guardrails that keep LLMs honest. I
          ship open-source developer tools on the side and write about what I
          learn <Link to="/writings/">on my blog</Link>.
        </p>
        <div className="stats">
          {stats.map(({ value, caption }, i) => (
            <div className="stat" key={i}>
              <span className="value">{value}</span>
              <span className="caption">{caption}</span>
            </div>
          ))}
        </div>
      </StyledAbout>
    </Reveal>
  </Section>
)

export default About
