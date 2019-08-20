import React from "react"
import SEO from "../components/SEO"
import ListItems from "../components/ListItems"
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
              height: "40px",
              padding: "10px 0",
            }}
          >
            <a href="/" style={{ padding: "0 10px" }}>
              <CircularImage size="30" />
            </a>
            <div
              id="#nav"
              style={{
                height: "40px",
                width: "calc(100% - 50px)",
                overflow: "hidden",
                float: "right",
              }}
            >
              <ListItems items={items} top={true} />
            </div>
          </div>
        </div>
      </>
    )
  }
}
