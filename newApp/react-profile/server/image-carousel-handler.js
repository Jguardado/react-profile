const { Image } = require('./db');
const { getImageFile } = require('./assets/util');
console.log("what is getImageFile: ", getImageFile);

//* **********************************************************************************
// Image Carousel Handlers
//* **********************************************************************************

const images = async function () {
  return await Image.findAll({
    where: {
      context: 'carousel',
    },
  }).then((results) => {
    console.log('\n in handler?');
    // TODO: to avoid having to deal with storing buffered images or creating
    // a separate image server, I am using the localling staored images files and setting
    // them in the handler
    results.map((result) => result.image = getImageFile(result.image))
    return results;
  }).catch((err) => console.error(err))
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
