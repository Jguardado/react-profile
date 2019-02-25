const Sequelize = require('sequelize');
var fs = require('fs');

const sequelize = new Sequelize('react_profile', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

const Blog = sequelize.define('blog', {
  context: {
    type: Sequelize.STRING,
  },
  entryNum: {
    type: Sequelize.INTEGER,
  },
  blogEntry: {
    type: Sequelize.STRING,
  },
  blogSummary: {
    type: Sequelize.STRING,
  },
  image: {
    type: Sequelize.STRING,
  },
  miniImage: {
    type: Sequelize.STRING,
  },
});

const Image = sequelize.define('image', {
  context: {
    type: Sequelize.STRING,
  },
  entryNum: {
    type: Sequelize.INTEGER,
  },
  infoPanel: {
    type: Sequelize.STRING,
  },
  image: {
    type: Sequelize.STRING,
  },
  miniImage: {
    type: Sequelize.STRING,
  },
});

const SampleCode = sequelize.define('sampleCode', {
  context: {
    type: Sequelize.STRING,
  },
  entryNum: {
    type: Sequelize.INTEGER,
  },
  code: {
    type: Sequelize.STRING,
  },
  lang: {
    type: Sequelize.STRING,
  },
});


module.exports = {
  Blog,
  Image,
  SampleCode,
};

// require('./init-blogs');
// require('./init-carousel');
// require('./init-games');
