import React, { useMemo, useState } from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import QueryString from "query-string"

import SEO from "../components/SEO"
import BlogShell from "../components/v2/BlogShell"
import { colors, fonts, accentTint } from "../utils/theme"

const StyledIndex = styled.div`
  .head {
    padding: 3.5rem 0 2rem;

    h1 {
      font-family: ${fonts.display};
      font-size: clamp(2.4rem, 6vw, 3.4rem);
      font-weight: 580;
      letter-spacing: -0.03em;
      line-height: 1.02;
      margin: 0 0 0.9rem;
      color: ${colors.paperBright};

      em {
        font-style: italic;
        font-weight: 420;
        color: ${colors.accent};
      }
    }

    p {
      color: ${colors.muted};
      max-width: 52ch;
      line-height: 1.65;
      margin: 0;
    }
  }

  .controls {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.6rem;
    padding: 0.5rem 0 1rem;
    border-bottom: 1px solid ${colors.line};

    .chips {
      display: flex;
      gap: 0.45rem;
    }

    button.chip {
      appearance: none;
      cursor: pointer;
      font-family: ${fonts.mono};
      font-size: 0.7rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: ${colors.muted};
      background: none;
      border: 1px solid ${colors.line};
      border-radius: 999px;
      padding: 0.45rem 1rem;
      transition: color 0.25s ease, border-color 0.25s ease,
        background 0.25s ease;

      &:hover {
        color: ${colors.paperBright};
        border-color: ${colors.accent};
      }

      &.on {
        color: ${colors.accent};
        border-color: ${accentTint("55%")};
        background: ${accentTint("9%")};
      }
    }

    input {
      flex: 1;
      min-width: 200px;
      font-family: ${fonts.mono};
      font-size: 0.8rem;
      color: ${colors.paper};
      background: ${colors.inkRaised};
      border: 1px solid ${colors.line};
      border-radius: 999px;
      padding: 0.55rem 1.1rem;
      outline: none;
      transition: border-color 0.25s ease;

      &::placeholder {
        color: ${colors.faint};
      }

      &:focus {
        border-color: ${colors.accent};
      }
    }
  }

  .count {
    font-family: ${fonts.mono};
    font-size: 0.68rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: ${colors.faint};
    padding: 1rem 0 0.25rem;
  }

  a.entry {
    display: grid;
    grid-template-columns: 8.5rem 1fr auto;
    gap: 1.5rem;
    align-items: baseline;
    padding: 1.35rem 0;
    border-bottom: 1px solid ${colors.lineSoft};
    color: inherit;

    &:after {
      display: none;
    }

    @media (max-width: 640px) {
      grid-template-columns: 1fr auto;

      .date {
        display: none;
      }
    }

    .date {
      font-family: ${fonts.mono};
      font-size: 0.7rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: ${colors.muted};
    }

    h2 {
      margin: 0;
      font-size: 1.25rem;
      font-weight: 550;
      letter-spacing: -0.01em;
      color: ${colors.paperBright};
      transition: color 0.25s ease;
    }

    .kind {
      font-family: ${fonts.mono};
      font-size: 0.6rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: ${colors.accent};
      border: 1px solid ${accentTint("40%")};
      border-radius: 999px;
      padding: 0.15rem 0.55rem;
      margin-left: 0.6rem;
      position: relative;
      top: -2px;
      white-space: nowrap;
    }

    .description {
      font-size: 0.9rem;
      line-height: 1.6;
      color: ${colors.muted};
      margin: 0.4rem 0 0;
      max-width: 58ch;
    }

    .go {
      font-family: ${fonts.mono};
      color: ${colors.faint};
      transition: color 0.25s ease, transform 0.25s ease;
      justify-self: end;
    }

    &:hover {
      h2 {
        color: ${colors.accent};
      }

      .go {
        color: ${colors.accent};
        transform: translateX(4px);
      }
    }
  }

  .end {
    font-family: ${fonts.mono};
    font-size: 0.72rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: ${colors.faint};
    text-align: center;
    padding: 2.5rem 0 0;
  }
`

const TYPE_FILTERS = [
  { key: "all", label: "All" },
  { key: "article", label: "Articles" },
  { key: "project", label: "Projects" },
]

const initialType = search => {
  const filters = QueryString.parse(search).filters
  if (!filters) return "all"
  if (String(filters).includes("project")) return "project"
  if (String(filters).includes("article")) return "article"
  return "all"
}

const matchesQuery = (node, query) => {
  if (!query) return true
  const q = query.toLowerCase()
  const fm = node.frontmatter
  return ["title", "description", "tags", "technologies", "keywords"].some(
    key => fm[key] && String(fm[key]).toLowerCase().includes(q)
  )
}

const WritingsIndex = ({ data, location }) => {
  const [type, setType] = useState(() => initialType(location.search))
  const [query, setQuery] = useState("")

  const posts = useMemo(
    () =>
      data.allMdx.edges.filter(({ node }) => {
        const typeOk = type === "all" || node.frontmatter.type === type
        return typeOk && matchesQuery(node, query)
      }),
    [data, type, query]
  )

  return (
    <BlogShell crumbs={[{ label: "Writings" }]}>
      <SEO frontmatter={{ title: "Writings", slug: "/writings" }} />
      <StyledIndex>
        <div className="head">
          <h1>
            Things I <em>build &amp; write.</em>
          </h1>
          <p>
            Projects I have shipped and articles on what I learn along the way,
            from search infrastructure and dev tools to the games I make for my
            own game nights.
          </p>
        </div>

        <div className="controls">
          <div className="chips">
            {TYPE_FILTERS.map(({ key, label }) => (
              <button
                key={key}
                type="button"
                className={`chip ${type === key ? "on" : ""}`}
                onClick={() => setType(key)}
              >
                {label}
              </button>
            ))}
          </div>
          <input
            type="search"
            placeholder="Search title, tags, tech..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            aria-label="Search writings"
          />
        </div>

        <p className="count">
          {posts.length} {posts.length === 1 ? "entry" : "entries"}
        </p>

        {posts.map(({ node }) => (
          <Link className="entry" key={node.fields.slug} to={node.fields.slug}>
            <span className="date">{node.frontmatter.date}</span>
            <span>
              <h2>
                {node.frontmatter.title}
                <span className="kind">{node.frontmatter.type}</span>
              </h2>
              <p className="description">{node.frontmatter.description}</p>
            </span>
            <span className="go">→</span>
          </Link>
        ))}

        <p className="end">
          That is everything for now. Check back for new entries.
        </p>
      </StyledIndex>
    </BlogShell>
  )
}

export default WritingsIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { ne: false } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMM DD, YYYY")
            title
            description
            tags
            type
            technologies
            keywords
          }
        }
      }
    }
  }
`
