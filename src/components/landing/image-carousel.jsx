import React, { Component, PropTypes } from 'react';


class ImageCarousel extends Component {
  componentWillMount() {
    const { selectedImage, setImage, images, setInfoPanel } = this.props;

    if (!selectedImage) {
      setImage([images[0]]);
      setInfoPanel(0);
    }
  }

  render() {
    const { images, setImage, selectedImage, setInfoPanel } = this.props;
    return (
      <div>
        <div
          className="image_carousel_title"
        >
          Image Carousel
        </div>
        <div
          className="image_carousel_selected_container"
        >
          <img
            src={selectedImage}
            alt="Select to one from below"
            className="image_carousel_selected"
          />
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
  }
}


ImageCarousel.propTypes = {
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
