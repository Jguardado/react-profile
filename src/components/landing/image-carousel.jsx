import React, { PropTypes, Component } from 'react';
import { Pagination } from 'antd';
import uuid from 'uuid';

class ImageCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 3,
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(page) {
    console.log(page);
    this.setState({
      current: page,
    });
  }

  render() {
    const { images, setImage, selectedImage, setInfoPanel } = this.props;
    console.log('props in Carousel: ', images.length);
    return (
      <div>
        <div className="image_carousel_pic_box">
          {
            images.map((image, i) => (
              <li
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
        <Pagination current={this.state.current} onChange={this.onChange} total={50} />
        <div
          className="image_carousel_selected_container"
        >
          <img
            src={selectedImage.image}
            alt="Select to one from below"
            className="image_carousel_selected"
          />
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
