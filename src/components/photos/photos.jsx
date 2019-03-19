import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InfoPanel from './info-panel.jsx';
import ImageCarousel from './image-carousel.jsx';
import Spinner from "../../spinner";

class Photos extends Component {
  componentWillMount() {
    const { fetchCarousel, setImage } = this.props;
    fetchCarousel();
    // fetchPanels();s
  }

  render() {
    if (this.props.images.length < 1) {
      return <Spinner />
    }

    const {
      images,
      setImage,
      selectedImage,
      currentInfoPanel,
      setInfoPanel,
      minImages,
    } = this.props;

    return (
      <div className="landing_container">
        <ImageCarousel
          minImages={minImages}
          images={images}
          setImage={setImage}
          selectedImage={selectedImage}
          setInfoPanel={setInfoPanel}
        />
        <InfoPanel images={images} currentInfoPanel={currentInfoPanel} />
      </div>
    );
  }
}

Photos.propTypes = {
  minImages: PropTypes.array,
  images: PropTypes.array,
  selectedImage: PropTypes.object,
  panels: PropTypes.array,
  currentInfoPanel: PropTypes.number,
  setImage: PropTypes.func,
  setInfoPanel: PropTypes.func,
};

Photos.defaultProps = {
  minImages: [],
  images: [],
  selectedImage: {},
  panels: [],
  currentInfoPanel: 0,
  setImage: () => {},
  setInfoPanel: () => {},
};

export default Photos;
