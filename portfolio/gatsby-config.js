/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Krushi Raj Tula`,
    /*titleTemplate: `%s - Krushi's portfolio`,*/
    url: `https://krushiraj.github.io`,
    image: `/tkrlogo.png`,
    description: `Portfolio of Krushi Raj Tula`,
    twitterUsername: `krushiraj123`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `writings`,
        path: `${__dirname}/src/writings`,
      },
    },
    `gatsby-transformer-remark`,
  ]
}
