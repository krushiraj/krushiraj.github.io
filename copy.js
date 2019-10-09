const fs = require("fs");

const filenames = [
  "google68dbec46a3e3319d.html",
  "resume/KrushiRajTula_ResumeWeb.pdf",
  "resume/KrushiRajTula_ResumePrint.pdf",
  "resume/KrushiRajTula_ResumeTex.pdf",
];

filenames.forEach((filename) => {
  console.log(`started copying file: ${__dirname}/${filename}`);
  const fileContents = fs.readFileSync(`${__dirname}/${filename}`)
  fs.writeFileSync(
    `portfolio/public/${filename.indexOf('/') !== -1 ? filename.split('/')[1] : filename}`,
    fileContents
  )
  console.log(`done copying file: ${filename}`);
})
