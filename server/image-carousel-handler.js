const { Image } = require('./db');
const { getImageUrl } = require('./assets/util');

//* **********************************************************************************
// Image Carousel Handlers
//* **********************************************************************************

const images = async function () {
  return await Image.findAll({
    where: {
      context: 'carousel',
    },
  }).then((results) => {
    // TODO: to avoid having to deal with storing buffered images or creating
    // a separate image server, I am using the localling staored images files and setting
    // them in the handler
    return results.map((result) => ({
      ...result.dataValues,
      image: getImageUrl(result.dataValues.image),
      miniImage: getImageUrl(result.miniImage)
    }));
  }).catch((err) => console.error(err))
};

module.exports = {
  images,
};
