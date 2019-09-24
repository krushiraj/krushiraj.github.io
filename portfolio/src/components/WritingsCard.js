import React from "react"
import Img from "gatsby-image"
import { rhythm } from "../utils/typography"
import { StyledDate } from "./styles/post"
import { colors } from "../utils/theme"
import styled from "styled-components"


export const Card = ({
  excerpt,
  fields: { slug },
  frontmatter: {
    title,
    date,
    banner: {
      childImageSharp: { fluid },
    },
  },
}) => {
  return (
    <div className="card">
      <a href={slug}>
        <Img fluid={fluid} />
        <p className="title">{title}</p>
        <StyledDate>{date}</StyledDate>
        <div>
          <p className="description">{excerpt}</p>
        </div>
      </a>
    </div>
  )
}

export const DisplayPostsContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: hidden;

  p a {
    color: ${colors.skyblue};
  }

  .card {
    width: calc(50% - 20px);
    height: ${rhythm(7)};
    margin: 10px;

    a {
      width: 100%;
      :after {
        height: 0;
      }
    }

    &:hover {
      .gatsby-image-wrapper {
        filter: blur(5px);
        opacity: 0.3;
      }

      .description {
        opacity: 1;
      }
    }

    .gatsby-image-wrapper {
      img {
        display: block;
      }
      height: ${rhythm(5)};
      filter: blur(0);
      opacity: 1;
      transition: all 0.3s ease;
    }

    .title {
      font-weight: bold;
      width: 100%;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      margin: 0;
      padding: 0;
    }

    .description {
      color: #fff;
      position: relative;
      top: calc(-${rhythm(7)} - 10px);
      width: 100%;
      height: ${rhythm(5)};
      text-overflow: ellipsis;
      overflow: hidden;
      margin: 0;
      padding: 0;
      opacity: 0;
    }

    @media only screen and (max-width: 768px) {
      width: calc(100% - 20px);
    }
  }
`