const { URL } = require("url")

function shouldTransform(string) {
  return isValid(string) !== null
}

function isValid(string) {
  if (!string.includes("github")) {
    return null
  }
  return string.match(/^github\//)
}

function getGithubHTML(string) {
  const matcher = string.match(/^github\/(.*?)\/(.*)$/)
  if (matcher) {
    return `<span class="gh-card-wrap"><span class="github-card" data-user="${
      matcher[1]
    }" data-repo="${matcher[2]}"><span class="loading"/></span></span>`
  }
  return "not matched"
}

module.exports = getGithubHTML
module.exports.shouldTransform = shouldTransform
