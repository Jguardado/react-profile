import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import uuid from 'uuid';

class ImageCarousel extends Component {
  render() {
    const { images, setImage, selectedImage, setInfoPanel } = this.props;
    return (
      <div>
        <div
          className="image_carousel_selected_container"
        >
          <img
            src={selectedImage.image || images[0].image}
            alt="Select to one from below"
            className="image_carousel_selected"
          />
        </div>
        <div className="image_carousel_pic_box">
          {
            images.map((image, i) => (
              <Icon
                type="picture"
                key={uuid()}
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
  }
}


ImageCarousel.propTypes = {
  images: PropTypes.array,
  selectedImage: PropTypes.object,
  setImage: PropTypes.func,
  setInfoPanel: PropTypes.func,
};

ImageCarousel.defaultProps = {
  minImages: [],
  images: [],
  selectedImage: {},
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
