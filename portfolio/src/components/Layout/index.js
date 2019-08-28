import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"

import Footer from "../Footer"
import mdxComponents from "../Mdx"
import { StyledLayout, StyledCrumb, GlobalStyle } from "./styles"

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      const title = data.site.siteMetadata.title
      const rootPath = `${__PATH_PREFIX__}/`
      let header
      if (location && location.pathname === rootPath) {
        header = (
          <h1>
            <Link to={"/"}>
              {/* This is name svg animation <AravindBalla /> */}
            </Link>
            <span style={{ display: "none" }}>{title}</span>
          </h1>
        )
      } else {
        header = (
          <StyledCrumb>
            <span>
              <Link to={"/"}>{title}</Link>
            </span>
            <span>{"/"}</span>
            <span>writings</span>
            <span>{">"}</span>
            <span>{location.search.slice(1)}</span>
          </StyledCrumb>
        )
      }
      return (
        <React.Fragment>
          <StyledLayout>
            <GlobalStyle />
            {header}
            <MDXProvider components={mdxComponents}>
              <React.Fragment>{children}</React.Fragment>
            </MDXProvider>
          </StyledLayout>
          {location.pathname !== rootPath && <Footer />}
        </React.Fragment>
      )
    }}
  />
)

export default Layout
