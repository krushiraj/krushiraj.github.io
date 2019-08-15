import React from "react"
import SEO from "../components/SEO"
import CircularImage from "../components/CircularImage"
import ListItem from "../components/ListItem"
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
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  width: "100%",
                  overflow: "auto",
                }}
              >
                {items.map((props, key) => (
                  <ListItem {...props} key={key} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </>
    )
  }
}
