import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"

import styled from "styled-components"

import Footer from "../Footer"
import mdxComponents from "../Mdx"
import Fonts from "../v2/Fonts"
import ThemeToggle from "../v2/ThemeToggle"
import { GlobalStyle } from "../../utils/theme"
import { StyledLayout } from "./styles"

const FloatingToggle = styled.div`
  position: fixed;
  top: 1.25rem;
  right: 1.25rem;
  z-index: 40;

  @media (max-width: 640px) {
    top: 1rem;
    right: 1rem;
  }
`

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
              <Fonts />
              <FloatingToggle>
                <ThemeToggle />
              </FloatingToggle>
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
