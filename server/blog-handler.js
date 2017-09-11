const { Blog } = require('./db');
/*
TODO: Build out initial state that is cuurently in src folder.
shape the node response to reflect that same patterns
*/

const blogSummariesFromDB = [
  { blogEntry: 0, data: 'My road to a plant based diet' },
  { blogEntry: 1, data: 'Strength traing and how its changed my life' },
  { blogEntry: 2, data: 'Latino coder: Outsider looking in' },
];

const blogEntryImagesFromDB = [
  '/fruit.jpeg',
  '/training.jpg',
  '/coding_pic.jpeg',
];

const minBlogEntryImagesFromDB = [
  '/fruit-sm.jpeg',
  '/training-sm.jpeg',
  '/coding_pic-sm.jpeg',
];

//* **********************************************************************************
// Blog Handlers
//* **********************************************************************************

/* -----------------{ Blog Entries }----------------------- */
const createBlogEntry = (req, res) => {
  console.log('checking out blog request: ', req.body);
  // Blog.sync({ force: true })
  //   .then(() => Blog.create({
  //     entryNum: 1,
  //     blogEntry: req.body,
  //   }));
};

// TODO: must build out crud functiosn for DB. Blog entries are now stored. Must
// retrieve entries and populated front with correct content

const blogEntries = (req, res) => {
  const testing = Blog.findAll();
  console.log('what does find all give me: ', testing);
  res.send('working on it');
  // res.send({ blogs: blogEntriesFromDB });
};

const blogEntry = (req, res) => {
  const entry = req.params.id.replace(/:/g, '');
  res.send({
    blogEntry: entry,
    blog: blogEntriesFromDB[entry],
  });
};

/* ----------------{ Blog Images }------------------------ */
const blogMiniImages = (req, res) =>
  // make call to DB to retrieve blog entry
  // return reponse
  res.send({ blogMiniImages: minBlogEntryImagesFromDB });

const blogImages = (req, res) =>
  // make call to DB to retrieve blog entry
  // return reponse
  res.send({ blogImages: blogEntryImagesFromDB });

const blogImage = (req, res) => {
  // make call to DB to retrieve blog entry
  // return reponse
  const imageIndex = req.params.id.replace(/:/g, '');
  res.send({ images: blogEntryImagesFromDB[imageIndex] });
};

/* ---------------{ Blog summaries }------------------------*/
const blogSummaries = (req, res) =>
  res.send({ summaries: blogSummariesFromDB });

const blogSummary = (req, res) => {
  const summaryIndex = req.params.id.replace(/:/g, '');
  res.send({
    summaryIndex,
    summaries: blogSummariesFromDB[summaryIndex],
  });
};


//* *****************************************************************************
//* *****************************************************************************

module.exports = {
  blogEntries,
  blogImages,
  blogMiniImages,
  blogSummaries,
  blogEntry,
  blogImage,
  blogSummary,
  createBlogEntry,
};
