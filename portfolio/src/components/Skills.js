import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import { Link } from "gatsby"

const skills = [
  { name: "JavaScript", level: 9.5, src: "/javascript.svg" },
  { name: "TypeScript", level: 9.5, src: "/typescript.svg" },
  { name: "Python", level: 9, src: "/python.svg" },
  { name: "Node.js", level: 9.5, src: "/nodejs.svg" },
  { name: "React", level: 9, src: "/react.svg" },
  { name: "Next.js", level: 8.5, src: "/nextjs.svg" },
  { name: "Vue", level: 8.5, src: "/vue.svg" },
  { name: "HTML", level: 9, src: "/html-5.svg" },
  { name: "CSS", level: 8.5, src: "/css-3.svg" },
  { name: "Tailwind", level: 8, src: "/tailwindcss.svg" },
  { name: "SASS", level: 7.5, src: "/sass.svg" },
  { name: "Express", level: 8.5, src: "/express.svg" },
  { name: "Django", level: 8, src: "/django.svg" },
  { name: "GraphQL", level: 8, src: "/graphql.svg" },
  { name: "PostgreSQL", level: 8.5, src: "/postgresql.svg" },
  { name: "MongoDB", level: 8.5, src: "/mongodb.svg" },
  { name: "Elasticsearch", level: 8.5, src: "/elasticsearch.svg" },
  { name: "Redis", level: 8, src: "/redis.svg" },
  { name: "ClickHouse", level: 7.5, src: "/clickhouse.svg" },
  { name: "SQLite", level: 8, src: "/sqlite.svg" },
  { name: "MySQL", level: 7.5, src: "/mysql.svg" },
  { name: "Docker", level: 8.5, src: "/docker.svg" },
  { name: "Kubernetes", level: 8, src: "/kubernetes.svg" },
  { name: "AWS", level: 7.5, src: "/aws.svg" },
  { name: "ELK Stack", level: 8, src: "/elk.svg" },
  { name: "Jenkins", level: 8.5, src: "/jenkins.svg" },
  { name: "Jest", level: 9, src: "/jest.svg" },
  { name: "Mocha", level: 8, src: "/mocha.svg" },
  { name: "Java", level: 7.5, src: "/java.svg" },
]

const StyledSkillContainer = styled.div`
  .items {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
    gap: ${rhythm(0.55)};
  }

  .item {
    border: 1px solid #7a7a7a;
    border-radius: 8px;
    min-width: 0;
    padding: ${rhythm(0.45)} ${rhythm(0.6)};
    display: flex;
    flex-direction: column;
    justify-content: center;

    .skill {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: ${rhythm(0.6)};
      margin-bottom: ${rhythm(0.32)};

      @media only screen and (max-width: 768px) {
        font-size: ${rhythm(0.5)};
      }

      div {
        display: flex;
        align-items: center;
        width: 100%;
        min-width: 0;

        p {
          padding: 0;
          margin: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        img {
          height: ${rhythm(0.85)};
          width: ${rhythm(0.85)};
          flex-shrink: 0;
          padding: 0;
          margin: 0 ${rhythm(0.35)} 0 0;
        }
      }
    }

    .skill-bar {
      background: red;
      height: ${rhythm(0.18)};
      border-radius: ${rhythm(0.1)};
      margin: 0;
      transition: width 0.8s ease;
    }
  }
`

const Skills = ({ showBar }) => (
  <>
    <div className="items">
      {skills.map(({ name, level, src }, key) => (
        <div key={key} className="item">
          <div className="skill">
            <div>
              <img src={src} alt={name} /> <p>{name}</p>
            </div>
          </div>
          <div
            className="skill-bar"
            style={{
              width: !showBar ? `calc(calc(${level} * 10%) - 10px)` : 0,
            }}
          ></div>
        </div>
      ))}
    </div>
    <br />
  </>
)

const tools = [
  { title: "Visual Studio Code", src: "/vscode.svg" },
  { title: "Claude Code", src: "/claude.svg" },
  { title: "Unity3D", src: "/unity.svg" },
  { title: "PyCharm", src: "/pycharm.svg" },
  { title: "Git", src: "/git.svg" },
]

const ToolsContainer = styled.div`
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    img {
      height: ${rhythm(1)};
      width: ${rhythm(1)};
      margin: auto;
    }
  }

  p {
    width: 100%;
  }
`

export default ({ showBar }) => {
  return (
    <>
      <StyledSkillContainer>
        <p>Skill set that you can expect from me.</p>
        <Skills showBar={showBar} />
      </StyledSkillContainer>
      <ToolsContainer>
        <p>IDEs and tools that I use and those I'm familiar with.</p>
        <div>
          {tools.map(({ title, src }, key) => (
            <img key={key} title={title} src={src} alt={title} />
          ))}
        </div>
      </ToolsContainer>
      <br />
      <p>
        You can read more about the skills(other than technical) that I
        developed while working with people - <Link to="/writings">here</Link>
      </p>
    </>
  )
}
