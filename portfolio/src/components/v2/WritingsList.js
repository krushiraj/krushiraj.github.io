import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import { colors, fonts } from "../../utils/theme"
import { Section, Reveal, Meta, media } from "./shared"

const StyledWritings = styled.div`
  .entry {
    display: grid;
    grid-template-columns: 11rem 1fr auto;
    gap: 2rem;
    align-items: baseline;
    padding: 1.35rem 0;
    border-bottom: 1px solid ${colors.lineSoft};
    color: inherit;

    &:after {
      display: none;
    }

    ${media.phone} {
      grid-template-columns: 1fr auto;

      .date {
        display: none;
      }
    }

    h3 {
      margin: 0;
      font-size: 1.2rem;
      letter-spacing: -0.01em;
      color: ${colors.paperBright};
      transition: color 0.25s ease;
    }

    .description {
      font-size: 0.9rem;
      line-height: 1.6;
      color: ${colors.muted};
      margin: 0.4rem 0 0;
      max-width: 55ch;
    }

    .go {
      font-family: ${fonts.mono};
      color: ${colors.faint};
      transition: color 0.25s ease, transform 0.25s ease;
      justify-self: end;
    }

    &:hover {
      h3 {
        color: ${colors.accentBright};
      }

      .go {
        color: ${colors.accentBright};
        transform: translateX(4px);
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

const Writings = data => (
  <Section id="writings" index="05" title="Writings">
    <StyledWritings>
      {data.allMdx.edges.map(({ node }, i) => (
        <Reveal key={node.fields.slug} delay={i * 40}>
          <Link className="entry" to={node.fields.slug}>
            <Meta className="date">{node.frontmatter.date}</Meta>
            <div>
              <h3>{node.frontmatter.title}</h3>
              <p className="description">{node.frontmatter.description}</p>
            </div>
            <span className="go">→</span>
          </Link>
        </Reveal>
      ))}
      <Reveal>
        <p className="all">
          <Link to="/writings/">Browse all writings →</Link>
        </p>
      </Reveal>
    </StyledWritings>
  </Section>
)

const query = graphql`
  query {
    allMdx(
      limit: 5
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
            date(formatString: "MMM DD, YYYY")
            description
          }
        }
      }
    }
  }
`

export default () => <StaticQuery query={query} render={Writings} />
