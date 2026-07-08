import React, { useState } from "react"
import styled from "styled-components"
import { colors, fonts } from "../../utils/theme"
import { Section, Reveal, Meta, media } from "./shared"

const experienceList = [
  {
    company: "Paperpile",
    companyUrl: "https://www.paperpile.com/",
    imgSrc: "/paperpile-logo.png",
    role: "Full-Stack Engineer",
    type: "Full Time",
    duration: "Jan 2020 — Present",
    description:
      "Sole developer of Paperpile's internal academic search platform, a 230M+ document system I own end to end (React/Next.js, Node/TypeScript, Python; MongoDB, Elasticsearch, PostgreSQL).",
    highlights: [
      "Cut p99 search latency from ~10s to under 1s by redesigning indexing and query paths across Elasticsearch, MongoDB, and SQLite.",
      "Designed and maintained 10+ microservices handling millions of dynamic-payload messages, with strict retries, ordering, and idempotency.",
      "Built ingestion pipelines processing 300GB+ of text monthly, and raised corpus abstract coverage from 27% to 51% with crawler/scraper engines.",
      "Built the author-name parser (Stanford NLP model + a custom trie), reaching 87% accuracy vs 45-58% for the best open-source parsers at the time.",
      "Built an MCP (Model Context Protocol) server so LLM tools verify citations against the 230M+ corpus before emitting them, a hallucination-mitigation guardrail.",
      "Built AI plugins and a test-gated harness for the parser/crawler stack, cutting a release cycle from ~2 weeks to ~2 days.",
      "Own the shared middlewares and core utilities reused across the codebase, and ported legacy code to modern TypeScript for speed and memory gains.",
      "Cut production error rate from 10% to 2% and deploy time by 50% via CI/CD (Docker, Kubernetes); run ELK observability and own incident response.",
      "Built and own an internal data-management dashboard in React, plus Google Drive and OneDrive integrations and S3-backed storage.",
    ],
    tech: ["TypeScript", "React", "Node.js", "Python", "Elasticsearch", "MongoDB", "Kubernetes"],
  },
  {
    company: "NCR Corporation",
    companyUrl: "https://www.ncr.com/",
    imgSrc: "/NCR-logo.png",
    role: "Software Developer",
    type: "Full Time",
    duration: "Jul 2019 — Dec 2019",
    description:
      "Built the Content Management and Advertising module for ATM machines and cut ad initial-load latency from ~2 minutes to under 30 seconds on constrained, low-bandwidth hardware; root-caused a production defect blocking a major bank chain's ads.",
    tech: ["Java", "JavaScript"],
  },
  {
    company: "ServiceNow",
    companyUrl: "https://www.servicenow.com/",
    imgSrc: "/servicenow-logo.png",
    role: "Software Engineer",
    type: "Internship",
    duration: "Jan 2019 — Jun 2019",
    description:
      "Full-stack developer with a Seismic frontend on the ServiceNow platform. Took a use case from design and analysis through prototype to a fully functional shipped feature.",
    tech: ["JavaScript", "ServiceNow"],
  },
  {
    company: "Verzeo",
    companyUrl: "https://verzeo.in/",
    imgSrc: "/verzeo-logo.png",
    role: "UI Developer · Interns' Team Lead",
    type: "Internship · Remote",
    duration: "May 2018 — Jun 2018",
    description:
      "Led a team of interns building the frontend for an e-commerce site, contributing UI development while coordinating the team's output.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
]

const VISIBLE_HIGHLIGHTS = 4

const StyledEntry = styled.article`
  position: relative;
  display: grid;
  grid-template-columns: 11rem 1fr;
  gap: 2rem;
  padding: 2rem 0 2.5rem 0;
  border-bottom: 1px solid ${colors.lineSoft};

  &:last-child {
    border-bottom: none;
  }

  ${media.phone} {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }

  .when {
    padding-top: 0.25rem;
  }

  .head {
    display: flex;
    align-items: center;
    gap: 0.9rem;
    margin-bottom: 0.6rem;

    img {
      height: 72px;
      width: 72px;
      object-fit: contain;
      margin: 0;
      /* Brand logos are dark/colored artwork on transparent, so give them a
         fixed light chip in both themes (not a theme token — that inverted
         to black in light mode). */
      background: #ffffff;
      border: 1px solid rgba(20, 17, 12, 0.1);
      border-radius: 12px;
      padding: 9px;
    }

    h3 {
      margin: 0;
      font-size: 1.25rem;
      letter-spacing: -0.01em;

      a {
        color: ${colors.paperBright};

        &:hover {
          color: ${colors.accentBright};
        }
      }
    }

    .company {
      font-family: ${fonts.mono};
      font-size: 0.72rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: ${colors.muted};
      display: block;
      margin-top: 0.2rem;

      a {
        color: ${colors.muted};

        &:hover {
          color: ${colors.paperBright};
        }
      }
    }
  }

  .description {
    font-size: 0.98rem;
    line-height: 1.7;
    color: ${colors.paper};
    max-width: 60ch;
    margin: 0;
  }

  ul.highlights {
    margin: 1rem 0 0;
    padding: 0;
    list-style: none;
    max-width: 62ch;

    li {
      position: relative;
      padding-left: 1.4rem;
      margin-bottom: 0.55rem;
      font-size: 0.92rem;
      line-height: 1.65;
      color: ${colors.muted};

      &:before {
        content: "→";
        position: absolute;
        left: 0;
        color: ${colors.accent};
        font-family: ${fonts.mono};
        font-size: 0.8rem;
      }
    }
  }

  .more {
    background: none;
    border: none;
    cursor: pointer;
    font-family: ${fonts.mono};
    font-size: 0.72rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: ${colors.accentBright};
    padding: 0.4rem 0;
    margin-top: 0.25rem;

    &:hover {
      color: ${colors.paperBright};
    }
  }

  .tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
    margin-top: 1.1rem;

    span {
      font-family: ${fonts.mono};
      font-size: 0.68rem;
      letter-spacing: 0.06em;
      color: ${colors.paper};
      border: 1px solid ${colors.line};
      border-radius: 999px;
      padding: 0.25rem 0.7rem;
    }
  }
`

const Entry = ({ entry, delay }) => {
  const [expanded, setExpanded] = useState(false)
  const highlights = entry.highlights || []
  const shown = expanded ? highlights : highlights.slice(0, VISIBLE_HIGHLIGHTS)
  const hiddenCount = highlights.length - VISIBLE_HIGHLIGHTS

  return (
    <Reveal delay={delay}>
      <StyledEntry>
        <div className="when">
          <Meta>{entry.duration}</Meta>
          <br />
          <Meta style={{ color: colors.faint }}>{entry.type}</Meta>
        </div>
        <div>
          <div className="head">
            <img src={entry.imgSrc} alt={`${entry.company} logo`} />
            <div>
              <h3>{entry.role}</h3>
              <span className="company">
                <a
                  href={entry.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {entry.company}
                </a>
              </span>
            </div>
          </div>
          <p className="description">{entry.description}</p>
          {highlights.length > 0 && (
            <>
              <ul className="highlights">
                {shown.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              {hiddenCount > 0 && (
                <button
                  className="more"
                  onClick={() => setExpanded(!expanded)}
                  aria-expanded={expanded}
                >
                  {expanded ? "− Show less" : `+ ${hiddenCount} more highlights`}
                </button>
              )}
            </>
          )}
          {entry.tech && (
            <div className="tech">
              {entry.tech.map(t => (
                <span key={t}>{t}</span>
              ))}
            </div>
          )}
        </div>
      </StyledEntry>
    </Reveal>
  )
}

const Experience = () => (
  <Section id="experience" index="02" title="Experience">
    {experienceList.map((entry, i) => (
      <Entry key={entry.company} entry={entry} delay={i * 60} />
    ))}
  </Section>
)

export default Experience
