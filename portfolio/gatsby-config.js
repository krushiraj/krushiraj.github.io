/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Krushi Raj Tula`,
    author: `Krushi Raj Tula <krushiraj123@gmail.com>`,
    titleTemplate: `%s's portfolio`,
    siteUrl: `https://krushiraj.github.io`,
    image: `/tkrlogo.png`,
    description: `Portfolio of Krushi Raj Tula. A developer, geek, enthusiast, who loves to solve problems and fix things with technology. You can read my writings here.`,
    social: {
      twitter: "krushiraj123",
      github: "krushiraj",
      linkedin: "krushi-raj-t-aba141b1",
      stackoverflow: "krushiraj",
    },
    organization: {
      name: "Krushi Raj Tula",
      url: "https://krushiraj.github.io",
      logo: "https://krushiraj.github.io/tkrlogo.png",
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: "content",
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        defaultLayouts: {
          default: require.resolve("./src/templates/PageTemplate.js"),
        },
        gatsbyRemarkPlugins: [
          { resolve: "gatsby-remark-copy-linked-files" },
          {
            resolve: `gatsby-remark-images`,
            options: {
              backgroundColor: "#141414",
              maxWidth: 590,
              quality: 80,
              sizeByPixelDensity: true,
            },
          },
          {
            resolve: require.resolve("./plugins/remark-embedder"),
          },
          {
            resolve: "gatsby-remark-embedder",
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          { resolve: "gatsby-remark-smartypants" },
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-146409617-1`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Krushi Raj Tula`,
        short_name: `TKR`,
        start_url: `/`,
        background_color: `#e10000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `./static/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "./src/utils/typography",
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                const normalizeUrl = require("./src/utils/helpers").normalizeUrl
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  tags: edge.node.frontmatter.tags || "",
                  url: normalizeUrl(
                    site.siteMetadata.siteUrl + edge.node.fields.slug
                  ),
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMdx(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: {frontmatter: { published: { ne: false } }}
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Krushi Raj Tula - RSS Feed",
            match: "^/writings/",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            const normalizeUrl = require("./src/utils/helpers").normalizeUrl
            return {
              url: normalizeUrl(site.siteMetadata.siteUrl + edge.node.path),
              changefreq: `daily`,
              priority: 0.7,
            }
          }).concat([
            {
              url: 'https://krushiraj.github.io/mini-terminal',
              changefreq: `daily`,
              priority: 0.7,
            }
          ])
      },
    },
  ],
}
