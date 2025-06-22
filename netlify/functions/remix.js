const { createRequestHandler } = require('@remix-run/netlify');

const build = require('../../netlify/entry.server');

exports.handler = createRequestHandler({
  build,
  mode: process.env.NODE_ENV,
});
