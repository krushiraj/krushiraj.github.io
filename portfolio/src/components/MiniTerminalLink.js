import React from "react"
import styles from "./listitem.module.css"

export default () => {
  return (
    <div
      style={{
        width: "100%",
        padding: "0",
        textAlign: "center",
        alignSelf: "center",
      }}
    >
      <p style={{ fontFamily: "Fira Code", fontSize: "2rem" }}>
        <a
          className={styles.alink}
          href="https://krushiraj.github.io/mini-terminal/"
        >
          Mini-Terminal
        </a>
      </p>
    </div>
  )
}
