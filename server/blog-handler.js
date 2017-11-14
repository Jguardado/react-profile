const { Blog } = require('./db');

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

// NOTE: converted this to a single DB call for all blog info
const blogEntries = (req, res) => {
  Blog.findAll({
    where: {
      context: 'blog',
    },
  }).then((results) => {
    res.send({ blogs: results });
  });
};

const blogEntry = (req, res) => {
  const entry = req.params.id.replace(/:/g, '');
  Blog.findOne({
    where: {
      entryNum: entry,
    },
  }).then((result) => {
    console.log('this is what comes back from db: ', result);
  });
};

//* *****************************************************************************

module.exports = {
  blogEntries,
  blogEntry,
  createBlogEntry,
};
