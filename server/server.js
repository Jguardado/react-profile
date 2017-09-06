const express = require('express');
const path = require('path');
const blogHandlers = require('./blog-handler');
const imageHandlers = require('./image-carousel-handler');
const { Blog } = require('./db');

/* **************** DB Connection ************************* */
Blog.sync({ force: true })
  .then(() => Blog.create({
    entryNum: 1,
    blogEntry: 'this is another test of my John Hancock',
  }));


const app = express();

app.use(express.static('assets'));
// Server routes...
app.get('/hello', (req, res) => res.send({ hi: 'there' }));

/* ============== BLOG =============================== */
app.get('/blogs', blogHandlers.blogEntries);
app.get('/blogs:id', blogHandlers.blogEntry);
app.get('/blog-mini-images', blogHandlers.blogMiniImages);
app.get('/blog-images', blogHandlers.blogImages);
app.get('/blog-image:id', blogHandlers.blogImage);
app.get('/blog-summaries', blogHandlers.blogSummaries);
app.get('/blog-summary:id', blogHandlers.blogSummary);

/* =============== Image Carousel ====================== */

app.get('/images', imageHandlers.images);
app.get('/mini-images', imageHandlers.miniImages);
app.get('/panels', imageHandlers.panels);

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
