import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"
import { colors, fonts } from "../../utils/theme"

/**
 * Runtime light/dark switch. The initial theme is set flash-free by the
 * inline script in gatsby-ssr.js (reads localStorage, else system pref),
 * so on mount we just read whatever is already on <html>.
 */
const readTheme = () => {
  if (typeof document === "undefined") return "dark"
  return document.documentElement.getAttribute("data-theme") || "dark"
}

const setDocumentTheme = theme => {
  document.documentElement.setAttribute("data-theme", theme)
  try {
    localStorage.setItem("theme", theme)
  } catch (e) {
    /* private mode / storage disabled — session-only is fine */
  }
}

const StyledToggle = styled.button`
  appearance: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  font-family: ${fonts.mono};
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${colors.muted};
  background: none;
  border: 1px solid ${colors.line};
  border-radius: 999px;
  padding: 0.5rem 1rem;
  transition: color 0.25s ease, border-color 0.25s ease, background 0.25s ease;

  svg {
    font-size: 0.85rem;
  }

  &:hover {
    color: ${colors.paperBright};
    border-color: ${colors.accent};
  }

  &:focus-visible {
    outline: 2px solid ${colors.accent};
    outline-offset: 2px;
  }
`

const ThemeToggle = ({ className }) => {
  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    setTheme(readTheme())
  }, [])

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark"
    setDocumentTheme(next)
    setTheme(next)
  }

  const isDark = theme === "dark"
  return (
    <StyledToggle
      type="button"
      className={className}
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
      {isDark ? "Light" : "Dark"}
    </StyledToggle>
  )
}

export default ThemeToggle
