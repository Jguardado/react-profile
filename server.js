const express = require('express');
const path = require('path');

const app = express();

// Important, must define server routes before webpack config.
// otherwise will be confused with react-router routes and will fail.
app.get('/hell0', (req, res) => res.send({ hi: 'there' }));

if (process.env.NODE_ENV !== 'production') {
  const webpackMiddleware = require('webpack-dev-middleware'); // eslint-disable-line
  const webpack = require('webpack'); // eslint-disable-line
  const webpackConfig = require('./webpack.config.js'); // eslint-disable-line
  app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
  app.use(express.static('dist'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}


app.listen(process.env.PORT || 3050, () => { console.log('listening on 3050'); }); // eslint-disable-line
