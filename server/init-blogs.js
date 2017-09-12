console.log('\n\n\n In Init blogs');
const { Blog } = require('./db');

Blog.sync({ force: true })
  .then(() => Blog.create({
    context: 'blog',
    entryNum: 1,
    blogEntry: 'Plant based diets are the way to go. In the long run it will help everything. this is just a temporary blog',
    blogSummary: 'My road to a plant based diet',
    image: '/fruit.jpeg',
    miniImage: '/fruit-sm.jpeg',
  }));

Blog.sync({ force: true })
  .then(() => Blog.create({
    context: 'blog',
    entryNum: 2,
    blogEntry: 'My true workout plans are so legit. I can get you set up with all the correct powerlifting techniques',
    blogSummary: 'Strength traing and how its changed my life',
    image: '/training.jpg',
    miniImage: '/training-sm.jpeg',
  }));

Blog.sync({ force: true })
  .then(() => Blog.create({
    context: 'blog',
    entryNum: 3,
    blogEntry: 'being brown in the tech industry. Why it feesl weird, when you actually know the truth',
    blogSummary: 'Latino coder: Outsider looking in',
    image: '/coding_pic.jpeg',
    miniImage: '/coding_pic-sm.jpeg',
  }));
