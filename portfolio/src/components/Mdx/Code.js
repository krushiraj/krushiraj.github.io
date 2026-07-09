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
        theme={{
          ...theme,
          // Keep vsDark's text color and only swap the background.
          // Replacing `plain` wholesale dropped the color, so plain tokens
          // inherited the page text color, which is dark-on-dark in light mode.
          plain: { ...theme.plain, backgroundColor: "#14161F" },
        }}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={className}
            style={{
              padding: "1rem 1.15rem",
              overflowX: "auto",
              borderRadius: 12,
              border: "1px solid rgba(228, 228, 238, 0.12)",
              fontFamily: `"IBM Plex Mono", "SFMono-Regular", Menlo, Consolas, monospace`,
              fontSize: "0.88rem",
              lineHeight: 1.65,
              margin: "0 0 1.25rem",
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
