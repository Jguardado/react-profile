const { Image } = require('./db');

Image.sync({ force: true })
  .then(() => Image.create({
    context: 'carousel',
    entryNum: 1,
    infoPanel: 'This is SF I fucks with it, but not since the hipsters come through',
    image: '/san-fran.jpeg',
    miniImage: '/san-fran-sm.jpeg',
  }));

Image.sync({ force: true })
  .then(() => Image.create({
    context: 'carousel',
    entryNum: 2,
    infoPanel: 'This is LA, reminds me of the barrio',
    image: '/la-street.jpeg',
    miniImage: '/la-street-sm.jpeg',
  }));

Image.sync({ force: true })
  .then(() => Image.create({
    context: 'carousel',
    entryNum: 3,
    infoPanel: 'This is just a railroad track, dope pic',
    image: '/railroad.jpeg',
    miniImage: '/railroad-sm.jpeg',
  }));

Image.sync({ force: true })
  .then(() => Image.create({
    context: 'carousel',
    entryNum: 4,
    infoPanel: 'I dont know where this is, but I like it',
    image: '/somewhere.jpeg',
    miniImage: '/somewhere-sm.jpeg',
  }));
