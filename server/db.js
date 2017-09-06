const sequelize = require('./server');
const Sequelize = require('sequelize');

const Blog = sequelize.define('blog', {
  entryNum: {
    type: Sequelize.INT,
  },
  blogEntry: {
    type: Sequelize.STRING,
  },
});

Blog.sync({ force: true }).then(() =>
  // Table created
  Blog.create({
    entryNum: 1,
    blogEntry: 'this is a test of my John Hancock',
  }),
);
