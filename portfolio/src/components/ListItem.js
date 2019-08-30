import React from "react"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

const StyledListItem = styled.li`
  display: inline-block;
  padding: 0 15px;

  a:after {
    bottom: -2px;
  }
`

export default ({ name, title, clickHandler, top }) => {
  return (
    <StyledListItem
      onClick={clickHandler}
      style={{ margin: top ? 0 : rhythm(0.5) }}
    >
      <a name={name} id={`${name}${top ? `top` : ``}`} href={`#${name}`}>
        {title}
      </a>
    </StyledListItem>
  )
}
