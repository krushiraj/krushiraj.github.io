import React from "react"
import { scroller } from "react-scroll"

import ListItem from "./ListItem"
import { colors } from "../utils/theme"

const navTopStyles = {
  listStyle: "none",
  textAlign: "right",
  margin: 0,
  padding: 0,
  whiteSpace: "nowrap",
  width: "100%",
  overflow: "auto",
  height: "60px",
  background: colors.background,
  transition: "all 0.3s linear",
}

const navCenterStyles = {
  listStyle: "none",
  margin: 0,
  padding: 0,
  width: "100%",
  height: "100%",
  background: colors.background,
  transition: "all 0.3s linear",
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
    const selected = !e.target.id.match("top")
      ? document.getElementById(e.target.id + "top")
      : e.target
    // const listItems = document.querySelectorAll("#navtop ul li a")
    // const target =
    //   self.underLine.current || document.getElementById("underline-span")
    if (this.props.top === false) {
      this.props.updateTop(true)
      this.setState({ selected })
    }
    // target.style.display = "initial"
    // if (!selected.classList.contains("active")) {
    //   for (let i = 0; i < listItems.length; i++) {
    //     if (listItems[i].classList.contains("active")) {
    //       listItems[i].classList.remove("active")
    //     }
    //   }
    else {
      const prevActive = document.querySelector("a.active")
      if (prevActive) prevActive.classList.remove("active")
      selected.classList.add("active")
      this.setState({ selected })
    }

    // const width = selected.getBoundingClientRect().width
    // const height = selected.getBoundingClientRect().height
    // const left = selected.getBoundingClientRect().left + window.pageXOffset
    // const top = selected.getBoundingClientRect().top + window.pageYOffset

    // target.style.width = `${width}px`
    // target.style.height = `${height}px`
    // target.style.left = `${left}px`
    // target.style.top = `${top + 2}px`
    // target.style.transform = "none"

    const viewportHeight =
      selected.name === "about-me"
        ? -window.innerHeight
        : (this.props.top ? 0 : -window.innerHeight) - 100

    scroller.scrollTo(selected.name, {
      duration: 500,
      offset: viewportHeight,
      smooth: "easeInOutQuart",
    })
  }

  // transitionEndHandler = (e, self = this) => {
  //   const {
  //     state: { selected },
  //   } = self
  //   const current =
  //     self.underLine.current || document.getElementById("underline-span")
  //   if (!selected.classList.contains("active")) selected.classList.add("active")
  //   selected.style.borderBottom = "2px solid #e10000"
  //   current.style.display = "none"
  //   console.log(selected)
  // }

  render() {
    const { top, items } = this.props
    return (
      <>
        <ul style={top ? navTopStyles : navCenterStyles}>
          {items.map((props, key) => (
            <ListItem
              {...props}
              top={top}
              key={key}
              clickHandler={this.clickHandler}
            />
          ))}
        </ul>
      </>
    )
  }
}
