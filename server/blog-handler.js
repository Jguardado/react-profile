const { Blog } = require('./db');
const { getImageUrl } = require('./assets/util');

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

const blogEntries = async function () {
  return await Blog.findAll({
    where: {
      context: 'blog',
    },
  }).then((results) => {
    return results.map((result) => ({
      ...result.dataValues,
      image: getImageUrl(result.dataValues.image),
      miniImage: getImageUrl(result.miniImage)
    }));
  }).catch((err) => console.error(err))
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
