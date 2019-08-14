import React from "react"
import SEO from "../components/SEO"
import CircularImage from "../components/CircularImage"
import ListItems from "../components/ListItems"
import MiniTerminalLink from "../components/MiniTerminalLink"

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
            justifyContent: "center",
            alignContent: "center",
            height: "100vh",
            margin: 0,
            padding: 0,
          }}
        >
          <div
            style={{
              alignSelf: "center",
              textAlign: "center",
              color: "#fefefe",
            }}
          >
            <CircularImage height="200px" width="200px" />
            <p
              style={{
                fontWeight: "bold",
                fontSize: "2rem",
                fontFamily: "Fira Code",
                textDecoration: "underline",
                textDecorationColor: "#e10000",
              }}
            >
              Krushi Raj Tula
            </p>
            <ListItems items={items} />
            <MiniTerminalLink />
          </div>
        </div>
      </>
    )
  }
}
