import styled from "styled-components"
import { rhythm, scale } from "../../utils/typography"
import { colors } from "../../utils/theme"
import { isMobile } from "react-device-detect"

export const StyledDate = styled.p`
  ${scale(-1 / 5)};
  display: block;
  margin-bottom: ${rhythm(1 / 2)};
  color: ${colors.blue};
`

export const StyledNextPrev = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  a {
    color: ${colors.yellow};
  }
`

export const StyledTech = styled.div`
  margin: ${rhythm(0.5)} 0;
  span {
    margin: ${rhythm(0.1)};
    border: 1px solid ${colors.techborder};
    padding: 4px 8px;
    border-radius: 10px;
    color: ${colors.techfont};
    transition: all 0.2s linear;

    &:hover {
      color: ${colors.techborder};
      border-color: ${colors.techfont};
    }
  }
`

export const StyledPost = styled.div`
  .gatsby-image-wrapper {
    position: "absolute";
    top: 0;
    max-height: ${isMobile ? "40vh" : "33vh"};

    img {
      object-fit: cover;
      filter: blur(5px);
      transition: all 0.3s linear;
    }

    &:after {
      content: "";
      transition: all 0.3s linear;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(60deg, #000, #333);
      opacity: 0.7;
    }

    &:hover:after {
      opacity: 0;
    }

    &:hover {
      img {
        filter: none;
      }
    }
  }

  h3 {
    margin: 0;
    a {
      color: rgba(255, 255, 255, 0.7);
    }

    &:hover {
      a {
        color: rgba(255, 255, 255, 1);
      }
    }
  }

  small {
    color: ${colors.blue};
  }

  h1 {
    margin: 0;
  }
`

export const StyledSummary = styled.p`
  color: ${colors.text};
`
