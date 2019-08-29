import React from "react"
import SEO from "../components/SEO"
// import ListItems from "../components/ListItems"
// import CircularImage from "../components/CircularImage"

// const items = [
//   { name: "about-me" },
//   { name: "my-works" },
//   { name: "experience" },
//   { name: "writings" },
//   { name: "skills" },
//   { name: "contact" },
//   { name: "resume" },
// ]

export default class IndexPage extends React.Component {
  render() {
    return (
      <>
        <SEO />
        {/* <div>
          <div id="nav">
            <a href="/">
              <CircularImage size="30" />
            </a>
            <div id="#nav">
              <ListItems items={items} top={true} />
            </div>
          </div>
        </div> */}
      </>
    )
  }
}
