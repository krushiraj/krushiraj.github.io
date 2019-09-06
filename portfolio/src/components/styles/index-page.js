import styled from "styled-components"
import { rhythm, scale } from "../../utils/typography"

export const StyledIndexDiv = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  z-index: 1;

  a {
    color: rgba(255, 255, 255, 0.7);
    text-transform: uppercase;

    &.active {
      border-bottom: 2px solid #e10000;
    }

    &:hover {
      color: rgba(255, 255, 255, 1);
    }
  }

  h1 {
    ${scale(1.5)}
    margin: 0;
  }

  p {
    margin-bottom: ${rhythm(1.5)};
    margin-top: 0;
    text-align: center;
    text-transform: italicise;
  }

  strong {
    color: white;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`
