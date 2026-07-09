import React from "react"
import styled from "styled-components"
import { scale } from "../utils/typography"
import { contactItems } from "../utils/commons"
import FontAwesomeIconWrapper from "./FontAwesomeIconWrapper"

const StyledFooter = styled.footer`
  text-align: center;
  color: rgba(255, 255, 255, 0.4);
  ${scale(-0.5)}

  a {
    color: rgba(255, 255, 255, 0.4);
  }

  .underline {
    &:hover {
      color: rgba(255, 255, 255, 1);
    }

    &:active {
      color: #ffffff;
    }
  }
`

const Footer = () => (
  <StyledFooter>
    <p>
      © {new Date().getFullYear()} Krushi Raj Tula · Designed &amp; built by
      me, and it&rsquo;s{" "}
      <a
        className="underline"
        href="https://github.com/krushiraj/krushiraj.github.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        open-source
      </a>
      <br />
      {contactItems.map((item, index) => (
        <FontAwesomeIconWrapper key={index} {...item} />
      ))}
    </p>
  </StyledFooter>
)

export default Footer
