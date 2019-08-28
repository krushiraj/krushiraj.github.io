const fs = require("fs");

const filename = "google68dbec46a3e3319d.html";

fs.writeFileSync(
  `portfolio/public/${filename}`,
  fs.readFileSync(filename).toString()
);
