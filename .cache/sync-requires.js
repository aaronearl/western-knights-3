const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/user/Desktop/Dev_Folder/western-knights-3/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/user/Desktop/Dev_Folder/western-knights-3/src/pages/index.js"))),
  "component---src-pages-success-js": hot(preferDefault(require("/Users/user/Desktop/Dev_Folder/western-knights-3/src/pages/success.js")))
}

