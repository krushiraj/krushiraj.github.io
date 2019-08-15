import React from "react"
import ListItemStyles from "./listitem.module.css"

export default ({ name }) => {
  return (
    <li style={{ display: "inline-block", padding: "0 5px" }}>
      <a className={ListItemStyles.alink} href={`#${name}`}>
        {name}
      </a>
    </li>
  )
}
