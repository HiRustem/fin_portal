/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  future: {
    v3_routeConvention: true,
  },
  server: '@remix-run/netlify',
  serverBuildPath: 'netlify/entry.server.js',
  appDirectory: 'app',
  publicPath: '/build/',
  assetsBuildDirectory: 'public/build',
};
