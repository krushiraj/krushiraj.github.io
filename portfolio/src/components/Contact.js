import React from "react"
import styled from "styled-components"
import { contactItems } from "../utils/commons"
import FontAwesomeIconWrapper from "./FontAwesomeIconWrapper"

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

export default () => (
  <StyledContactMe>
    <div>
      <p>Feel free to reach me out at:</p>
      <div className="icon-container">
        {contactItems.slice(0, 4).map((item, key) => (
          <FontAwesomeIconWrapper key={key} {...item} size="3x" />
        ))}
      </div>
    </div>
  </StyledContactMe>
)
