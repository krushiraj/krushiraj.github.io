import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { colors, fonts } from "../../utils/theme"

export const media = {
  tablet: "@media (max-width: 1024px)",
  phone: "@media (max-width: 640px)",
}

/** Mono eyebrow label, e.g. "01 / EXPERIENCE" */
export const Label = styled.span`
  font-family: ${fonts.mono};
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${colors.accent};
`

const StyledSection = styled.section`
  padding: 5.5rem 0 1rem;
  scroll-margin-top: 2rem;

  ${media.tablet} {
    padding-top: 4rem;
  }
`

const SectionHead = styled.header`
  display: flex;
  align-items: baseline;
  gap: 1.25rem;
  margin-bottom: 2.25rem;

  h2 {
    font-family: ${fonts.display};
    font-size: clamp(1.6rem, 3vw, 2.2rem);
    font-weight: 550;
    letter-spacing: -0.02em;
    margin: 0;
    color: ${colors.paperBright};
  }

  .rule {
    flex: 1;
    height: 1px;
    background: ${colors.line};
    transform-origin: left center;
  }
`

/**
 * Reveal-on-scroll wrapper. Children fade/rise in the first time they
 * enter the viewport. Falls back to always-visible (SSR, no IO support,
 * prefers-reduced-motion).
 */
const RevealDiv = styled.div`
  @media (prefers-reduced-motion: no-preference) {
    opacity: ${({ $shown }) => ($shown ? 1 : 0)};
    transform: translateY(${({ $shown }) => ($shown ? "0" : "18px")});
    transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.2, 0.6, 0.2, 1);
    transition-delay: ${({ $delay }) => $delay || 0}ms;
  }
`

export const Reveal = ({ children, delay = 0, ...rest }) => {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    // Already in view on mount (e.g. above-the-fold sections): reveal now.
    // IntersectionObserver's initial callback can be missed if hydration
    // re-mounts the node, so check the rect directly too.
    const inView = () => {
      const rect = node.getBoundingClientRect()
      const vh = window.innerHeight || document.documentElement.clientHeight
      return rect.top < vh * 0.9 && rect.bottom > 0
    }
    if (inView()) {
      setShown(true)
      return undefined
    }

    if (typeof IntersectionObserver === "undefined") {
      setShown(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          setShown(true)
          observer.disconnect()
        }
      },
      { rootMargin: "0px 0px -10% 0px" }
    )
    observer.observe(node)

    // Safety net: never leave content permanently hidden if the observer
    // never fires for any reason.
    const fallback = setTimeout(() => setShown(true), 1500)

    return () => {
      observer.disconnect()
      clearTimeout(fallback)
    }
  }, [])

  return (
    <RevealDiv ref={ref} $shown={shown} $delay={delay} {...rest}>
      {children}
    </RevealDiv>
  )
}

/** Numbered editorial section shell. */
export const Section = ({ id, index, title, children }) => (
  <StyledSection id={id}>
    <Reveal>
      <SectionHead>
        <Label>
          {index} / {title}
        </Label>
        <span className="rule" />
      </SectionHead>
    </Reveal>
    {children}
  </StyledSection>
)

/**
 * Smooth-scroll a section id into view using the browser-native API,
 * respecting prefers-reduced-motion (jumps instantly).
 */
export const smoothScrollToId = id => {
  const target = document.getElementById(id)
  if (!target) return

  const reduceMotion =
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches

  target.scrollIntoView({
    behavior: reduceMotion ? "auto" : "smooth",
    block: "start",
  })
}

/** Small mono meta text (dates, durations, types). */
export const Meta = styled.span`
  font-family: ${fonts.mono};
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${colors.muted};
`
