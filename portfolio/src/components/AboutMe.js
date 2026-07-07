import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import { colors } from "../utils/theme"
import { Link } from "gatsby"

const StyledAboutMeText = styled.p`
  font-size: ${rhythm(0.75)};
  color: ${colors.text};
  margin: 0;

  a {
    color: ${colors.skyblue};
  }

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
      A developer, geek, and enthusiast who loves solving hard problems and fixing
      things with technology. I build full-stack products end to end, scale backend
      systems, ship open-source developer tools, and build with (and for) AI agents.
    </StyledAboutMeText>
    <br/>
    <StyledAboutMeText>
      You can read my writings <Link to="/writings/">here</Link>.
    </StyledAboutMeText>
  </div>
)
