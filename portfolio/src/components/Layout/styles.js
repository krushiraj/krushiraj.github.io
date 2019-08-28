import styled, { createGlobalStyle } from "styled-components"
import { rhythm, scale } from "../../utils/typography"
import { colors } from "../../utils/theme"

/**
 * Global styles are placed here instead of gatsby-browser.js
 * beacuse, we make use of the power of styled-components
 * and can change the theme easily.
 */
export const GlobalStyle = createGlobalStyle`
  body {
    background: ${colors.background};
    color: ${colors.text};
    font-display: auto;
    margin: 0;
    padding: 0;
  }

  h1,h2,h3 {
    margin-top: ${rhythm(1)};
    color: ${colors.headings};
      a {
      box-shadow: none;
      text-decoration: none;
      color: inherit;

      &:hover: {
        text-decoration: none;
      }
    }
  }

  h2 {
    ${scale(2 / 3)}
  }

  a {
    color: ${colors.headings};
    position: relative;
    text-decoration: none;
    display: inline-block;
    padding: 0;

    &:after {
      background: none repeat scroll 0 0 transparent;
      bottom: -2px;
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
      color: rgba(255, 255, 255, 0.7);
    }

    &:active {
      color: ${colors.text};
    }

    &:visited {
      color: ${colors.text};
    }
  }

  hr {
    background: gray;
  }

  .gh-card-wrap {
    margin-top: 20px;
    .github-card {
      .card {
        margin: 0 auto;
        max-width: 400px;
        border-radius: 5px;
        border: 1px solid #ddd;
        .main {
          border-bottom: 1px solid #666;
          padding: 0 10px;
          .user {
            display: flex;
            .avatar {
              margin: 10px;
              border-radius: 50%;
              border: 2px solid #fff;
            }
            .user-details {
              margin: 10px;
              h3 {
                margin: 10px 0px;
              }
              p {
                margin: 0;
              }
            }

          }
        }
        .stats {
          padding: 0 10px;
          margin: 10px;
          text-align: right;
          .summary {
            font-size: 0.9em;
          }
        }
      }
      .card-caption {
        text-align: center;
        font-size: 0.8em;
        font-weight: 200;
        margin: 0;
        a {
          color: #ccc;

        }
      }
    }
  }

  blockquote {
    background: #111;
    border-left: 4px solid #eee;
    padding-left: 20px;
    font-size: 1.2em;
    font-style: italic;
  }

  :not(pre) > code {
    border-radius: .3em;
    color: #EB697F;
    padding: .1em;
    background: #2b2b2b;
  }
`

export const StyledLayout = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: 0;
`

export const StyledCrumb = styled.h2`
  a {
    box-shadow: none;
    text-decoration: none;
    color: inherit;
  }

  span {
    text-transform: capitalize;
    margin-right: ${rhythm(1 / 4)};
  }
`
