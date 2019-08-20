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
  overflow: "auto",
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
    console.log(self)
    const active = document.querySelector("#nav ul li.active")
    const target = self.underLine.current

    console.log(active, target)

    if (active) {
      const left = active.getBoundingClientRect().left + window.pageXOffset
      const top = active.getBoundingClientRect().top + window.pageYOffset

      target.style.left = `${left}px`
      target.style.top = `${top}px`
    }
  }

  clickHandler = (e, self = this) => {
    const selectedLi = e.target.parentNode
    const listItems = document.querySelectorAll("#nav ul li")
    const target = self.underLine.current
    target.style.display = "initial"

    if (!selectedLi.classList.contains("active")) {
      for (let i = 0; i < listItems.length; i++) {
        if (listItems[i].classList.contains("active")) {
          listItems[i].classList.remove("active")
          listItems[i].firstChild.style.borderBottom = "none"
        }
      }
      selectedLi.classList.add("active")
      this.setState({ selected: selectedLi })

      const width = selectedLi.getBoundingClientRect().width
      const height = selectedLi.getBoundingClientRect().height
      const left = selectedLi.getBoundingClientRect().left + window.pageXOffset
      const top = selectedLi.getBoundingClientRect().top + window.pageYOffset

      target.style.width = `${width}px`
      target.style.height = `${height}px`
      target.style.left = `${left}px`
      target.style.top = `${top}px`
      target.style.transform = "none"
    }
    console.log({
      target: e.target.parentNode,
      underline: self.underLine.current,
      lis: listItems,
    })
  }

  transitionEndHandler = (e, self = this) => {
    const { underLine: { current }, state: { selected: { firstChild } } } = self;
    console.log({ current, firstChild })
    firstChild.style.borderBottom = "2px solid #e10000";
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
          }}
          onTransitionEnd={this.transitionEndHandler}
        />
      </>
    )
  }
}
