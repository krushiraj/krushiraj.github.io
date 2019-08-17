import React from "react"
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

export default class ListItems extends React.Component {
  constructor(props) {
    super(props)
    this.underLine = React.createRef()
  }

  render() {
    const { top, items } = this.props
    return (
      <ul style={top ? navTopStyles : navCenterStyles}>
        {items.map((props, key) => (
          <ListItem
            {...props}
            key={key}
            clickHandler={(e, self = this) => {
              console.log({
                target: e.target.parentNode,
                underline: this.underLine.current,
              })
            }}
          />
        ))}
        <hr
          style={{
            margin: 0,
            background: "red",
            height: "0px",
            position: "relative",
            top: "-3px",
            border: "none",
            width: "100px",
          }}
          ref={this.underLine}
        />
      </ul>
    )
  }
}
