import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { colors, fonts, accentTint } from "../../utils/theme"
import { Section, Reveal, Meta, media } from "./shared"

const StyledWorks = styled.div`
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;

    ${media.phone} {
      grid-template-columns: 1fr;
    }
  }

  .card {
    border: 1px solid ${colors.line};
    border-radius: 14px;
    overflow: hidden;
    background: ${colors.inkRaised};
    transition: transform 0.3s cubic-bezier(0.2, 0.6, 0.2, 1),
      border-color 0.3s ease, box-shadow 0.3s ease;

    a {
      display: block;
      color: inherit;

      &:after {
        display: none;
      }
    }

    .banner {
      position: relative;
      overflow: hidden;

      .gatsby-image-wrapper {
        height: 180px;
        transition: transform 0.5s cubic-bezier(0.2, 0.6, 0.2, 1);
      }

      &:after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(
          180deg,
          rgba(13, 12, 10, 0) 55%,
          rgba(13, 12, 10, 0.55) 100%
        );
        pointer-events: none;
      }
    }

    .body {
      padding: 1.2rem 1.3rem 1.4rem;
    }

    h3 {
      margin: 0 0 0.35rem;
      font-size: 1.15rem;
      letter-spacing: -0.01em;
      color: ${colors.paperBright};
      transition: color 0.25s ease;
    }

    .description {
      font-size: 0.9rem;
      line-height: 1.65;
      color: ${colors.muted};
      margin: 0.5rem 0 0;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    &:hover {
      transform: translateY(-4px);
      border-color: ${accentTint("45%")};
      box-shadow: 0 18px 40px -20px rgba(0, 0, 0, 0.55);

      h3 {
        color: ${colors.accentBright};
      }

      .gatsby-image-wrapper {
        transform: scale(1.04);
      }
    }
  }

  .all {
    margin-top: 1.75rem;
    font-family: ${fonts.mono};
    font-size: 0.78rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;

    a {
      color: ${colors.accentBright};
    }
  }
`

const Works = data => (
  <Section id="my-works" index="04" title="Selected Works">
    <StyledWorks>
      <div className="grid">
        {data.allMdx.edges.map(({ node }, i) => (
          <Reveal key={node.fields.slug} delay={(i % 2) * 80}>
            <article className="card">
              <Link to={node.fields.slug}>
                {node.frontmatter.banner && (
                  <div className="banner">
                    <Img
                      fluid={node.frontmatter.banner.childImageSharp.fluid}
                      alt={node.frontmatter.title}
                    />
                  </div>
                )}
                <div className="body">
                  <h3>{node.frontmatter.title}</h3>
                  <Meta>{node.frontmatter.date}</Meta>
                  <p className="description">{node.frontmatter.description}</p>
                </div>
              </Link>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <p className="all">
          <Link to="/writings/?filters=projects">All project write-ups →</Link>
        </p>
      </Reveal>
    </StyledWorks>
  </Section>
)

const query = graphql`
  query {
    allMdx(
      limit: 6
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { published: { ne: false }, type: { eq: "project" } }
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMM YYYY")
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

export default () => <StaticQuery query={query} render={Works} />
