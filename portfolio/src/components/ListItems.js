import React from "react"
import NavUnderLine from "./NavUnderLine"
import ListItem from "./ListItem"

const navTopStyles = {
  listStyle: "none",
  textAlign: "right",
  margin: 0,
  padding: 0,
  whiteSpace: "nowrap",
  width: "100%",
  overflow: "auto",
}

const navCenterStyles = {
  listStyle: "none",
  margin: 0,
  padding: 0,
  width: "100%",
  overflow: "auto",
}

export default ({ items, top }) => {
  return (
    <ul style={top ? navTopStyles : navCenterStyles}>
      {items.map((props, key) => (
        <ListItem
          {...props}
          key={key}
          clickHandler={(e, self = this) => {
            debugger
            console.log({ target: e.target.parentNode, self })
          }}
        />
      ))}
      <NavUnderLine />
    </ul>
  )
}
