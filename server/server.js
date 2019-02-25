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
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const port = process.env.PORT || 5000;


// Server routes...
app.get('/api/hello', (req, res) => res.send({ hi: 'there' }));

/* ============== BLOG =============================== */
app.get('/api/blogs', blogHandlers.blogEntries);
app.get('/api/blogs:id', blogHandlers.blogEntry);
app.get('/api/submit-blog', blogHandlers.createBlogEntry);

/* =============== Image Carousel ====================== */

app.get('/api/images', async function (req, res) {
  let images;
  try {
    images = await imageHandlers.images();
  } catch (err) {
    res.status(500).json({error: err.toString() })
  }
  res.json({ images });
});

app.get('/api/sampleCode', async function (req, res) {
  let sampleCode;
  try {
    sampleCode = await sampleCodeHandlers.sampleCode()
  } catch (err) {
    res.status(500).json({error: err.toString() })
  }
  res.json({ sampleCode });
});

/* ================ Demo Stuff ========================== */

app.post('/api/rubyDemo', (req, res) => {
  console.log('\n\n\n what is req payload: ', Object.keys(req));
  if (res) {
    console.log('\n\n there is a res: ', Object.keys(res));
    res.send('good to go');
  }
});

/* =============== Statis Images ============================ */

app.use(express.static(path.join(__dirname, 'assets')))


/* ====================================================== */

app.use(express.static(path.join(__dirname, 'public', 'index.html')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => console.log('Listening on port : ', port));
