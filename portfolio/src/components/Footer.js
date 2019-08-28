import React from "react"
import styled from "styled-components"
import { scale } from "../utils/typography"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faRss } from "@fortawesome/free-solid-svg-icons"
import {
  faTwitter,
  faGithub,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons"
import { rhythm } from "../utils/typography"
import { colors } from "../utils/theme"

const StyledFooter = styled.footer`
  text-align: center;
  color: rgba(255, 255, 255, 0.4);
  ${scale(-0.5)}
  a {
    color: rgba(255, 255, 255, 0.4);
  }
  .underline {
    position: relative;
    text-decoration: none;
    display: inline-block;
    padding: 0;

    &:after {
      background: none repeat scroll 0 0 transparent;
      bottom: 2px;
      content: "";
      display: block;
      height: 2px;
      left: 50%;
      position: absolute;
      background: ${colors.palered};
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
      width: 0;
    }

    &:hover:after {
      width: 100%;
      left: 0;
    }

    &:hover {
      color: rgba(255, 255, 255, 1);
    }

    &:active {
      color: #ffffff;
    }

    &:visited {
      color: #ffffff;
    }
  }
`

class FontAwesomeIconWrapper extends React.Component {
  constructor(props) {
    super(props)

    this.ref = React.createRef()
  }

  render() {
    const { href, title, icon } = this.props
    return (
      <a href={href} ref={this.ref} target="_blank" rel="noopener noreferrer">
        <span title={title} style={{ margin: `0 ${rhythm(0.25)}` }}>
          <FontAwesomeIcon icon={icon} size="lg" />
        </span>
      </a>
    )
  }
}

const footerItems = [
  {
    href: "mailto:krushiraj123+portfolio@gmail.com",
    icon: faEnvelope,
    title: "Mail",
  },
  {
    href: "https://twitter.com/krushiraj123",
    icon: faTwitter,
    title: "Twitter",
  },
  {
    href: "https://github.com/krushiraj",
    icon: faGithub,
    title: "GitHub",
  },
  {
    href: "https://stackoverflow.com/users/4813058/krushi-raj",
    icon: faStackOverflow,
    title: "StackOverflow",
  },
  {
    href: "https://krushiraj.github.io/rss.xml",
    icon: faRss,
    title: "RSS",
  },
]

const Footer = () => (
  <StyledFooter>
    <p>
      Copyright (c) 2019, Everyone - as this is an{" "}
      <a
        className="underline"
        href="https://github.com/krushiraj/krushiraj.github.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        open-source
      </a>{" "}
      site :P.
      <br />
      {footerItems.map((item, index) => (
        <FontAwesomeIconWrapper key={index} {...item} />
      ))}
    </p>
  </StyledFooter>
)

export default Footer
