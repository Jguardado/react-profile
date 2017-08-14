import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { changeImage } from '../actions/carousel-actions';
import { changeInfoPanelIndex } from '../actions/info-panel-actions';

const InfoPanel = ({ panels, currentInfoPanel }) => (
  <div className="info_panel_container">
    {panels[currentInfoPanel]}
  </div>
);

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
          <div
            className="image_carousel_image_button"
            onClick={() => {
              setImage(image);
              setInfoPanel(i);
            }}
          >
            <img src={minImages[i]} alt="Nothing to Select" className="image_carousel_min_pic" />
          </div>),
        )
      }
    </div>
  </div>
);

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
  selectedImage: '',
  setImage: () => {},
  setInfoPanel: () => {},
};

InfoPanel.propTypes = {
  panels: PropTypes.array,
  currentInfoPanel: PropTypes.string,
};

InfoPanel.defaultProps = {
  panels: [],
  currentInfoPanel: '',
};

export default connect(mapState, mapDispatch)(Landing);
