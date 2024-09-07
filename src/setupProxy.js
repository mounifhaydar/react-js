
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/comparator/compare/details',
    createProxyMiddleware({
      target: 'https://json-comparator-initial.onrender.com' ,
      changeOrigin: true,
    })
  );
};
