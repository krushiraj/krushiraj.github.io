const fs = require('fs');

fs.writeFileSync(
  '../portfolio/public/mini-terminal/index.html',
  fs
    .readFileSync('../portfolio/public/mini-terminal/index.html')
    .toString()
    .replace(/="\//g, '="')
);
