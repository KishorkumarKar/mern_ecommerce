const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    ['/api','/api2'],
    createProxyMiddleware({
      target: 'http://localhost:1200',
      changeOrigin: true,
      pathRewrite: {
        '^/api ': '/aaaa', // rewrite path
      },
    })
  );
};