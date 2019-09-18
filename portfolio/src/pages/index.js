import React, { useState } from "react"
import styled from "styled-components"
import { Events, Element, scroller } from "react-scroll"
import { Waypoint } from "react-waypoint"

import SEO from "../components/SEO"
import { StyledIndexDiv } from "../components/styles/index-page"

import { GlobalStyle, colors } from "../utils/theme"
import { graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import {
  AboutMe,
  MyWorks,
  Experience,
  Writings,
  Skills,
  Contact,
  MiniTerminalLink,
  CircularImageTop,
  CircularImageLarge,
  ListItems,
} from "../components"

const items = [
  {
    name: "about-me",
    title: "About me",
    children: AboutMe,
    style: { height: `calc(100vh - ${rhythm(2)})` },
  },
  { name: "experience", title: "Experience", children: Experience },
  { name: "skills", title: "Skills", children: Skills },
  { name: "my-works", title: "My Works", children: MyWorks },
  { name: "writings", title: "Writings", children: Writings },
  {
    name: "contact",
    title: "Contact",
    children: Contact,
    style: { height: `calc(100vh - ${rhythm(2)})` },
  },
]

const NameTag = ({ name, top }) => {
  return (
    !top && (
      <p
        style={{
          textDecoration: "underline",
          textDecorationColor: "#e10000",
          fontSize: "2rem",
          width: "100%",
          transition: "all 0.3s ease",
        }}
      >
        {name}
      </p>
    )
  )
}

const ImageWithName = ({ name, top, updateTop }) => {
  const topNavStyles = {
    cursor: "pointer",
    padding: "0 10px",
    width: rhythm(1),
    display: "inline-block",
    transition: "all 0.3s ease",
  }
  const fullScreenStyles = {
    cursor: "pointer",
    width: rhythm(11),
    margin: "0 auto",
    borderRadius: "50%",
    transition: "all 0.3s ease",
  }
  return (
    <div
      style={top ? topNavStyles : fullScreenStyles}
      onClick={() => {
        scroller.scrollTo("home")
        updateTop(!top)
      }}
    >
      {top ? <CircularImageTop /> : <CircularImageLarge />}
      <NameTag name={name} top={top} />
    </div>
  )
}

const NavigationItems = ({ title, top, updateTop }) => {
  const fullScreenStyles = {
    width: "100%",
    padding: "0",
    textAlign: "center",
    alignSelf: "center",
    transition: "all 0.3s ease",
  }
  const topNavStyles = {
    width: "100%",
    height: "40px",
    padding: "10px 0",
    display: "inline",
    transition: "all 0.3s ease",
    background: colors.background,
  }

  const fullScreenInnerStyles = {
    width: "100%",
    transition: "all 0.3s ease",
  }

  const topNavInnerStyles = {
    height: "40px",
    width: "calc(100% - 50px)",
    overflow: "hidden",
    float: "right",
    display: "inline-block",
    transition: "all 0.3s ease",
  }
  return (
    <div
      id={`nav${top ? `top` : ``}`}
      style={top ? topNavStyles : fullScreenStyles}
    >
      <ImageWithName name={title} top={top} updateTop={updateTop} />
      <div style={top ? topNavInnerStyles : fullScreenInnerStyles}>
        <ListItems updateTop={updateTop} items={items} top={top} />
      </div>
    </div>
  )
}

const PageSection = styled.section`
  min-height: 100vh;
  width: 100%;
  padding: ${rhythm(2)};

  .section > div {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
  }
`

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // height: 100%;
  opacity: 0;
  transition: opacity 0.8s ease;
  transition-delay: 0.4s;
  margin: 0 auto;
  max-width: ${rhythm(24)};
  text-align: center;
`

const PageSections = ({ top }) => {
  const visibleStyles = {
      height: "auto",
      opacity: 1,
      position: "inherit",
      top: 0,
    },
    hiddenStyles = {
      height: 0,
      opacity: 0,
      top: "100vh",
      position: "absolute",
      overflow: "hidden",
    }

  const [showBar, setShowBar] = useState(false)

  return (
    <div
      style={{
        ...(top ? visibleStyles : hiddenStyles),
        width: "100%",
        transition: "all 0.3s ease",
      }}
    >
      {items.map((props, key) => {
        const { name, style } = props
        return (
          <React.Fragment key={key}>
            <PageSection key={`page-section-${key}`}>
              <Waypoint
                onEnter={() => {
                  document.getElementById(`${name}top`).classList.add("active")
                  const section = document.querySelector(`.section.${name}`)
                  section.style.opacity = 1
                  setShowBar(true)
                }}
                onLeave={() => {
                  document
                    .getElementById(`${name}top`)
                    .classList.remove("active")
                  const section = document.querySelector(`.section.${name}`)
                  section.style.opacity = 0
                  setShowBar(false)
                }}
              >
                <StyledContainer className={`section ${name}`} style={style}>
                  <Element name={name} id={name}>
                    <props.children showBar={showBar} />
                  </Element>
                </StyledContainer>
              </Waypoint>
            </PageSection>
            {name !== "contact" && (
              <div key={`div-${key}`} style={{ height: "50px" }} />
            )}
          </React.Fragment>
        )
      })}
    </div>
  )
}

const StyledIndexTopEntry = styled.div`
  position: absolute;
  bottom: 0;
  right: 50%;
  transform: translate(50%, 0);
  display: flex;
  width: auto;
  height: 50px;
  margin: 0 auto;
  text-align: center;
  overflow: hidden;
  z-index: 1;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
  }
`

const StyledAnimDownArrow = styled.span`
  --base: 0.3rem;

  cursor: pointer;

  .chevron {
    position: absolute;
    width: calc(var(--base) * 3.5);
    height: calc(var(--base) * 0.8);
    opacity: 0;
    transform: scale(0.3);
    animation: move-chevron 3s ease-out infinite;
  }

  .chevron:first-child {
    animation: move-chevron 3s ease-out 1s infinite;
  }

  .chevron:nth-child(2) {
    animation: move-chevron 3s ease-out 2s infinite;
  }

  .chevron:before,
  .chevron:after {
    content: "";
    position: absolute;
    top: -35px;
    height: 100%;
    width: 50%;
    background: #fff;
  }

  .chevron:before {
    left: 0;
    transform: skewY(30deg);
  }

  .chevron:after {
    right: 0;
    width: 50%;
    transform: skewY(-30deg);
  }

  @keyframes move-chevron {
    25% {
      opacity: 1;
    }
    33.3% {
      opacity: 1;
      transform: translateY(calc(var(--base) * 3.8));
    }
    66.6% {
      opacity: 1;
      transform: translateY(calc(var(--base) * 5.2));
    }
    100% {
      opacity: 0;
      transform: translateY(calc(var(--base) * 8)) scale(0.5);
    }
  }
`

const TopEntryButton = ({ updateTop }) => {
  return (
    <StyledIndexTopEntry onClick={() => updateTop(true)}>
      {" "}
      <StyledAnimDownArrow className="container">
        <div className="chevron"></div>
        <div className="chevron"></div>
        <div className="chevron"></div>
      </StyledAnimDownArrow>
      <span
        style={{
          cursor: "pointer",
        }}
      >
        {" "}
        Click here{" "}
      </span>
      <StyledAnimDownArrow className="container">
        <div className="chevron"></div>
        <div className="chevron"></div>
        <div className="chevron"></div>
      </StyledAnimDownArrow>{" "}
    </StyledIndexTopEntry>
  )
}

class AnimatedIndexDiv extends React.Component {
  constructor(props) {
    super(props)
    this.state = { top: false, selected: null }
  }

  componentDidMount() {
    Events.scrollEvent.register("begin", function() {
      console.log("begin", arguments)
    })

    Events.scrollEvent.register("end", function() {
      console.log("end", arguments)
    })
  }

  componentWillUnmount() {
    Events.scrollEvent.remove("begin")
    Events.scrollEvent.remove("end")
  }

  updateTop = top => this.setState({ top })

  render() {
    const styledIndexTopHidden = {
      height: "auto",
      width: "50%",
      margin: "0 25%",
      transition: "all 0.3s ease",
      position: "absolute",
      top: "50vh",
      opacity: 0,
    }

    const styledIndexTopVisible = {
      height: "auto",
      width: "100%",
      margin: "0",
      transition: "all 0.3s ease",
      position: "fixed",
      top: "0",
      opacity: 1,
    }

    const styledIndexFullVisible = {
      height: "100vh",
      width: "100%",
      margin: "0",
      transition: "all 0.3s ease, transform 0ms",
      opacity: 1,
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    }

    const styledIndexFullHidden = {
      height: "10%",
      width: "50%",
      margin: "0 25%",
      transition: "all 0.3s ease, transform 0ms",
      opacity: 0,
      position: "absolute",
      top: "-100vh",
    }

    const top = this.state.top
    const title = this.props.title
    return (
      <Element name="home">
        <StyledIndexDiv
          style={top ? styledIndexFullHidden : styledIndexFullVisible}
        >
          <NavigationItems
            updateTop={this.updateTop}
            title={title}
            top={false}
          />
        </StyledIndexDiv>
        <StyledIndexDiv
          style={top ? styledIndexTopVisible : styledIndexTopHidden}
        >
          <NavigationItems
            updateTop={this.updateTop}
            title={title}
            top={true}
          />
        </StyledIndexDiv>
        <PageSections top={top} />
        {!top && <TopEntryButton updateTop={this.updateTop} />}
      </Element>
    )
  }
}

export default props => (
  <React.Fragment>
    <GlobalStyle />
    <SEO />
    <AnimatedIndexDiv title={props.data.site.siteMetadata.title} />
    <MiniTerminalLink />
  </React.Fragment>
)

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
