const express = require('express');
const path = require('path');
const blogHandlers = require('./blog-handler');

const app = express();

const testing = path.join(__dirname, 'assets');
console.log('\n\n\n testing: ', testing);
app.use(express.static('assets'));
// Server routes...
app.get('/hello', (req, res) => res.send({ hi: 'there' }));
app.get('/blogs', blogHandlers.blogEntries);
app.get('/blogs:id', blogHandlers.blogEntry);
app.get('/blog-images', blogHandlers.blogImages);
app.get('/blog-image:id', blogHandlers.blogImage);
app.get('/blog-summaries', blogHandlers.blogSummaries);
app.get('/blog-summary:id', blogHandlers.blogSummary);

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
