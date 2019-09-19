import React from "react"
import styled from "styled-components"
import { contactItems } from "../utils/commons"
import FontAwesomeIconWrapper from "./FontAwesomeIconWrapper"
import { colors } from "../utils/theme"

const StyledContactMe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  height: 100%;
  width: 100%;

  div {
    margin: auto 0;
    width: 100%;
  }

  .resume {
    a {
      color: ${colors.skyblue};
    }
  }

  .icon-container {
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    justify-content: space-around;
    width: 100%;

    a {
      color: rgba(255, 255, 255, 0.4);
    }

    .underline {
      &:hover {
        color: rgba(255, 255, 255, 1);
      }

      &:active {
        color: #ffffff;
      }

      &:visited {
        color: #ffffff;
      }
    }
  }
`

class Resume extends React.Component {
  withPrefix = (variant) => (
    `https://krushiraj.github.io/KrushiRajTula_Resume${variant}.pdf`
  )

  render() {
    return <>
      <br/>
      <p class="resume">
        You can view my resume by clicking{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={this.withPrefix("Web")}
        >
          here
        </a>.{" "}
        You can also get the print-friendly version{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={this.withPrefix("Print")}
        >
          here
        </a>.
      </p>
      <div class="LI-profile-badge" data-version="v1" data-size="medium" data-locale="en_US" data-type="horizontal" data-theme="light" data-vanity="krushi-raj-t-aba141b1"><a class="LI-simple-link" href='https://in.linkedin.com/in/krushi-raj-t-aba141b1?trk=profile-badge'>Krushi Raj T.</a></div>
      <br/>
    </>
  }
}

export default () =>
  <StyledContactMe>
    <div>
      <p>Feel free to reach me out at:</p>
      <div className="icon-container">
        {contactItems.slice(0, 5).map((item, key) => (
          <FontAwesomeIconWrapper key={key} {...item} size="3x" />
        ))}
      </div>
      <Resume/>
    </div>
  </StyledContactMe>