import React from "react"
import Layout from "../components/Layout"

export default function DefaultLayout({ children, pageContext, location }) {
  console.log(pageContext)
  return (
    <div>
      <Layout location={location}>{children}</Layout>
    </div>
  )
}
