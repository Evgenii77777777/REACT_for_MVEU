const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:4001/api',
      changeOrigin: true,
    })
  );
  app.use(
    '/statics',
    createProxyMiddleware({
      target: 'http://localhost:4001/',
      changeOrigin: true,
    })
  );
};
