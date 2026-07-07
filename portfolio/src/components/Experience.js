import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import { colors } from "../utils/theme"
import { Link } from "gatsby"

const ExperienceList = [
  {
    company: "Paperpile",
    companyUrl: "https://www.paperpile.com/",
    imgSrc: "paperpile-logo.png",
    role: "Full-Stack Engineer",
    type: "Full Time",
    duration: "Jan 2020 - Present",
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
  },
  {
    company: "NCR Corporation",
    companyUrl: "https://www.ncr.com/",
    imgSrc: "NCR-logo.png",
    role: "Software Developer",
    type: "Full Time",
    duration: "Jul 2019 - Dec 2019",
    description:
      "Built the Content Management and Advertising module for ATM machines and cut ad initial-load latency from ~2 minutes to under 30 seconds on constrained, low-bandwidth hardware; root-caused a production defect blocking a major bank chain's ads.",
  },
  {
    company: "ServiceNow",
    companyUrl: "https://www.servicenow.com/",
    imgSrc: "servicenow-logo.png",
    role: "Software Engineer",
    type: "Internship",
    duration: "Jan 2019 - Jun 2019",
    description:
      "I worked as full-stack developer with Seismic frontend, ServiceNow platform as backend. I started with design and analysis for a usecase, which eventully was developed as a prototype, then as a fully functional feature.",
  },
  {
    company: "Verzeo",
    companyUrl: "https://verzeo.in/",
    imgSrc: "verzeo-logo.png",
    role: "UI Developer, Interns' team lead.",
    type: "Internship(Remote)",
    duration: "May 2018 - Jun 2018",
    description:
      "A team of interns was formed to build frontend for an e-Commerce site. I was the lead of interns team and also frontend developer to build UI for the site.",
  },
]

const ExperienceCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-height: ${rhythm(5)};
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  transition: all 0.3s ease;
  border: 1px solid #7a7a7a;

  p {
    padding: 0;
    margin: 0;
    font-size: ${rhythm(0.75)};

    a {
      color: ${colors.skyblue};
    }
  }

  .expandable {
    p,
    ul {
      display: none;
    }
    .highlights {
      margin: ${rhythm(0.3)} 0 0;
      padding-left: ${rhythm(0.8)};
      text-align: left;
    }
    .highlights li {
      font-size: ${rhythm(0.6)};
      margin-bottom: ${rhythm(0.1)};

      @media only screen and (max-width: 768px) {
        font-size: ${rhythm(0.45)};
      }
    }
    opacity: 0;
    transition: all 0.3s ease;
    position: relative;
    top: -100%;
  }

  .visible {
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  &:hover {
    box-shadow: 1px 2px 20px 2px darkolivegreen;
    max-height: none;

    .expandable {
      opacity: 1;
      top: 0;
      p {
        height: auto;
        display: initial;
      }
      ul {
        display: block;
      }
    }
  }

  .image {
    width: 40%;

    img {
      height: ${rhythm(1.5)};
    }
  }

  .details {
    width: 60%;
    text-alight: left;

    .role {
      font-size: ${rhythm(0.75)};
      font-weight: bold;
      color: ${colors.headings};
    }
    .type {
      font-size: ${rhythm(0.5)};
      color: ${colors.yellow};
    }
    .duration {
      font-size: ${rhythm(0.5)};
      color: palevioletred;
    }

    @media only screen and (max-width: 768px) {
      .role {
        font-size: ${rhythm(0.5)};
      }

      .type .duration {
        font-size: ${rhythm(0.5)};
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .image img {
      height: ${rhythm(1)};
    }

    p {
      font-size: ${rhythm(0.5)};
    }
  }
`

const ExperienceCard = ({
  imgSrc,
  company,
  companyUrl,
  role,
  type,
  duration,
  description,
  highlights,
}) => (
  <ExperienceCardDiv>
    <div className="visible">
      <div className="image">
        <img
          alt={`${company} Logo`}
          src={imgSrc}
          style={{ maxHeight: rhythm(2), margin: 0, padding: 0 }}
        />
        <p>
          <a href={companyUrl}>{company}</a>
        </p>
      </div>
      <div className="details">
        <p className="role">{role}</p>
        <p className="type">{type}</p>
        <p className="duration">{duration}</p>
      </div>
    </div>
    <div className="expandable">
      <p className="description">{description}</p>
      {highlights && (
        <ul className="highlights">
          {highlights.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  </ExperienceCardDiv>
)

export default () => (
  <>
    <p>
      I have worked for a number of projects. But, below are the corporate
      experiences that I have.
    </p>
    {ExperienceList.map((props, index) => (
      <React.Fragment key={index}>
        <ExperienceCard {...props} />
        <br />
      </React.Fragment>
    ))}
    <p>
      You can read more about my experiences <Link to="/writings">here</Link>
    </p>
  </>
)
