import React from "react"
import { Link, graphql } from "gatsby"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"
import Img from "gatsby-image"
import styled from "styled-components"

import SEO from "../components/SEO"
import BlogShell from "../components/v2/BlogShell"
import { colors, fonts, accentTint } from "../utils/theme"

const StyledPost = styled.article`
  .head {
    padding: 3.2rem 0 1.6rem;

    .eyebrow {
      font-family: ${fonts.mono};
      font-size: 0.7rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: ${colors.accent};
      margin: 0 0 0.9rem;

      .dim {
        color: ${colors.muted};
      }
    }

    h1 {
      font-family: ${fonts.display};
      font-size: clamp(2.1rem, 5.4vw, 3rem);
      font-weight: 580;
      letter-spacing: -0.025em;
      line-height: 1.06;
      margin: 0 0 0.9rem;
      color: ${colors.paperBright};
    }

    .lede {
      font-size: 1.05rem;
      line-height: 1.7;
      color: ${colors.muted};
      max-width: 58ch;
      margin: 0 0 1.2rem;
    }

    .tech {
      display: flex;
      flex-wrap: wrap;
      gap: 0.45rem;

      span {
        font-family: ${fonts.mono};
        font-size: 0.66rem;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: ${colors.paper};
        border: 1px solid ${colors.line};
        border-radius: 999px;
        padding: 0.25rem 0.7rem;
      }
    }
  }

  .banner {
    border: 1px solid ${colors.line};
    border-radius: 14px;
    overflow: hidden;
    margin: 0.4rem 0 0.5rem;

    .gatsby-image-wrapper {
      display: block;
    }
  }

  .banner-caption {
    font-family: ${fonts.mono};
    font-size: 0.66rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${colors.faint};
    margin: 0.6rem 0 0;
  }

  .body {
    padding: 2rem 0 0;
    font-size: 1.02rem;
    line-height: 1.78;
    color: ${colors.paper};

    /* the MDX already opens with its own h1; the page header covers it */
    > h1:first-child,
    h1 {
      display: none;
    }

    h2,
    h3,
    h4 {
      font-family: ${fonts.display};
      letter-spacing: -0.01em;
      color: ${colors.paperBright};
      margin: 2.4rem 0 0.9rem;
    }

    h2 {
      font-size: 1.55rem;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid ${colors.lineSoft};
    }

    h3 {
      font-size: 1.2rem;
    }

    p {
      margin: 0 0 1.15rem;
    }

    a {
      color: ${colors.accent};

      &:visited {
        color: ${colors.accent};
      }

      &:hover {
        color: ${colors.paperBright};
      }
    }

    strong {
      color: ${colors.paperBright};
    }

    ul,
    ol {
      margin: 0 0 1.15rem;
      padding-left: 1.4rem;

      li {
        margin-bottom: 0.45rem;
      }
    }

    img,
    .gatsby-resp-image-wrapper {
      border-radius: 12px;
      overflow: hidden;
    }

    table {
      display: block;
      width: 100%;
      overflow-x: auto;
      border-collapse: collapse;
      margin: 0 0 1.25rem;

      th,
      td {
        border: 1px solid ${colors.line};
        padding: 0.5rem 0.8rem;
        text-align: left;
      }

      th {
        font-family: ${fonts.mono};
        font-size: 0.72rem;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: ${colors.muted};
      }
    }

    hr {
      margin: 2rem 0;
    }
  }

  .author {
    display: flex;
    align-items: center;
    gap: 1.1rem;
    border: 1px solid ${colors.line};
    border-radius: 14px;
    background: ${colors.inkRaised};
    padding: 1.2rem 1.4rem;
    margin: 3rem 0 0;

    img {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      object-fit: cover;
      margin: 0;
      background: radial-gradient(
        circle at 50% 28%,
        ${accentTint("34%")},
        ${accentTint("10%")} 72%
      );
      outline: 1px solid ${accentTint("55%")};
      outline-offset: 3px;
      flex-shrink: 0;
    }

    p {
      margin: 0;
      font-size: 0.92rem;
      line-height: 1.6;
      color: ${colors.muted};

      strong {
        color: ${colors.paperBright};
      }

      a {
        color: ${colors.accent};
      }
    }
  }

  nav.pager {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin: 1.5rem 0 0;

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
    }

    a {
      display: block;
      border: 1px solid ${colors.line};
      border-radius: 14px;
      padding: 1rem 1.2rem;
      color: inherit;
      transition: border-color 0.25s ease, transform 0.25s ease;

      &:after {
        display: none;
      }

      .dir {
        font-family: ${fonts.mono};
        font-size: 0.64rem;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: ${colors.muted};
        display: block;
        margin-bottom: 0.4rem;
      }

      .t {
        font-family: ${fonts.display};
        font-size: 1.02rem;
        color: ${colors.paperBright};
        transition: color 0.25s ease;
      }

      &:hover {
        border-color: ${accentTint("50%")};
        transform: translateY(-2px);

        .t {
          color: ${colors.accent};
        }
      }
    }

    .next {
      text-align: right;
    }
  }
`

const BlogPostTemplate = ({ data, pageContext }) => {
  const {
    body,
    frontmatter,
    fields: {
      slug,
      timeToRead: { minutes },
      socialImage: {
        childImageSharp: {
          original: { src },
        },
      },
    },
  } = data.mdx
  const { previous, next } = pageContext
  const readMins = Math.max(1, Math.ceil(minutes))
  const crumbLabel = frontmatter.title

  return (
    <BlogShell
      crumbs={[
        { label: "Writings", to: "/writings/" },
        { label: crumbLabel },
      ]}
    >
      <SEO isBlogPost frontmatter={{ ...frontmatter, slug }} postImage={src} />
      <StyledPost>
        <div className="head">
          <p className="eyebrow">
            {frontmatter.type || "post"}
            <span className="dim">
              {" "}
              · {frontmatter.date} · {readMins} min read
            </span>
          </p>
          <h1>{frontmatter.title}</h1>
          {frontmatter.description && (
            <p className="lede">{frontmatter.description}</p>
          )}
          {frontmatter.technologies && (
            <div className="tech">
              {frontmatter.technologies.split(",").map((tech, i) => (
                <span key={`${tech.trim()}-${i}`}>{tech.trim()}</span>
              ))}
            </div>
          )}
        </div>

        {frontmatter.banner && (
          <>
            <div className="banner">
              <Img fluid={frontmatter.banner.childImageSharp.fluid} />
            </div>
            {frontmatter.bannercaption && (
              <p className="banner-caption">{frontmatter.bannercaption}</p>
            )}
          </>
        )}

        <div className="body" id="post">
          <MDXRenderer>{body}</MDXRenderer>
        </div>

        <div className="author">
          <img src="/krushi-portrait-256.png" alt="Krushi Raj Tula" />
          <p>
            <strong>Krushi Raj Tula</strong> · a developer, geek, and
            enthusiast who loves solving hard problems and fixing things with
            technology. Reach out on{" "}
            <a
              href="https://twitter.com/krushiraj123"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            .
          </p>
        </div>

        <nav className="pager" aria-label="More writings">
          {previous ? (
            <Link to={previous.fields.slug} rel="prev">
              <span className="dir">← Previous</span>
              <span className="t">{previous.frontmatter.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link className="next" to={next.fields.slug} rel="next">
              <span className="dir">Next →</span>
              <span className="t">{next.frontmatter.title}</span>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </StyledPost>
    </BlogShell>
  )
}

export default BlogPostTemplate

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
        type
        banner {
          childImageSharp {
            fluid(maxWidth: 780) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        bannercaption
      }
      fields {
        slug
        timeToRead {
          minutes
        }
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
