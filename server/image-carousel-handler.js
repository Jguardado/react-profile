/*
TODO: Build out initial state that is cuurently in src folder.
shape the node response to reflect that same patterns
*/

const imagesFromDB = [
  '/san-fran.jpeg',
  '/la-street.jpeg',
  '/railroad.jpeg',
  '/somewhere.jpeg',
];
const minImagesFromDB = [
  '/san-fran-sm.jpeg',
  '/la-street-sm.jpeg',
  'railroad-sm.jpeg',
  '/somewhere-sm.jpeg',
];

const panelsFromDB = [
  'This is SF I fucks with it, but not since the hipsters come through',
  'This is LA, reminds me of the barrio',
  'This is just a railroad track, dope pic',
  'I dont know where this is, but I like it',
];

//* **********************************************************************************
// Image Carousel Handlers
//* **********************************************************************************

const images = (req, res) => {
  res.send({ images: imagesFromDB });
};

const miniImages = (req, res) => {
  res.send({ miniImages: minImagesFromDB });
};

const panels = (req, res) => {
  res.send({ panels: panelsFromDB });
};

module.exports = {
  images,
  miniImages,
  panels,
};
