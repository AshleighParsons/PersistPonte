// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-google-map-jsx": () => import("./../src/pages/GoogleMap.jsx" /* webpackChunkName: "component---src-pages-google-map-jsx" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-startgame-js": () => import("./../src/pages/startgame.js" /* webpackChunkName: "component---src-pages-startgame-js" */)
}

