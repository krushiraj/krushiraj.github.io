import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTerminal } from "@fortawesome/free-solid-svg-icons"

const StyledTerminalLink = styled.div`
  width: 200px;
  height: 40px;
  position: fixed;
  left: -160px;
  top: 10vh;
  background: rgba(255, 255, 255, 0.7);
  transition: left 0.3s ease;
  animation-name: bounce;
  animation-duration: 1.5s;
  animation-iteration-count: 2;
  animation-direction: alternate-reverse;

  &:before {
    content: "";
    position: absolute;
    right: -20px;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 20px solid rgba(255, 255, 255, 0.7);
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
  }

  &:hover {
    left: 0;
    animation: none;
  }

  p {
    font-size: 18px;
    margin: 5px 0;

    a {
      color: black;
      margin: 0 0 0 10px;

      &:hover {
        color: black;
      }
    }
  }

  @keyframes bounce {
    0% {
      left: -100px;
    }
    70% {
      left: -160px;
    }
    85% {
      left: -140px;
    }
    100% {
      left: -160px;
    }
  }
`

export default () => {
  return (
    <StyledTerminalLink>
      <p>
        <a href="https://krushiraj.github.io/mini-terminal/">Mini-Terminal</a>{" "}
        <FontAwesomeIcon
          icon={faTerminal}
          style={{ color: "black", margin: "0 0 0 15px" }}
        />
      </p>
    </StyledTerminalLink>
  )
}
