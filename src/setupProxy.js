const createProxyMiddleware = require('http-proxy-middleware');

const { REACT_APP_WEATHER_API_URL } = process.env;

module.exports = (app) => {
  app.use(
    '/api',
    createProxyMiddleware({
      logLevel: 'debug',
      target: REACT_APP_WEATHER_API_URL,
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    })
  );
};
