import React from "react"
import SEO from "../components/SEO"
import CircularImage from "../components/CircularImage"
import ListItems from "../components/ListItems"
// import MiniTerminalLink from "../components/MiniTerminalLink"

const items = [
  { name: "about-me" },
  { name: "my-works" },
  { name: "experience" },
  { name: "writings" },
  { name: "skills" },
  { name: "contact" },
  { name: "resume" },
]

export default class IndexPage extends React.Component {
  render() {
    return (
      <>
        <SEO />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <div
            id="nav"
            style={{
              width: "100%",
              padding: "0",
              textAlign: "center",
              alignSelf: "center",
            }}
          >
            <a href="/">
              <CircularImage size="200" />
            </a>
            <p
              style={{
                textDecoration: "underline",
                textDecorationColor: "#e10000",
                fontSize: "2rem",
              }}
            >
              Krushi Raj Tula
            </p>
            <div
              style={{
                width: "100%",
              }}
            >
              <ListItems items={items} top={false} />
            </div>
          </div>
        </div>
      </>
    )
  }
}
