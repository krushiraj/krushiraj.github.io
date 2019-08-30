import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { rhythm } from "../../utils/typography"

const query = graphql`
  query {
    file(relativePath: { eq: "img/krushi.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

const CircularImageTop = () => (
  <StaticQuery
    query={query}
    render={data => (
      <Img
        fluid={data.file.childImageSharp.fluid}
        style={{
          display: "flex",
          textAlign: "center",
          margin: "0 auto",
          borderRadius: "50%",
          height: rhythm(1),
          width: rhythm(1),
        }}
      />
    )}
  />
)

export default CircularImageTop
