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

const blogEntries = (req, res) => {
  // make call to DB to retrieve blog entry
  // return reponse

  res.send({ blogs: blogEntriesFromDB });
};

const blogEntry = (req, res) => {
  // make call to DB to retrieve blog entry
  // return reponse
  const entry = req.params.id.replace(/:/g, '');
  res.send({
    blogEntry: entry,
    blog: blogEntriesFromDB[entry],
  });
};

const blogImages = (req, res) =>
  // make call to DB to retrieve blog entry
  // return reponse
  res.send({ blogImages: [] })
;

const blogImage = (req, res) =>
  // make call to DB to retrieve blog entry
  // return reponse
  res.send({ images: undefined })
;

const blogSummaries = (req, res) =>
  // make call to DB to retrieve blog entry
  // return reponse
  res.send({ blogSummaries: [] })
;

const blogSummary = (req, res) =>
  // make call to DB to retrieve blog entry
  // return reponse
  res.send({ summaries: '' })
;

module.exports = {
  blogEntries,
  blogImages,
  blogSummaries,
  blogEntry,
  blogImage,
  blogSummary,
};
