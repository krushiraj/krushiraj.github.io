import React from "react"

export default ({ size }) => {
  return (
    <img
      alt="Krushi Raj"
      src="/krushi.jpg"
      height={`${size}px`}
      width="auto"
      id="logo"
      style={{
        borderRadius: "50%",
      }}
    />
  )
}
