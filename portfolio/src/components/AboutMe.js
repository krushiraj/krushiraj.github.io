import React from "react"
import styled from "styled-components"
import { Element } from "react-scroll"
import { Waypoint } from "react-waypoint"
import { rhythm } from "../utils/typography"
import { colors } from "../utils/theme"

const StyledAboutMeText = styled.p`
  font-size: ${rhythm(0.75)};
  color: ${colors.text};
  margin: 0;
`

const StyledName = styled.p`
  font-size: ${rhythm(2)};
  color: ${colors.text};
  text-decoration: underline;
  text-decoration-color: ${colors.palered};
  margin: 0;
`

const StyledAboutMe = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  opacity: 0;
  transition: opacity 0.8s ease;
  transition-delay: 0.4s;
  margin: 0 auto;
  max-width: ${rhythm(24)};
  text-align: center;
`

export default ({ name }) => (
  <Waypoint
    onEnter={() => {
      document.getElementById(`${name}top`).classList.add("active")
      const section = document.querySelector(`.section.${name}`)
      section.style.opacity = 1
    }}
    onLeave={() => {
      document.getElementById(`${name}top`).classList.remove("active")
      const section = document.querySelector(`.section.${name}`)
      section.style.opacity = 0
    }}
  >
    <StyledAboutMe className={`section ${name}`}>
      <Element name={name} id={name}>
        <StyledName>Krushi Raj Tula</StyledName>
        <StyledAboutMeText className="text">
          A developer, geek, enthusiast, who loves to solve problems and fix
          things with technology.
        </StyledAboutMeText>
      </Element>
    </StyledAboutMe>
  </Waypoint>
)
