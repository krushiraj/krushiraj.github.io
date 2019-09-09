import React from "react"
import { rhythm } from "../utils/typography"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default class FontAwesomeIconWrapper extends React.Component {
  constructor(props) {
    super(props)

    this.ref = React.createRef()
  }

  render() {
    const { href, title, icon, size } = this.props
    return (
      <a
        className="underline"
        href={href}
        ref={this.ref}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span title={title} style={{ margin: `0 ${rhythm(0.25)}` }}>
          <FontAwesomeIcon icon={icon} size={size ? size : "lg"} />
        </span>
      </a>
    )
  }
}
