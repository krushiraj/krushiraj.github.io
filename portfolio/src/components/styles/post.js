import styled from "styled-components"
import { rhythm, scale } from "../../utils/typography"
import { colors } from "../../utils/theme"

export const StyledDate = styled.p`
  ${scale(-1 / 5)};
  display: block;
  margin-bottom: ${rhythm(1 / 2)};
  color: ${colors.blue};
`

export const StyledNextPrev = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  align-content: center;
  align-items: center;
  padding: 0;
  margin: 0 0 ${rhythm(0.5)} 0;

  li {
    padding: 0;
    margin: 0;
    vertical-align: middle;
    display: flex;
    align-content: center;
    align-items: center;

    @media only screen and (max-width: 768px) {
      &.-prev {
        margin-left: 32px;
      }

      &.-next {
        margin-right: 32px;
      }
    }
  }

  .the-arrow {
    width: 64px;
    transition: all 0.2s;

    @media only screen and (max-width: 768px) {
      width: 32px;
    }
  }

  .the-arrow.-left.-next {
    position: absolute;
    top: 50%;
    left: 0;
  }

  .the-arrow.-right.-prev {
    position: absolute;
    top: 50%;
    right: 0;
  }

  .the-arrow.-left.-next > .shaft,
  .the-arrow.-right.-prev > .shaft {
    width: 0;
  }

  .the-arrow.-left.-next > .shaft:before,
  .the-arrow.-left.-next > .shaft:after,
  .the-arrow.-right.-prev > .shaft:before,
  .the-arrow.-right.-prev > .shaft:after {
    width: 0;
    background-color: #999;
  }

  .the-arrow.-right.-next {
    top: 50%;
  }

  .the-arrow.-left.-prev {
    top: 50%;
  }

  .the-arrow.-right.-next > .shaft,
  .the-arrow.-left.-prev > .shaft {
    width: 64px;
    transition-delay: 0.2s;

    @media only screen and (max-width: 768px) {
      width: 32px;
    }
  }

  .the-arrow.-right.-next > .shaft:before,
  .the-arrow.-right.-next > .shaft:after,
  .the-arrow.-left.-prev > .shaft:before,
  .the-arrow.-left.-prev > .shaft:after {
    width: 8px;
    transition-delay: 0.3s;
    transition: all 0.5s;
  }

  .the-arrow.-right.-next > .shaft:before,
  .the-arrow.-left.-prev > .shaft:after {
    transform: rotate(45deg);
  }

  .the-arrow.-right.-next > .shaft:after,
  .the-arrow.-left.-prev > .shaft:before {
    transform: rotate(-45deg);
  }

  .the-arrow > .shaft {
    background-color: ${colors.lightyellow};
    display: block;
    height: 1px;
    position: relative;
    transition: all 0.2s;
    transition-delay: 0;
    will-change: transform;
  }

  .the-arrow.-next > .shaft:before,
  .the-arrow.-next > .shaft:after {
    background-color: ${colors.lightyellow};
    content: "";
    display: block;
    height: 1px;
    position: absolute;
    top: 0;
    right: 0;
    transition: all 0.2s;
    transition-delay: 0;
  }

  .the-arrow.-prev > .shaft:before,
  .the-arrow.-prev > .shaft:after {
    background-color: ${colors.lightyellow};
    content: "";
    display: block;
    height: 1px;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.2s;
    transition-delay: 0;
  }

  .the-arrow.-next > .shaft:before {
    transform-origin: top right;
  }

  .the-arrow.-next > .shaft:after {
    transform-origin: bottom right;
  }

  .the-arrow.-prev > .shaft:before {
    transform-origin: top left;
  }

  .the-arrow.-prev > .shaft:after {
    transform-origin: bottom left;
  }

  .animated-arrow {
    display: inline-block;
    color: ${colors.lightyellow};
    font-size: ${rhythm(0.75)};
    font-weight: bold;
    text-decoration: none;
    position: relative;
    transition: all 0.2s;

    @media only screen and (max-width: 768px) {
      font-size: ${rhythm(0.5)};
    }
  }

  .animated-arrow:hover {
    color: ${colors.yellow};
  }

  .animated-arrow:hover > .the-arrow.-left.-next > .shaft,
  .animated-arrow:hover > .the-arrow.-right.-prev > .shaft {
    width: 64px;
    transition-delay: 0.1s;
    background-color: ${colors.yellow};

    @media only screen and (max-width: 768px) {
      width: 32px;
    }
  }

  .animated-arrow:hover > .the-arrow.-left.-next > .shaft:before,
  .animated-arrow:hover > .the-arrow.-left.-next > .shaft:after,
  .animated-arrow:hover > .the-arrow.-right.-prev > .shaft:before,
  .animated-arrow:hover > .the-arrow.-right.-prev > .shaft:after {
    width: 8px;
    transition-delay: 0.1s;
    background-color: ${colors.yellow};
  }

  .animated-arrow:hover > .the-arrow.-left.-next > .shaft:before,
  .animated-arrow:hover > .the-arrow.-right.-prev > .shaft:before {
    transform: rotate(45deg);
  }

  .animated-arrow:hover > .the-arrow.-left.-next > .shaft:after,
  .animated-arrow:hover > .the-arrow.-right.-prev > .shaft:after {
    transform: rotate(-45deg);
  }

  .animated-arrow:hover > .main.-next {
    transform: translateX(80px);

    @media only screen and (max-width: 768px) {
      transform: translateX(40px);
    }
  }

  .animated-arrow:hover > .main.-prev {
    transform: translateX(-80px);

    @media only screen and (max-width: 768px) {
      transform: translateX(-40px);
    }
  }

  .animated-arrow:hover > .main > .the-arrow.-right.-next > .shaft {
    width: 0;
    transform: translateX(200%);
    transition-delay: 0;

    @media only screen and (max-width: 768px) {
      transform: translateX(100%);
    }
  }

  .animated-arrow:hover > .main > .the-arrow.-left.-prev > .shaft {
    width: 0;
    transform: translateX(-200%);
    transition-delay: 0;

    @media only screen and (max-width: 768px) {
      transform: translateX(-100%);
    }
  }

  .animated-arrow:hover > .main > .the-arrow.-right.-next > .shaft:before,
  .animated-arrow:hover > .main > .the-arrow.-right.-next > .shaft:after,
  .animated-arrow:hover > .main > .the-arrow.-left.-prev > .shaft:before,
  .animated-arrow:hover > .main > .the-arrow.-left.-prev > .shaft:after {
    width: 0;
    transition-delay: 0;
    transition: all 0.1s;
  }

  .animated-arrow:hover
    > .main
    > .the-arrow.-right.-next
    > .shaft:before
    :after,
  .animated-arrow:hover
    > .main
    > .the-arrow.-left.-prev
    > .shaft:before
    :after {
    transform: rotate(0);
  }

  .animated-arrow > .main {
    display: flex;
    align-items: center;
    align-content: center;
    transition: all 0.2s;
  }

  .animated-arrow > .main > .text {
    margin: 0 5px;
  }

  .animated-arrow > .main > .the-arrow {
    position: relative;
  }

  a {
    margin: auto 0;
    color: ${colors.yellow};
    &:hover :after {
      height: 0;
      width: 0;
    }
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
  transition: all 0.3s ease;

  .gatsby-image-wrapper {
    position: "absolute";
    top: 0;
    max-height: 33vh;

    @media only screen and (max-width: 768px) {
      max-height: 40vh;
    }

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
