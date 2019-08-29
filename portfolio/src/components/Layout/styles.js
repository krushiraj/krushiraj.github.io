import styled from "styled-components"
import { rhythm } from "../../utils/typography"

export const StyledLayout = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: 0 ${rhythm(1 / 2)};
`

export const StyledCrumb = styled.h2`
  a {
    box-shadow: none;
    text-decoration: none;
    color: inherit;
  }

  span {
    text-transform: capitalize;
    margin-right: ${rhythm(1 / 4)};
  }
`
