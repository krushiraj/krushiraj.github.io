import React from "react"
import Layout from "../components/Layout"

export default function DefaultLayout({ children, pageContext, location }) {
  return (
    <div>
      <Layout location={location}>{children}</Layout>
    </div>
  )
}
