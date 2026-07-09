import React, { useEffect, useState } from "react"
import darkTheme from "prism-react-renderer/themes/vsDark"
import lightTheme from "prism-react-renderer/themes/vsLight"
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

/**
 * Prism token colors are inline styles, so they can't follow the CSS
 * variables on their own. Watch the data-theme attribute the ThemeToggle
 * sets on <html> and switch the whole prism theme with it.
 */
const useSiteTheme = () => {
  const [mode, setMode] = useState("dark")

  useEffect(() => {
    const root = document.documentElement
    const read = () => setMode(root.getAttribute("data-theme") || "dark")
    read()
    const observer = new MutationObserver(read)
    observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] })
    return () => observer.disconnect()
  }, [])

  return mode
}

const Code = ({ codeString, language, ...props }) => {
  const mode = useSiteTheme()

  if (props["react-live"]) {
    return (
      <LiveProvider code={codeString} noInline={true}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    )
  }

  const base = mode === "light" ? lightTheme : darkTheme
  const background = mode === "light" ? "#F7F7FC" : "#14161F"

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={{
        ...base,
        // keep the theme's token colors; only swap the background
        plain: { ...base.plain, backgroundColor: background },
      }}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{
            padding: "1rem 1.15rem",
            overflowX: "auto",
            borderRadius: 12,
            border: "1px solid var(--line)",
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

export default Code
