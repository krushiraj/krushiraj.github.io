import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import { colors } from "../utils/theme"
import { isMobile } from "react-device-detect"

const StyledAboutMeText = styled.p`
  font-size: ${isMobile ? rhythm(0.5) : rhythm(0.75)};
  color: ${colors.text};
  margin: 0;
`

const StyledName = styled.p`
  font-size: ${isMobile ? rhythm(1) : rhythm(2)};
  color: ${colors.text};
  text-decoration: underline;
  text-decoration-color: ${colors.palered};
  margin: 0;
`

export default () => (
  <>
    <StyledName>Krushi Raj Tula</StyledName>
    <StyledAboutMeText className="text">
      A developer, geek, enthusiast, who loves to solve problems and fix things
      with technology.
    </StyledAboutMeText>
  </>
)
