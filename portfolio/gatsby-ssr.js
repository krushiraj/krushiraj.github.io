const React = require("react")

/**
 * Set the theme on <html> before the page paints, so there's no flash of
 * the wrong theme on load. Order of preference: saved choice, then the
 * visitor's system setting, then dark.
 */
const themeInit = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored
      || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
`

exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    React.createElement("script", {
      key: "theme-init",
      dangerouslySetInnerHTML: { __html: themeInit },
    }),
  ])
}
