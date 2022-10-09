const fs = require("fs")
const puppeteer = require("puppeteer")

const imageFromHtml = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setViewport({ width: 672, height: 768 })
  await page.goto(`file://${__dirname}/index.html`)
  await page.evaluateHandle("document.fonts.ready")

  const file = await page.screenshot({ type: "png", omitBackground: true })

  fs.writeFileSync("business-card.png", file)

  await browser.close()
}

(async () => {
  await imageFromHtml();
})();
