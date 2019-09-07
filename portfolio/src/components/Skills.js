import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

const skills = [
  {
    programming: [
      { name: "py", level: 9 },
      { name: "py", level: 8 },
      { name: "py", level: 5 },
    ],
  },
  {
    scripting: [
      { name: "py", level: 3 },
      { name: "py", level: 10 },
      { name: "py", level: 5.5 },
    ],
  },
  {
    programming: [
      { name: "py", level: 9 },
      { name: "py", level: 8 },
      { name: "py", level: 5 },
    ],
  },
  {
    scripting: [
      { name: "py", level: 3 },
      { name: "py", level: 10 },
      { name: "py", level: 5.5 },
    ],
  },
]

const StyledSkillContainer = styled.div`
  .category {
    text-transform: uppercase;
  }

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

    @media only screen and (max-width: 768px) {
      width: calc(100% - 10px);
    }

    .skill {
      display: flex;
      flex-direction: row;
      font-size: ${rhythm(0.75)};
      padding: 0;
      margin: 5px;
      text-align: center;
      align-items: center;

      div {
        display: flex;
        margin: 0 auto;

        p {
          padding: 0;
          margin: 0;
        }

        img {
          height: ${rhythm(1)};
          padding: 0;
          margin: 0 10px 0 0;
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

const CategoryDiv = ({ showBar, category, items }) => {
  const el = document.getElementById("skillstop")
  const isActive = el !== null && el.classList.contains("active")
  return (
    <>
      <div className="items-container">
        <span className="category">{category}</span>
        <div className="items">
          {items.map(({ name, level }, key) => (
            <div key={key} className="item">
              <div className="skill">
                <div>
                  <img src="/krushi.jpg" alt={name} /> <p>{name}</p>
                </div>
              </div>
              {isActive && (
                <div
                  className="skill-bar"
                  style={{
                    width: !showBar ? `calc(calc(${level} * 10%) - 10px)` : 0,
                  }}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
      <br />
    </>
  )
}

export default ({ showBar }) => {
  return (
    <StyledSkillContainer>
      <p>Skill set that you can expect to be delivered.</p>
      {skills.map((category, key) => {
        const categoryName = Object.getOwnPropertyNames(category)[0]
        return (
          <CategoryDiv
            key={key}
            showBar={showBar}
            category={categoryName}
            items={category[categoryName]}
          />
        )
      })}
    </StyledSkillContainer>
  )
}
