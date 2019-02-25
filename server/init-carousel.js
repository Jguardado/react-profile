const { Image } = require('./db');
var fs = require('fs');

var sfImageLarge = fs.readFileSync(__dirname + '/assets/san-fran-sm.jpg')

Image.sync({ force: true })
  .then(() => Image.create({
    context: 'carousel',
    entryNum: 1,
    infoPanel: 'This is SF I fucks with it, but not since the hipsters come through',
    image: '/san-fran.jpg',
    miniImage: '/san-fran-sm.jpg',
  }))

Image.sync({ force: true })
  .then(() => Image.create({
    context: 'carousel',
    entryNum: 2,
    infoPanel: 'This is LA, reminds me of the barrio',
    image: '/la-street.jpg',
    miniImage: '/la-street-sm.jpg',
  }));

Image.sync({ force: true })
  .then(() => Image.create({
    context: 'carousel',
    entryNum: 3,
    infoPanel: 'This is just a railroad track, dope pic',
    image: '/railroad.jpg',
    miniImage: '/railroad-sm.jpg',
  }));

Image.sync({ force: true })
  .then(() => Image.create({
    context: 'carousel',
    entryNum: 4,
    infoPanel: 'I dont know where this is, but I like it',
    image: '/somewhere.jpg',
    miniImage: '/somewhere-sm.jpg',
  }));
