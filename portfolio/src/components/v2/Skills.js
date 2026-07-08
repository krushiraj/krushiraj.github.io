import React from "react"
import styled from "styled-components"
import { colors, fonts } from "../../utils/theme"
import { Section, Reveal, media } from "./shared"

const skillGroups = [
  {
    title: "Languages",
    items: [
      { name: "TypeScript", src: "/typescript.svg" },
      { name: "JavaScript", src: "/javascript.svg" },
      { name: "Python", src: "/python.svg" },
      { name: "Java", src: "/java.svg" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", src: "/react.svg" },
      { name: "Next.js", src: "/nextjs.svg" },
      { name: "Vue", src: "/vue.svg" },
      { name: "HTML", src: "/html-5.svg" },
      { name: "CSS", src: "/css-3.svg" },
      { name: "Tailwind", src: "/tailwindcss.svg" },
      { name: "SASS", src: "/sass.svg" },
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      { name: "Node.js", src: "/nodejs.svg" },
      { name: "Express", src: "/express.svg" },
      { name: "Django", src: "/django.svg" },
      { name: "GraphQL", src: "/graphql.svg" },
    ],
  },
  {
    title: "Data & Search",
    items: [
      { name: "Elasticsearch", src: "/elasticsearch.svg" },
      { name: "PostgreSQL", src: "/postgresql.svg" },
      { name: "MongoDB", src: "/mongodb.svg" },
      { name: "Redis", src: "/redis.svg" },
      { name: "ClickHouse", src: "/clickhouse.svg" },
      { name: "SQLite", src: "/sqlite.svg" },
      { name: "MySQL", src: "/mysql.svg" },
    ],
  },
  {
    title: "Infra & Delivery",
    items: [
      { name: "Docker", src: "/docker.svg" },
      { name: "Kubernetes", src: "/kubernetes.svg" },
      { name: "AWS", src: "/aws.svg" },
      { name: "ELK Stack", src: "/elk.svg" },
      { name: "Jenkins", src: "/jenkins.svg" },
      { name: "Jest", src: "/jest.svg" },
      { name: "Mocha", src: "/mocha.svg" },
    ],
  },
  {
    title: "Daily Drivers",
    items: [
      { name: "Claude Code", src: "/claude.svg" },
      { name: "VS Code", src: "/vscode.svg" },
      { name: "Git", src: "/git.svg" },
      { name: "PyCharm", src: "/pycharm.svg" },
      { name: "Unity3D", src: "/unity.svg" },
    ],
  },
]

const StyledSkills = styled.div`
  .group {
    display: grid;
    grid-template-columns: 11rem 1fr;
    gap: 2rem;
    padding: 1.4rem 0;
    border-bottom: 1px solid ${colors.lineSoft};

    &:last-child {
      border-bottom: none;
    }

    ${media.phone} {
      grid-template-columns: 1fr;
      gap: 0.7rem;
    }
  }

  h3 {
    margin: 0;
    padding-top: 0.3rem;
    font-family: ${fonts.mono};
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: ${colors.muted};
  }

  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem;
  }

  .chip {
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
    border: 1px solid ${colors.line};
    border-radius: 999px;
    padding: 0.42rem 0.95rem 0.42rem 0.6rem;
    font-size: 0.86rem;
    color: ${colors.paper};
    background: ${colors.inkRaised};
    transition: border-color 0.25s ease, transform 0.25s ease,
      background 0.25s ease;

    img {
      height: 18px;
      width: 18px;
      margin: 0;
      display: block;
    }

    &:hover {
      border-color: ${colors.accent};
      background: ${colors.inkOverlay};
      transform: translateY(-2px);
    }
  }
`

const Skills = () => (
  <Section id="skills" index="03" title="Skills">
    <StyledSkills>
      {skillGroups.map(({ title, items }, i) => (
        <Reveal key={title} delay={i * 50}>
          <div className="group">
            <h3>{title}</h3>
            <div className="chips">
              {items.map(({ name, src }) => (
                <span className="chip" key={name}>
                  <img src={src} alt="" aria-hidden="true" />
                  {name}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </StyledSkills>
  </Section>
)

export default Skills
