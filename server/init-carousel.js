const { Image } = require('./db');

Image.sync({ force: true })
  .then(() => Image.create({
    context: 'carousel',
    entryNum: 1,
    infoPanel: 'This is SF I fucks with it, but not since the hipsters come through',
    image: 'src/assests/san-fran.jpeg',
    miniImage: 'src/assests/san-fran-sm.jpeg',
  }));

Image.sync({ force: true })
  .then(() => Image.create({
    context: 'carousel',
    entryNum: 2,
    infoPanel: 'This is LA, reminds me of the barrio',
    image: 'src/assests/la-street.jpeg',
    miniImage: 'src/assests/la-street-sm.jpeg',
  }));

Image.sync({ force: true })
  .then(() => Image.create({
    context: 'carousel',
    entryNum: 3,
    infoPanel: 'This is just a railroad track, dope pic',
    image: 'src/assests/railroad.jpeg',
    miniImage: 'src/assests/railroad-sm.jpeg',
  }));

Image.sync({ force: true })
  .then(() => Image.create({
    context: 'carousel',
    entryNum: 4,
    infoPanel: 'I dont know where this is, but I like it',
    image: 'src/assests/somewhere.jpeg',
    miniImage: 'src/assests/somewhere-sm.jpeg',
  }));
