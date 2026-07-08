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
    grid-template-columns: repeat(4, 1fr);
    gap: 1px;
    background: ${colors.line};
    border: 1px solid ${colors.line};
    border-radius: 12px;
    overflow: hidden;
    margin-top: 2.5rem;

    ${media.phone} {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .stat {
    background: ${colors.inkRaised};
    padding: 1.3rem 1.2rem 1.1rem;

    .value {
      font-family: ${fonts.display};
      font-size: 1.7rem;
      font-weight: 560;
      letter-spacing: -0.02em;
      color: ${colors.paperBright};
      display: block;

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

const stats = [
  { value: <>230M<em>+</em></>, caption: "documents in the search corpus I own" },
  { value: <>10s → <em>&lt;1s</em></>, caption: "p99 search latency after my redesign" },
  { value: <>300GB<em>+</em></>, caption: "of text ingested monthly by my pipelines" },
  { value: <>6<em>+</em> yrs</>, caption: "building production software" },
]

const About = () => (
  <Section id="about-me" index="01" title="About">
    <Reveal>
      <StyledAbout>
        <p>
          I&rsquo;m a developer, geek, and enthusiast who loves solving hard
          problems and fixing things with technology. Since 2020 I&rsquo;ve
          been at <strong>Paperpile</strong>, where I&rsquo;m the sole engineer
          behind the internal academic search platform &mdash; a{" "}
          <strong>230M+ document system</strong> I design, build, and operate
          end to end.
        </p>
        <p>
          My happy place is the full stack in its widest sense: React
          frontends, Node and Python services, search and data infrastructure,
          CI/CD, and lately <strong>AI-native tooling</strong> &mdash; MCP
          servers, agent harnesses, and guardrails that keep LLMs honest.
          I ship open-source developer tools on the side and write about what
          I learn <Link to="/writings/">on my blog</Link>.
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
