console.log('\n\n\n In Init blogs');
const { Blog } = require('./db');

console.log('what is blog: ', Blog);

Blog.sync({ force: true })
  .then(() => Blog.create({
    entryNum: 0,
    blogEntry: 'Plant based diets are the way to go. In the long run it will help everything. this is just a temporary blog',
  }));

Blog.sync({ force: true })
  .then(() => Blog.create({
    entryNum: 1,
    blogEntry: 'My true workout plans are so legit. I can get you set up with all the correct powerlifting techniques',
  }));

Blog.sync({ force: true })
  .then(() => Blog.create({
    entryNum: 2,
    blogEntry: 'being brown in the tech industry. Why it feesl weird, when you actually know the truth',
  }));
