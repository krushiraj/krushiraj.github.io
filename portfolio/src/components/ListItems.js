import React from "react"
import ListItem from "./ListItem"

export default ({ items }) => {
  return (
    <ul
      style={{
        listStyle: "none",
        textAlign: "center",
        fontFamily: "Fira Code",
        padding: 0,
      }}
    >
      {items.map((props, index) => (
        <ListItem key={index} {...props} />
      ))}
    </ul>
  )
}
