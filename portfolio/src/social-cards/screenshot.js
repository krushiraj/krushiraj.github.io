const fs = require("fs")
const { resolve } = require("path")
const { createHash } = require("crypto")

const getHtml = ({ title, date, description, banner }) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link
      href="https://fonts.googleapis.com/css?family=Inconsolata|Montserrat:400,700"
      rel="stylesheet"
    />
    <title>Document</title>
    <style>
      body {
        background: transparent;
        margin: 0;
        padding: 0;
      }
      .card {
        height: 100vh;
        width: 100vw;
        background: linear-gradient(
          135deg,
          rgba(10, 10, 10, 1) 0%,
          rgba(10, 10, 10, 1) 51%,
          rgba(55, 55, 55, 1) 51%,
          rgba(55, 55, 55, 1) 100%
        );
        color: #ffffff;
        border-radius: 6vw;
      }
      .card .wrapper {
        height: -webkit-fill-available;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 5%;
      }
      .card .wrapper h1 {
        font-family: "Fira Code", "Montserrat", sans-serif;
        font-size: 5vw;
      }
      .card .wrapper footer {
        text-align: right;
        font-family: "Inconsolata", monospace;
        font-size: 1.8vw;
      }
      .card .wrapper .rects {
        width: 100%;
      }
      .card .wrapper .rects .rect1 {
        height: 32px;
        width: 20%;
        font-family: "Fira Code", "Montserrat", sans-serif;
        color: #808080;
        font-size: 2vw;
        margin-bottom: 4%;
      }
      .card .wrapper .rects .rect2 {
        height: 32px;
        width: 100%;
        font-family: "Fira Code", "Montserrat", sans-serif;
        color: #b9b9b9;
        font-size: 2vw;
        margin-bottom: 4%;
      }
    </style>
  </head>
  <body>
    <div class="card">
      <div class="wrapper">
        <h1 style="margin: 0">${title.slice(0, 54) + `...`}</h1>
        <div class="rects">
          <div class="rect1">${date}</div>
          <div class="rect2">${description.slice(0, 269) + `...`}</div>
        </div>
        <footer>krushiraj.github.io</footer>
      </div>
    </div>
  </body>
</html>
`

const writeCachedFile = async (CACHE_DIR, key, contents, extension) => {
  // I'm using the title as the key for the hash, because it's the only
  // thing which impacts the final image. If you were to have something
  // more elaborate, you should just use the HTML as the hash instead.
  const fileName =
    createHash("md5")
      .update(key)
      .digest("hex") +
    "." +
    extension
  const absolutePath = resolve(CACHE_DIR, fileName)
  fs.writeFileSync(absolutePath, contents)
  return absolutePath
}

const imageFromHtml = async (CACHE_DIR, browser, data) => {
  const page = await browser.newPage()
  page._emulationManager._client.send(
    "Emulation.setDefaultBackgroundColorOverride",
    {
      color: { r: 0, g: 0, b: 0, a: 0 },
    }
  )
  await page.setViewport({ width: 2400, height: 1254 })
  await page.setContent(getHtml(data))
  await page.evaluateHandle("document.fonts.ready")

  const file = await page.screenshot({ type: "png" })

  return writeCachedFile(CACHE_DIR, data.title, file, "png")
}

const postToImage = async (CACHE_DIR, browser, post) => {
  const data = post.frontmatter
  return imageFromHtml(CACHE_DIR, browser, data)
}

module.exports = postToImage
