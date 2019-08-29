import React from "react"
import styled from "styled-components"

import SEO from "../components/SEO"
import { StyledIndexDiv } from "../components/styles/index-page"

import { GlobalStyle } from "../utils/theme"
import { graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import {
  AboutMe,
  MyWorks,
  Experience,
  Writings,
  Skills,
  Contact,
  Resume,
  MiniTerminalLink,
  CircularImageTop,
  CircularImageLarge,
  ListItems,
} from "../components"

const items = [
  { name: "about-me", title: "About me", children: <AboutMe /> },
  { name: "my-works", title: "My Works", children: <MyWorks /> },
  { name: "experience", title: "Experience", children: <Experience /> },
  { name: "writings", title: "Writings", children: <Writings /> },
  { name: "skills", title: "Skills", children: <Skills /> },
  { name: "contact", title: "Contact", children: <Contact /> },
  { name: "resume", title: "Resume", children: <Resume /> },
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

const ImageWithName = ({ name, top }) => {
  const topNavStyles = {
    padding: "0 10px",
    width: rhythm(1),
    display: "inline-block",
    transition: "all 0.3s ease",
  }
  const fullScreenStyles = {
    cursor: "pointer",
    width: rhythm(11),
    margin: "0 auto",
    transition: "all 0.3s ease",
  }
  return (
    <div
      style={top ? topNavStyles : fullScreenStyles}
      onClick={() => (window.location = "/")}
    >
      {top ? <CircularImageTop /> : <CircularImageLarge />}
      <NameTag name={name} top={top} />
    </div>
  )
}

const NavigationItems = ({ title, top }) => {
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
    <div id="nav" style={top ? topNavStyles : fullScreenStyles}>
      <ImageWithName name={title} top={top} />
      <div style={top ? topNavInnerStyles : fullScreenInnerStyles}>
        <ListItems items={items} top={top} />
      </div>
    </div>
  )
}

const PageSection = styled.section`
  height: auto;
  width: "100%";
`

const PageSections = () => {
  return (
    <>
      {items.map((props, key) => (
        <PageSection key={key} {...props} />
      ))}
    </>
  )
}

class AnimatedIndexDiv extends React.Component {
  constructor(props) {
    super(props)
    this.state = { top: false }
  }

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
      position: "sticky",
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
      top: 0,
    }
    const top = this.state.top
    const title = this.props.title
    return (
      <React.Fragment>
        <StyledIndexDiv
          style={top ? styledIndexFullHidden : styledIndexFullVisible}
          onClick={() => this.setState({ top: !top })}
        >
          <NavigationItems title={title} top={false} />
        </StyledIndexDiv>
        <StyledIndexDiv
          style={top ? styledIndexTopVisible : styledIndexTopHidden}
          onClick={() => this.setState({ top: !top })}
        >
          <NavigationItems title={title} top={true} />
        </StyledIndexDiv>
      </React.Fragment>
    )
  }
}

export default props => (
  <React.Fragment>
    <GlobalStyle />
    <SEO />
    <AnimatedIndexDiv title={props.data.site.siteMetadata.title} />
    <MiniTerminalLink />
    <PageSections />
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
