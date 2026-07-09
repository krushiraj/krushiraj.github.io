import React from "react"
import styled from "styled-components"
import { colors, fonts, accentTint } from "../../utils/theme"

/**
 * A responsive grid of repository cards, used inside MDX project posts to
 * showcase a collection of related repos (e.g. teaching/tutorial repos).
 * Import in an .mdx file and pass a `repos` array:
 *   <RepoCards repos={[{ name, url, desc, tech: [] }]} />
 */
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin: 1.75rem 0 1rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }

  a.repo-card {
    display: flex;
    flex-direction: column;
    border: 1px solid ${colors.line};
    border-radius: 12px;
    padding: 1.1rem 1.2rem 1.2rem;
    background: ${colors.inkRaised};
    text-decoration: none;
    box-shadow: none;
    transition: border-color 0.25s ease, transform 0.25s ease,
      box-shadow 0.25s ease;

    &:after {
      display: none;
    }

    .repo-name {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-family: ${fonts.mono};
      font-size: 0.9rem;
      font-weight: 500;
      color: ${colors.paperBright};
      margin: 0 0 0.55rem;
      transition: color 0.25s ease;
    }

    .repo-name .slash {
      color: ${colors.faint};
    }

    .repo-desc {
      font-size: 0.9rem;
      line-height: 1.6;
      color: ${colors.muted};
      margin: 0 0 0.9rem;
      flex: 1;
    }

    .repo-tech {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;

      span {
        font-family: ${fonts.mono};
        font-size: 0.64rem;
        letter-spacing: 0.04em;
        color: ${colors.paper};
        border: 1px solid ${colors.line};
        border-radius: 999px;
        padding: 0.2rem 0.6rem;
      }
    }

    &:hover {
      border-color: ${accentTint("50%")};
      transform: translateY(-3px);
      box-shadow: 0 16px 34px -20px rgba(0, 0, 0, 0.55);

      .repo-name {
        color: ${colors.accent};
      }
    }
  }
`

const RepoCards = ({ repos = [] }) => (
  <Grid>
    {repos.map(repo => (
      <a
        key={repo.url}
        className="repo-card"
        href={repo.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="repo-name">
          krushiraj<span className="slash">/</span>
          {repo.name}
        </span>
        <span className="repo-desc">{repo.desc}</span>
        {repo.tech && (
          <span className="repo-tech">
            {repo.tech.map(t => (
              <span key={t}>{t}</span>
            ))}
          </span>
        )}
      </a>
    ))}
  </Grid>
)

export default RepoCards
