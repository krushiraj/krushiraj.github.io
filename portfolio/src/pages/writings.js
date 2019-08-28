import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import { StyledPost, StyledSummary } from "../components/styles/post"
import SEO from "../components/SEO"
import { colors } from "../utils/theme"

export default class WritingsIndex extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location}>
        <SEO frontmatter={{ title: "Writings", slug: "/writings" }} />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <StyledPost
              key={node.fields.slug}
              style={{
                cursor: "pointer",
              }}
              onClick={() => (window.location = node.fields.slug)}
            >
              <h3>
                <Link style={{ boxShadow: "none" }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </StyledPost>
          )
        })}
        <hr />
        <StyledSummary style={{ color: colors.goldenred }}>
          <strong>Reached the end.</strong> That&#39;s it for now.
          <br />
          Checkout this place after some time, may be I&#39;ll have new content
          ready for you.
        </StyledSummary>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { ne: false } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            published
          }
        }
      }
    }
  }
`
