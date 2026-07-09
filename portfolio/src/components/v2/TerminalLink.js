import React from "react"
import styled from "styled-components"
import { colors, fonts } from "../../utils/theme"

const StyledTerminalLink = styled.a`
  position: fixed;
  right: 1.5rem;
  bottom: 1.5rem;
  z-index: 50;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-family: ${fonts.mono};
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  color: ${colors.paper};
  background: ${colors.inkOverlay};
  border: 1px solid ${colors.line};
  border-radius: 999px;
  padding: 0.6rem 1.1rem;
  box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.9);
  transition: border-color 0.25s ease, transform 0.25s ease,
    color 0.25s ease;

  &:after {
    display: none;
  }

  .prompt {
    color: ${colors.accent};
  }

  .cursor {
    display: inline-block;
    width: 0.5em;
    height: 1em;
    background: ${colors.accent};
    animation: blink 1.1s steps(1) infinite;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  }

  &:hover {
    border-color: ${colors.accent};
    transform: translateY(-2px);
    color: ${colors.paperBright};
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }

  @media (max-width: 640px) {
    right: 1rem;
    bottom: 1rem;
  }
`

const TerminalLink = () => (
  <StyledTerminalLink
    href="https://krushiraj.github.io/mini-terminal/"
    title="Open Mini-Terminal, a browser terminal I built"
  >
    <span className="prompt">$</span> ./mini-terminal
    <span className="cursor" />
  </StyledTerminalLink>
)

export default TerminalLink
