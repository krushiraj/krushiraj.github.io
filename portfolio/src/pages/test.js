import React from "react"
import SEO from "../components/SEO"
import ListItem from "../components/ListItem"
import CircularImage from "../components/CircularImage"

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
        <div>
          <div
            id="nav"
            style={{
              width: "100%",
              height: "30px",
              padding: "10px 0",
            }}
          >
            <a href="/" style={{ padding: "0 10px" }}>
              <CircularImage size="30" />
            </a>
            <div
              style={{
                height: "30px",
                width: "calc(100% - 50px)",
                overflow: "hidden",
                float: "right",
              }}
            >
              <ul
                style={{
                  listStyle: "none",
                  textAlign: "right",
                  margin: 0,
                  padding: 0,
                  whiteSpace: "nowrap",
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
