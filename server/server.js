const express = require('express');
const path = require('path');
const blogHandlers = require('./blog-handler');
const imageHandlers = require('./image-carousel-handler');
const sampleCodeHandlers = require('./games-handler');
require('./db');
/* **************** DB Connection ************************* */

const app = express();

app.use(express.static('assets'));
// Server routes...
app.get('/hello', (req, res) => res.send({ hi: 'there' }));

/* ============== BLOG =============================== */
app.get('/blogs', blogHandlers.blogEntries);
app.get('/blogs:id', blogHandlers.blogEntry);
app.get('/submit-blog', blogHandlers.createBlogEntry);

/* =============== Image Carousel ====================== */

app.get('/images', imageHandlers.images);
app.get('/sampleCode', sampleCodeHandlers.sampleCode);
// app.get('/mini-images', imageHandlers.miniImages);
// app.get('/panels', imageHandlers.panels);

/* ====================================================== */

if (process.env.NODE_ENV !== 'production') {
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpack = require('webpack');
  const webpackConfig = require('../webpack.config.js');
  app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
  app.use(express.static('dist'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}

app.listen(process.env.PORT || 3050, () => console.log('Listening'));
