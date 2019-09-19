import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import SchemaOrg from "./SchemaOrg"

import { normalizeUrl } from "../../utils/helpers"

const SEO = ({ postData, frontmatter = {}, postImage, isBlogPost }) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
            description
            siteUrl
            image
            author
            organization {
              name
              url
              logo
            }
            social {
              twitter
            }
          }
        }
      }
    `}
    render={({ site: { siteMetadata: seo } }) => {
      const postMeta =
        frontmatter || postData.childMarkdownRemark.frontmatter || {}

      const title = postMeta.title || seo.title
      const description = postMeta.description || seo.description
      const image = postImage
        ? normalizeUrl(`${seo.siteUrl}${postImage}`)
        : null
      const url = postMeta.slug
        ? normalizeUrl(`${seo.siteUrl}${postMeta.slug}`)
        : seo.siteUrl
      const datePublished = isBlogPost
        ? new Date(postMeta.date).toISOString()
        : false
      const tags = (postMeta.tags && postMeta.tags.split(",")) || []
      const keywords = [
        'krushi', 'raj', 'tula', 'missionrnd', 'mission',
        'krushi raj', 'krushiraj', 'krushiraj123', 'rnd',
        'developer', 'web developer', 'frontend', 'backend',
        'blog', 'portfolio', 'python', 'c', 'c++', 'javascript',
        'react', 'vue', 'node', 'css', 'html', 'js', 'scss',
        'portfolio', 'resume', 'profile', 'experience', 'ncr',
        'servicenow', 'verzeo', 'mini terminal', 'mini', 'terminal',
        'file system', 'parser', 'tokens', 'commands', 'help',
      ].concat((postMeta.keywords && postMeta.keywords.split(",")) || [])

      return (
        <React.Fragment>
          <Helmet htmlAttributes={{ lang: "en" }}>
            <meta name="robots" content="index, follow" />
            {/* General tags */}
            <title>{isBlogPost ? `${title} | ${seo.title}` : title}</title>
            <meta name="description" content={description} />
            {image && <meta name="image" content={image} />}

            {/* Meta describing the content related tags */}
            {tags.map(tag => <meta property="tag" key={tag} content={tag}/>)}

            {/* Keywords for the page */}
            {keywords.map(keyword => <meta property="keyword" key={keyword} content={keyword}/>)}

            {/* OpenGraph tags */}
            <meta property="og:url" content={url} />
            {isBlogPost ? (
              <meta property="og:type" content="article" />
            ) : (
              <meta property="og:type" content="project" />
            )}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {image && <meta property="og:image" content={image} />}

            {/* Github tags */}
            <meta name="github:site" content={"@" + seo.social.github} />
            <meta name="github:creator" content={"@" + seo.social.github} />
            <meta name="github:title" content={title} />
            <meta name="github:description" content={description} />
            {image && <meta name="github:image" content={image} />}

            {/* LinkedIn tags */}
            <meta name="linkedin:site" content={"@" + seo.social.linkedin} />
            <meta name="linkedin:creator" content={"@" + seo.social.linkedin} />
            <meta name="linkedin:title" content={title} />
            <meta name="linkedin:description" content={description} />
            {image && <meta name="linkedin:image" content={image} />}

            {/* StackOverflow tags */}
            <meta name="stackoverflow:site" content={"@" + seo.social.stackoverflow} />
            <meta name="stackoverflow:creator" content={"@" + seo.social.stackoverflow} />
            <meta name="stackoverflow:title" content={title} />
            <meta name="stackoverflow:description" content={description} />
            {image && <meta name="stackoverflow:image" content={image} />}

            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content={"@" + seo.social.twitter} />
            <meta name="twitter:creator" content={"@" + seo.social.twitter} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {image && <meta name="twitter:image" content={image} />}
          </Helmet>
          <SchemaOrg
            isBlogPost={isBlogPost}
            url={url}
            title={title}
            image={image}
            description={description}
            datePublished={datePublished}
            siteUrl={seo.siteUrl}
            author={seo.author}
            organization={seo.organization}
            defaultTitle={seo.title}
          />
        </React.Fragment>
      )
    }}
  />
)

SEO.propTypes = {
  isBlogPost: PropTypes.bool,
  postData: PropTypes.shape({
    childMarkdownRemark: PropTypes.shape({
      frontmatter: PropTypes.any,
      excerpt: PropTypes.any,
    }),
  }),
  postImage: PropTypes.string,
}

SEO.defaultProps = {
  isBlogPost: false,
  postData: { childMarkdownRemark: {} },
  postImage: null,
}

export default SEO
