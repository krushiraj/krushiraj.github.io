import React from "react"
import { Link, graphql } from "gatsby"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"
import Img from "gatsby-image"

import Bio from "../components/Bio"
import SEO from "../components/SEO"
import Layout from "../components/Layout"
import {
  StyledDate,
  StyledNextPrev,
  StyledTech,
  StyledPost,
} from "../components/styles/post"
import { rhythm } from "../utils/typography"

export default class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location}>
        {
          //SEO for the page based on the post meta data
        }
        <SEO
          isBlogPost
          frontmatter={{ ...post.frontmatter, slug: post.fields.slug }}
          postImage={post.fields.socialImage.childImageSharp.original.src}
        />
        {
          //Title of the post as Heading of the page
        }
        <StyledPost style={{ cursor: "auto" }}>
          {post.frontmatter.banner && (
            <Img sizes={post.frontmatter.banner.childImageSharp.fluid} />
          )}
          <h1>{post.frontmatter.title}</h1>
          <StyledDate>{post.frontmatter.date}</StyledDate>
          {post.frontmatter.technologies && (
            <StyledTech>
              Technology tags:{" "}
              {post.frontmatter.technologies.split(",").map((tech, i) => (
                <span key={`${tech.trim()}-${i}`}>{tech.trim()}</span>
              ))}
            </StyledTech>
          )}
          <MDXRenderer>{post.body}</MDXRenderer>
        </StyledPost>

        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />

        <Bio />

        <StyledNextPrev>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </StyledNextPrev>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query BlogPostById($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      parent {
        ... on File {
          sourceInstanceName
        }
      }
      excerpt
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        technologies
        banner {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
      fields {
        slug
        socialImage {
          childImageSharp {
            original {
              width
              height
              src
            }
          }
        }
      }
    }
  }
`
