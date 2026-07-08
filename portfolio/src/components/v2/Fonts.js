import React from "react"
import Helmet from "react-helmet"

/**
 * Loads the redesign type stack from Google Fonts (css2 API):
 * Fraunces (display serif), Hanken Grotesk (body), IBM Plex Mono (labels).
 */
const FONTS_HREF =
  "https://fonts.googleapis.com/css2?" +
  "family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&" +
  "family=Hanken+Grotesk:wght@400;500;600;700&" +
  "family=IBM+Plex+Mono:wght@400;500&" +
  "display=swap"

const Fonts = () => (
  <Helmet>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link rel="stylesheet" href={FONTS_HREF} />
  </Helmet>
)

export default Fonts
