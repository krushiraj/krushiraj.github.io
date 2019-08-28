import React from "react"
import theme from "prism-react-renderer/themes/vsDark"
import Highlight, { defaultProps } from "prism-react-renderer"
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"
import styled from "styled-components"

const StyledLine = styled.div`
  &:hover {
    span {
      opacity: 1;
    }
  }
`

const StyledLineNumbers = styled.span`
  display: inline-block;
  width: 2em;
  user-select: none;
  opacity: 0.3;
`

const Code = ({ codeString, language, ...props }) => {
  if (props["react-live"]) {
    return (
      <LiveProvider code={codeString} noInline={true}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    )
  } else {
    return (
      <Highlight
        {...defaultProps}
        code={codeString}
        language={language}
        theme={{ ...theme, plain: { backgroundColor: "#282c36" } }}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={className}
            style={{
              padding: 10,
              overflowX: "auto",
              fontFamily: `"Fira Code", "Inconsolata", "monospace"`,
              ...style,
            }}
          >
            {tokens.map((line, i) => (
              <StyledLine key={i} {...getLineProps({ line, key: i })}>
                <StyledLineNumbers>{i + 1}</StyledLineNumbers>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </StyledLine>
            ))}
          </pre>
        )}
      </Highlight>
    )
  }
}

export default Code
