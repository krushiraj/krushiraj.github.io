import React from "react"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

const StyledListItem = styled.li`
  display: inline-block;
  padding: 0 15px;

  :hover {
    cursor: pointer;
  }

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
      {
        //eslint-disable-next-line
        <a name={name} id={`${name}${top ? `top` : ``}`}>
          {title}
        </a>
      }
    </StyledListItem>
  )
}
