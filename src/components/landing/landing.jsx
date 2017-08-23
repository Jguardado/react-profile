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
}) => (
  <div className="landing_container">
    <InfoPanel panels={panels} currentInfoPanel={currentInfoPanel} />
    <ImageCarousel
      minImages={minImages}
      images={images}
      setImage={setImage}
      selectedImage={selectedImage}
      setInfoPanel={setInfoPanel}
    />
  </div>
);

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
