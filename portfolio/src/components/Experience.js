import React from "react"
import { Element } from "react-scroll"
import { Waypoint } from "react-waypoint"

export default ({ name }) => (
  <Waypoint
    onEnter={() =>
      document.getElementById(`${name}top`).classList.add("active")
    }
    onLeave={() =>
      document.getElementById(`${name}top`).classList.remove("active")
    }
  >
    <div>
      <Element name={name} id={name}>
        Hello there
      </Element>
    </div>
  </Waypoint>
)
