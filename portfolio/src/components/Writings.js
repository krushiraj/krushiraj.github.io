import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { DisplayPostsContainer, Card } from "./WritingsCard"

const Root = data => (
  <DisplayPostsContainer>
    {data.allMdx.edges.map((props, key) => (
      <Card key={key} {...props.node} />
    ))}
    <p>
      You can view all my writings <Link to="/writings/?filters=articles">here</Link>
      .
    </p>
  </DisplayPostsContainer>
)

const query = graphql`
  query {
    allMdx(
      limit: 6
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { published: { ne: false }, type: { eq: "article" } }
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            banner {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`

export default () => <StaticQuery query={query} render={Root} />
