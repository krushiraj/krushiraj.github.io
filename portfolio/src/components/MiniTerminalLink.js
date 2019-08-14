import React from "react"
import styles from "./listitem.module.css"

export default () => {
  return (
    <p style={{ fontFamily: "Fira Code", fontSize: "2rem" }}>
      <a
        className={styles.alink}
        href="https://krushiraj.github.io/mini-terminal/"
      >
        Mini-Terminal
      </a>
    </p>
  )
}
