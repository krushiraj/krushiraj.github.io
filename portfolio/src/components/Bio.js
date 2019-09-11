import React from "react"

import profilePic from "../../static/krushi.jpg"
import { rhythm } from "../utils/typography"
import { colors } from "../utils/theme"
import styled from "styled-components"

const StyledBioDiv = styled.div`
  margin-bottom: ${rhythm(2.5)};
  display: flex;
  align-content: center;

  p {
    margin: auto 0;
    color: ${colors.skyblue};
    a {
      color: ${colors.green};
      opacity: 0.7;
      position: relative;
      text-decoration: none;
      display: inline-block;
      padding: 0;

      &:after {
        background: none repeat scroll 0 0 transparent;
        bottom: 2px;
        content: "";
        display: block;
        height: 2px;
        left: 50%;
        position: absolute;
        background: ${colors.palered};
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
      }

      &:hover:after {
        width: 100%;
        left: 0;
      }

      &:hover {
        opacity: 1;
      }

      &:active {
        color: ${colors.green};
      }

      &:visited {
        color: ${colors.green};
      }
    }
  }

  img {
    margin: auto ${rhythm(1 / 2)} auto 0;
    width: ${rhythm(3)};
    height: ${rhythm(3)};
  }
`

export default class Bio extends React.Component {
  render() {
    return (
      <StyledBioDiv>
        <img
          src={profilePic}
          alt={`Krushi Raj Tula`}
          style={{
            borderRadius: "50%",
          }}
        />
        <p>
          By <strong>Krushi Raj Tula</strong> A developer, geek, enthusiast, who
          loves to solve problems and fix things with technology. You can reach
          out to him on{" "}
          <a
            href="https://twitter.com/krushiraj123"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter!
          </a>
        </p>
      </StyledBioDiv>
    )
  }
}
