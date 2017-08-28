import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import InfoPanel from './info-panel.jsx';
import ImageCarousel from './image-carousel.jsx';

import { changeImage } from '../../actions/carousel-actions';
import { changeInfoPanelIndex } from '../../actions/info-panel-actions';

const Landing = ({
  images,
  setImage,
  selectedImage,
  panels,
  currentInfoPanel,
  setInfoPanel,
  minImages,
}) => {
  const imageCirculation = () => {
    const imageIndex = 0;
    // console.log('images: ', images);
    setInterval(() => {
      console.log('imageIndex out side of conditional: ', imageIndex);
      // if (imageIndex < images.length) {
      //   imageIndex += 1;
      //   setImage(images[imageIndex]);
      // } else {
      //   console.log('else is passing');
      //   imageIndex = 0;
      // }
      console.log('should be resetting');
    }, 7000);
  };

  // imageCirculation();
  return (
    <div className="landing_container">
      <ImageCarousel
        minImages={minImages}
        images={images}
        setImage={setImage}
        selectedImage={selectedImage}
        setInfoPanel={setInfoPanel}
      />
      <InfoPanel panels={panels} currentInfoPanel={currentInfoPanel} />
    </div>
  );
};

const mapState = state => ({
  minImages: state.imagesReducer.minImages,
  images: state.imagesReducer.images,
  selectedImage: state.imagesReducer.currentImage,
  panels: state.infoPanelReducer.panels,
  currentInfoPanel: state.infoPanelReducer.currentInfoPanelIndex,
});

const mapDispatch = disptach => ({
  setImage: img => disptach(changeImage(img)),
  setInfoPanel: index => disptach(changeInfoPanelIndex(index)),
});

Landing.propTypes = {
  minImages: PropTypes.array,
  images: PropTypes.array,
  selectedImage: PropTypes.string,
  panels: PropTypes.array,
  currentInfoPanel: PropTypes.string,
  setImage: PropTypes.func,
  setInfoPanel: PropTypes.func,
};

Landing.defaultProps = {
  minImages: [],
  images: [],
  selectedImage: '',
  panels: [],
  currentInfoPanel: '',
  setImage: () => {},
  setInfoPanel: () => {},
};

export default connect(mapState, mapDispatch)(Landing);
