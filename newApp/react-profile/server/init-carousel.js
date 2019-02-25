const { Image } = require('./db');
var fs = require('fs');

var sfImageLarge = fs.readFileSync(__dirname + '/assets/san-fran-sm.jpg')

Image.sync({ force: true })
  .then(() => Image.create({
    context: 'carousel',
    entryNum: 1,
    infoPanel: 'This is SF I fucks with it, but not since the hipsters come through',
    image: 'SF_PIC',
    miniImage: '/san-fran-sm.jpg',
  }))

Image.sync({ force: true })
  .then(() => Image.create({
    context: 'carousel',
    entryNum: 2,
    infoPanel: 'This is LA, reminds me of the barrio',
    image: 'LA_PIC',
    miniImage: '/la-street-sm.jpg',
  }));

Image.sync({ force: true })
  .then(() => Image.create({
    context: 'carousel',
    entryNum: 3,
    infoPanel: 'This is just a railroad track, dope pic',
    image: 'RAILROAD_PIC',
    miniImage: '/railroad-sm.jpg',
  }));

Image.sync({ force: true })
  .then(() => Image.create({
    context: 'carousel',
    entryNum: 4,
    infoPanel: 'I dont know where this is, but I like it',
    image: 'SOMEWHERE_PIC',
    miniImage: '/somewhere-sm.jpg',
  }));
