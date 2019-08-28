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

const NameTag = ({ name }) => {
  return (
    <p
      style={{
        textDecoration: "underline",
        textDecorationColor: "#e10000",
        fontSize: "2rem",
      }}
    >
      {name}
    </p>
  )
}

const CircularImageWrapper = () => {
  return (
    <a href="/">
      <CircularImage size="200" />
    </a>
  )
}

const NavigationItems = () => {
  return (
    <div
      id="nav"
      style={{
        width: "100%",
        padding: "0",
        textAlign: "center",
        alignSelf: "center",
      }}
    >
      <CircularImageWrapper />
      <NameTag name="Krushi Raj Tula" />
      <div
        style={{
          width: "100%",
        }}
      >
        <ListItems items={items} top={false} />
        <MiniTerminalLink />
      </div>
    </div>
  )
}

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
          <NavigationItems />
        </div>
      </>
    )
  }
}
