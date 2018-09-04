const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const blogHandlers = require('./blog-handler');
const imageHandlers = require('./image-carousel-handler');
const sampleCodeHandlers = require('./games-handler');

require('./db');
/* **************** DB Connection ************************* */

const app = express();

app.use(express.static('assets'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Server routes...
app.get('/api/hello', (req, res) => res.send({ hi: 'there' }));

/* ============== BLOG =============================== */
app.get('/api/blogs', blogHandlers.blogEntries);
app.get('/api/blogs:id', blogHandlers.blogEntry);
app.get('/api/submit-blog', blogHandlers.createBlogEntry);

/* =============== Image Carousel ====================== */

app.get('/api/images', imageHandlers.images);
app.get('/api/sampleCode', sampleCodeHandlers.sampleCode);

/* ================ Demo Stuff ========================== */

app.post('/api/rubyDemo', (req, res) => {
  console.log('\n\n\n what is req payload: ', Object.keys(req));
  if (res) {
    console.log('\n\n there is a res: ', Object.keys(res));
    res.send('good to go');
  }
});

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

app.listen(process.env.PORT || 3000, () => console.log('Listening'));
