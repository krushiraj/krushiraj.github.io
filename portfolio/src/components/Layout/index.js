import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"

import Footer from "../Footer"
import mdxComponents from "../Mdx"
import { GlobalStyle } from "../../utils/theme"
import { StyledLayout } from "./styles"

const Layout = props => {
  const { children } = props
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
          allMdx {
            edges {
              node {
                frontmatter {
                  date(formatString: "MMMM DD, YYYY")
                  title
                  description
                  published
                }
              }
            }
          }
        }
      `}
      render={() => {
        return (
          <React.Fragment>
            <StyledLayout>
              <GlobalStyle />
              <MDXProvider components={mdxComponents}>
                <React.Fragment>{children}</React.Fragment>
              </MDXProvider>
            </StyledLayout>
            <Footer />
          </React.Fragment>
        )
      }}
    />
  )
}

export default Layout
