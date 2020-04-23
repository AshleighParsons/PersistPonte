const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/ashleighparsons/Desktop/persistponte/src/pages/404.js"))),
  "component---src-pages-google-map-jsx": hot(preferDefault(require("/Users/ashleighparsons/Desktop/persistponte/src/pages/GoogleMap.jsx"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/ashleighparsons/Desktop/persistponte/src/pages/index.js"))),
  "component---src-pages-startgame-js": hot(preferDefault(require("/Users/ashleighparsons/Desktop/persistponte/src/pages/startgame.js")))
}

