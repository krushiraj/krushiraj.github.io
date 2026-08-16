const fs = require("fs")
const { resolve } = require("path")
const { createHash } = require("crypto")
const readingTime = require("reading-time")

/**
 * Social card ("Periwinkle Ink").
 *
 * Mirrors the article header in BlogPostTemplate so a card and the page it
 * links to read as the same design: mono accent eyebrow, Fraunces display
 * title, muted description, hairline rule, wordmark + tags.
 *
 * Tokens are hard-coded from src/utils/theme.js dark theme. They cannot be
 * read as CSS custom properties here because this page is rendered
 * standalone in Puppeteer, outside the app.
 */
const T = {
  ink: "#0C0D11",
  line: "rgba(226,227,245,0.13)",
  paper: "#E4E4EE",
  paperBright: "#F4F4FA",
  muted: "#9B9AB0",
  accent: "#8E97F2",
}

const FONTS =
  "https://fonts.googleapis.com/css2?" +
  "family=Fraunces:ital,opsz,wght@0,9..144,300..700&" +
  "family=Hanken+Grotesk:wght@400;500;600;700&" +
  "family=IBM+Plex+Mono:wght@400;500&display=swap"

const MONTHS = [
  "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
  "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER",
]

/** "2026-08-15" -> "AUGUST 15, 2026". Falls back to the raw string. */
const formatDate = raw => {
  if (!raw) return ""
  const d = new Date(raw)
  if (isNaN(d.getTime())) return String(raw).toUpperCase()
  return `${MONTHS[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`
}

/** Titles and descriptions are author-supplied, so they must be escaped. */
const esc = s =>
  String(s == null ? "" : s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")

const getHtml = ({ type, date, readMins, title, description, tags }) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="${FONTS}" rel="stylesheet" />
    <style>
      * { box-sizing: border-box; margin: 0; padding: 0; }
      html, body { overflow: hidden; }
      body {
        width: 1200px;
        height: 630px;
        /* Opaque on purpose: transparent corners get filled with white or
           black by Slack/Twitter depending on the viewer's theme. */
        background: ${T.ink};
        font-family: "Hanken Grotesk", "Helvetica Neue", Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
      }
      .mono {
        font-family: "IBM Plex Mono", Menlo, Consolas, monospace;
        text-transform: uppercase;
        letter-spacing: 0.18em;
      }
      .serif { font-family: "Fraunces", Georgia, serif; }
      /* Truncation is CSS line-clamp, which only ellipsizes when the text
         actually overflows, and never cuts mid-word the way slice() did. */
      .clamp { display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden; }

      .wrap {
        width: 100%; height: 100%;
        padding: 70px 76px;
        display: flex; flex-direction: column;
        position: relative;
      }
      /* Centred in the space above the footer so short titles don't leave a
         dead band. Long titles fill it and land in the same place either way. */
      .head {
        flex: 1; display: flex; flex-direction: column; justify-content: center;
      }
      .glow {
        position: absolute; top: -280px; right: -220px;
        width: 760px; height: 760px; border-radius: 50%;
        background: radial-gradient(circle,
          rgba(142,151,242,0.20) 0%, rgba(142,151,242,0) 68%);
      }
      .eyebrow {
        font-size: 19px; font-weight: 500; color: ${T.accent}; position: relative;
      }
      h1 {
        /* line-height has to clear Fraunces' descenders: the line-clamp box
           clips at the last line box, so a tight leading shears the tails off
           g, j and p on the final line. */
        font-size: 70px; font-weight: 600; line-height: 1.16;
        letter-spacing: -0.022em; color: ${T.paperBright};
        -webkit-line-clamp: 3; margin-top: 26px; padding-bottom: 6px;
        position: relative;
      }
      .desc {
        font-size: 26px; line-height: 1.5; color: ${T.muted};
        -webkit-line-clamp: 2; margin-top: 26px; max-width: 1000px;
        position: relative;
      }
      .foot {
        border-top: 1px solid ${T.line}; padding-top: 26px;
        display: flex; align-items: center; justify-content: space-between;
        position: relative;
      }
      .site { font-size: 17px; font-weight: 500; color: ${T.paper}; }
      .tags { display: flex; gap: 12px; flex: 0 0 auto; }
      .tag {
        font-size: 15px; padding: 8px 18px;
        border: 1px solid ${T.line}; border-radius: 999px; color: ${T.muted};
      }
    </style>
  </head>
  <body>
    <div class="wrap">
      <div class="glow"></div>
      <div class="head">
        <div class="eyebrow mono">${[
          esc(type),
          esc(date),
          readMins ? `${readMins} min read` : "",
        ]
          .filter(Boolean)
          .join(" &nbsp;·&nbsp; ")}</div>
        <h1 class="serif clamp">${esc(title)}</h1>
        ${description ? `<p class="desc clamp">${esc(description)}</p>` : ""}
      </div>
      <div class="foot">
        <div class="site mono">Krushi Raj Tula</div>
        <div class="tags">${tags
          .map(t => `<span class="tag mono">${esc(t)}</span>`)
          .join("")}</div>
      </div>
    </div>
  </body>
</html>
`

const writeCachedFile = async (CACHE_DIR, key, contents, extension) => {
  // Keyed on the full HTML, not just the title: date, description, tags and
  // read time all affect the image now, so a title-only key would serve a
  // stale card whenever any of those changed.
  const fileName = createHash("md5").update(key).digest("hex") + "." + extension
  const absolutePath = resolve(CACHE_DIR, fileName)
  fs.writeFileSync(absolutePath, contents)
  return absolutePath
}

const renderOnce = async (browser, html) => {
  const page = await browser.newPage()
  try {
    await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 2 })
    // "load" rather than "networkidle0": during a full build every post races
    // for the same webfonts, and waiting for an idle network tips some pages
    // past the timeout. document.fonts.ready is the signal that matters.
    await page.setContent(html, { waitUntil: "load", timeout: 60000 })
    await page.evaluateHandle("document.fonts.ready")
    return await page.screenshot({
      type: "png",
      clip: { x: 0, y: 0, width: 1200, height: 630 },
    })
  } finally {
    await page.close().catch(() => {})
  }
}

const imageFromHtml = async (CACHE_DIR, browser, data) => {
  const html = getHtml(data)

  let file
  try {
    file = await renderOnce(browser, html)
  } catch (e) {
    // One retry: these failures are contention, not bad input.
    file = await renderOnce(browser, html)
  }

  return writeCachedFile(CACHE_DIR, html, file, "png")
}

const postToImage = async (CACHE_DIR, browser, post) => {
  const fm = post.frontmatter || {}
  const stats = readingTime(String(post.rawBody || "").replace(/^---.*---/, ""))

  return imageFromHtml(CACHE_DIR, browser, {
    type: fm.type || "post",
    date: formatDate(fm.date),
    readMins: Math.max(1, Math.ceil(stats.minutes)),
    title: fm.title || "",
    description: fm.description || "",
    tags: String(fm.tags || "")
      .split(",")
      .map(t => t.trim())
      .filter(Boolean)
      .slice(0, 3),
  })
}

module.exports = postToImage
