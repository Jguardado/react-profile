const { Image } = require('./db');

//* **********************************************************************************
// Image Carousel Handlers
//* **********************************************************************************

const images = () => {
  Image.findAll({
    where: {
      context: 'carousel',
    },
  }).then((results) => {
    return { images: results };
  });
  // res.send({ images: imagesFromDB });
};
//
// const miniImages = (req, res) => {
//   res.send({ miniImages: minImagesFromDB });
// };
//
// const panels = (req, res) => {
//   res.send({ panels: panelsFromDB });
// };

module.exports = {
  images,
};
