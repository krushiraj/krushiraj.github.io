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
  height: "60px"
}

const navCenterStyles = {
  listStyle: "none",
  margin: 0,
  padding: 0,
  width: "100%",
  height: "100%"
}

export default class ListItems extends React.Component {
  constructor(props) {
    super(props)
    this.underLine = React.createRef()
    this.state = { selected: undefined }
  }

  componentDidMount() {
    window.addEventListener("resize", this.resizeFunc)
  }

  resizeFunc = (e, self = this) => {
    const active = document.querySelector("#nav ul li.active")
    const target = self.underLine.current


    if (active) {
      const left = active.getBoundingClientRect().left + window.pageXOffset
      const top = active.getBoundingClientRect().top + window.pageYOffset

      target.style.left = `${left}px`
      target.style.top = `${top}px`
    }
  }

  clickHandler = (e, self = this) => {
    const selected = e.target
    const listItems = document.querySelectorAll("#nav ul li a")
    const target = self.underLine.current
    target.style.display = "initial"

    if (!selected.classList.contains("active")) {
      for (let i = 0; i < listItems.length; i++) {
        if (listItems[i].classList.contains("active")) {
          listItems[i].classList.remove("active")
          listItems[i].style.borderBottom = "none"
        }
      }
      selected.classList.add("active")
      this.setState({ selected })

      const width = selected.getBoundingClientRect().width
      const height = selected.getBoundingClientRect().height
      const left = selected.getBoundingClientRect().left + window.pageXOffset
      const top = selected.getBoundingClientRect().top + window.pageYOffset

      target.style.width = `${width}px`
      target.style.height = `${height}px`
      target.style.left = `${left}px`
      target.style.top = `${top}px`
      target.style.transform = "none"
    }
  }

  transitionEndHandler = (e, self = this) => {
    const { underLine: { current }, state: { selected } } = self;
    console.log({ current, selected })
    selected.style.borderBottom = "2px solid #e10000";
    current.style.display = "none";
  }

  render() {
    const { top, items } = this.props
    return (
      <>
        <ul style={top ? navTopStyles : navCenterStyles}>
          {items.map((props, key) => (
            <ListItem {...props} key={key} clickHandler={this.clickHandler} />
          ))}
        </ul>
        <span
          ref={this.underLine}
          style={{
            position: "absolute",
            borderBottom: "2px solid #e10000",
            transition: "all 0.3s ease-in-out",
            margin: 0,
            padding: 0,
            zIndex: -1
          }}
          onTransitionEnd={this.transitionEndHandler}
        />
      </>
    )
  }
}
