import React from "react"
import { Link, graphql } from "gatsby"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"
import Img from "gatsby-image"

import Bio from "../components/Bio"
import SEO from "../components/SEO"
import Layout from "../components/Layout"
import BreadCrumbs from "../components/BreadCrumbs"
import {
  StyledDate,
  StyledNextPrev,
  StyledTech,
  StyledPost,
  StyledImgCaption
} from "../components/styles/post"
import { rhythm } from "../utils/typography"

export default class BlogPostTemplate extends React.Component {
  render() {
    const {
      body,
      frontmatter,
      fields: {
        slug,
        socialImage: {
          childImageSharp: {
            original: { src },
          },
        },
      },
    } = this.props.data.mdx
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location}>
        {
          //SEO for the page based on the post meta data
        }
        <SEO
          isBlogPost
          frontmatter={{ ...frontmatter, slug }}
          postImage={src}
        />
        {
          //Title of the post as Heading of the page
        }
        <StyledPost style={{ cursor: "auto" }}>
          <BreadCrumbs path={this.props.pageContext.slug} />
          {frontmatter.banner && (
            <Img sizes={frontmatter.banner.childImageSharp.fluid} />
          )}
          {frontmatter.bannercaption && (
            <StyledImgCaption>{frontmatter.bannercaption}</StyledImgCaption>
          )}
          <h1>{frontmatter.title}</h1>
          <StyledDate>{frontmatter.date}</StyledDate>
          {frontmatter.technologies && (
            <StyledTech>
              Technology tags:{" "}
              <div>
                {frontmatter.technologies.split(",").map((tech, i) => (
                  <span key={`${tech.trim()}-${i}`}>{tech.trim()}</span>
                ))}
              </div>
            </StyledTech>
          )}
          <MDXRenderer>{body}</MDXRenderer>
        </StyledPost>

        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />

        <Bio />

        <StyledNextPrev>
          <li className="-prev">
            {previous && (
              <Link
                className="animated-arrow"
                to={previous.fields.slug}
                rel="next"
              >
                <span className="main -prev">
                  <span className="the-arrow -left -prev">
                    <span className="shaft"></span>
                  </span>
                  <span className="text">{previous.frontmatter.title}</span>
                </span>
                <span className="the-arrow -right -prev">
                  <span className="shaft"></span>
                </span>
              </Link>
            )}
          </li>
          <li className="-next">
            {next && (
              <Link className="animated-arrow" to={next.fields.slug} rel="prev">
                <span className="the-arrow -left -next">
                  <span className="shaft"></span>
                </span>
                <span className="main -next">
                  <span className="text">{next.frontmatter.title}</span>
                  <span className="the-arrow -right -next">
                    <span className="shaft"></span>
                  </span>
                </span>
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
        tags
        keywords
        banner {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        bannercaption
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
