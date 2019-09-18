const fs = require("fs");

const filenames = [
  "google68dbec46a3e3319d.html",
  "KrushiRajTula_ResumeWeb.pdf",
  "KrushiRajTula_ResumePrint.pdf",
];

filenames.forEach((filename) => {
  console.log(`started copying file: ${filename}`);
  fs.writeFileSync(
    `portfolio/public/${filename}`,
    fs.readFileSync(filename)
  )
  console.log(`done copying file: ${filename}`);
})
