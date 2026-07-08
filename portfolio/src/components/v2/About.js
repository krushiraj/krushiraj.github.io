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
  { value: <>6<em>+</em> yrs</>, caption: "shipping production software" },
  { value: <>Full<em>&#8288;-&#8288;</em>stack</>, caption: "frontend, backend, data & infra" },
  { value: <>End<em>&#8288;-&#8288;</em>to<em>&#8288;-&#8288;</em>end</>, caption: "design, ship, run, and own it" },
  { value: <>AI<em>&#8288;-&#8288;</em>native</>, caption: "MCP servers, agents & guardrails" },
]

const About = () => (
  <Section id="about-me" index="01" title="About">
    <Reveal>
      <StyledAbout>
        <p>
          I&rsquo;m a senior full-stack engineer who loves solving hard problems
          and fixing things with technology. I own products{" "}
          <strong>end to end</strong> &mdash; React and Next.js frontends, Node
          and Python services, and the search, data, and infrastructure
          underneath &mdash; and I care as much about how a system behaves in
          production as how it&rsquo;s built.
        </p>
        <p>
          Since 2020 I&rsquo;ve been building at <strong>Paperpile</strong>,
          currently as the sole engineer behind its internal academic search
          platform. A lot of my work lately is <strong>AI-native</strong> &mdash;
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
