const fs = require("fs");
const path = require("path");

const directory = path.resolve(process.argv[2] || path.join(__dirname, "../portfolio/public"));
const required = ["index.html", "mini-terminal/index.html", ".nojekyll", "KrushiRajTula_Resume.pdf"];
const missing = required.filter((file) => !fs.existsSync(path.join(directory, file)));

if (missing.length) {
  console.error(`Deployment is incomplete: missing ${missing.join(", ")}. Run yarn build && yarn copy first.`);
  process.exit(1);
}

const terminal = path.join(directory, "mini-terminal");
const html = fs.readFileSync(path.join(terminal, "index.html"), "utf8");
const assets = [...html.matchAll(/(?:src|href)="([^"?#]+\.(?:js|css))(?:[?#][^"]*)?"/g)];

if (!assets.length) {
  console.error("Mini Terminal has no JavaScript or CSS assets.");
  process.exit(1);
}

for (const [, asset] of assets) {
  const file = asset.startsWith("/") ? path.join(directory, asset) : path.join(terminal, asset);
  if (!fs.existsSync(file)) {
    console.error(`Mini Terminal asset is missing: ${asset}`);
    process.exit(1);
  }
}

console.log("Deployment includes both apps, terminal assets, the resume PDF, and .nojekyll.");
