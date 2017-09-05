/*
TODO: Build out initial state that is cuurently in src folder.
shape the node response to reflect that same patterns
*/

const blogEntriesFromDB = [
  {
    blogEntry: 0, // eventually this will be assigned a unique ID (uuid)
    data: 'Plant based diets are the way to go. In the long run it will help everything. this is just a temporary blog',
  },
  {
    blogEntry: 1,
    data: 'My true workout plans are so legit. I can get you set up with all the correct powerlifting techniques',
  },
  {
    blogEntry: 2,
    data: 'being brown in the tech industry. Why it feesl weird, when you actually know the truth',
  },
];

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
const blogEntries = (req, res) => {
  res.send({ blogs: blogEntriesFromDB });
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
};
