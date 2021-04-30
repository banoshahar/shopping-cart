const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://shopping-bano.herokuapp.com',
      changeOrigin: true,
    })
  );
};