import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import { colors } from "../utils/theme"
import { Link } from "gatsby"

const StyledAboutMeText = styled.p`
  font-size: ${rhythm(0.75)};
  color: ${colors.text};
  margin: 0;

  @media only screen and (max-width: 768px) {
    font-size: ${rhythm(0.5)};
  }
`

const StyledName = styled.p`
  font-size: ${rhythm(2)};
  color: ${colors.text};
  text-decoration: underline;
  text-decoration-color: ${colors.palered};
  margin: 0;

  @media only screen and (max-width: 768px) {
    font-size: ${rhythm(1)};
  }
`

export default () => (
  <div style={{ margin: "auto 0" }}>
    <StyledName>Krushi Raj Tula</StyledName>
    <StyledAboutMeText className="text">
      A developer, geek, enthusiast, who loves to solve problems and fix things
      with technology.
    </StyledAboutMeText>
    <p>
      You can read my writings <Link to="/writings/">here</Link>.
    </p>
  </div>
)
