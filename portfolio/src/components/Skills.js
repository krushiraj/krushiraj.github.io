import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

const skills = [
  { name: "Python", level: 9, src: "/python.svg" },
  { name: "C", level: 9, src: "/c.svg" },
  { name: "JavaScript", level: 8, src: "/javascript.svg" },
  { name: "C++", level: 7.5, src: "/c++.svg" },
  { name: "C#", level: 7, src: "/c-sharp.svg" },
  { name: "Java", level: 7, src: "/java.svg" },
  { name: "HTML", level: 8, src: "/html-5.svg" },
  { name: "CSS", level: 7.5, src: "/css-3.svg" },
  { name: "SASS", level: 7, src: "/sass.svg" },
  { name: "Less", level: 7, src: "/less.svg" },
  { name: "Tailwind", level: 6, src: "/tailwindcss.svg" },
  { name: "Django", level: 8, src: "/django.svg" },
  { name: "Node.js", level: 7.5, src: "/nodejs.svg" },
  { name: "React", level: 7.5, src: "/react.svg" },
  { name: "Vue", level: 8, src: "/vue.svg" },
  { name: "PostgreSQL", level: 7, src: "/postgresql.svg" },
  { name: "MySQL", level: 7.5, src: "/mysql.svg" },
  { name: "SQLite", level: 7, src: "/sqlite.svg" },
  { name: "Selenium", level: 7, src: "/selenium.svg" },
  { name: "Mocha", level: 7, src: "/mocha.svg" },
  { name: "Jest", level: 7, src: "/jest.svg" },
]

const StyledSkillContainer = styled.div`
  .items {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .item {
    border: 1px solid #7a7a7a;
    border-radius: 5px;
    width: calc(50% - 10px);
    height: ${rhythm(2)};
    margin: 5px;

    .skill {
      display: flex;
      flex-direction: row;
      padding: 0;
      margin: 5px;
      text-align: center;
      align-items: center;
      font-size: ${rhythm(0.75)};

      @media only screen and (max-width: 768px) {
        font-size: ${rhythm(0.5)};
      }

      div {
        display: flex;
        margin: 0 auto;
        align-items: center;
        align-content: center;

        p {
          padding: 0;
          margin: 0;
        }

        img {
          height: ${rhythm(0.7)};
          padding: 0;
          margin: ${rhythm(0.15)};
        }
      }
    }

    .skill-bar {
      background: red;
      height: ${rhythm(0.2)};
      border-radius: ${rhythm(0.1)};
      margin: auto 5px;
      transition: width 0.3s ease;
      transition: 0.8s;
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
  { title: "Unity3D", src: "/unity.svg" },
  { title: "Brackets", src: "/brackets.svg" },
  { title: "PyCharm", src: "/pycharm.svg" },
  { title: "Git", src: "/git.svg" },
  { title: "Jenkins", src: "/jenkins.svg" },
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
        developed while working with people - <a href="/writings">here</a>
      </p>
    </>
  )
}
