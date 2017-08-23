import React, { PropTypes } from 'react';


const ImageCarousel = ({ images, setImage, selectedImage, setInfoPanel, minImages }) => (
  <div>
    <div
      className="image_carousel_title"
    >
      Image Carousel
    </div>
    <div
      className="image_carousel_selected_container"
    >
      <img src={selectedImage} alt="Select to one from below" className="image_carousel_selected" />
    </div>
    <div className="image_carousel_pic_box">
      {
        images.map((image, i) => (
          <li
            className="carousel_dots"
            onClick={() => {
              setImage(image);
              setInfoPanel(i);
            }}
          />
        ))
      }
    </div>
  </div>
);


ImageCarousel.propTypes = {
  minImages: PropTypes.array,
  images: PropTypes.array,
  selectedImage: PropTypes.string,
  setImage: PropTypes.func,
  setInfoPanel: PropTypes.func,
};

ImageCarousel.defaultProps = {
  minImages: [],
  images: [],
  selectedImage: [],
  setImage: () => {},
  setInfoPanel: () => {},
};

export default ImageCarousel;

// <div
//   className="image_carousel_image_button"
//   onClick={() => {
//     setImage(image);
//     setInfoPanel(i);
//   }}
// >
//   <img src={minImages[i]} alt="Nothing to Select" className="image_carousel_min_pic" />
// </div>
