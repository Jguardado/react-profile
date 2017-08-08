import React from 'react';
import { connect } from 'react-redux';

import { changeImage } from '../actions/carousel-actions';
import { changeInfoPanelIndex } from '../actions/info-panel-actions';

const InfoPanel = ({ panels, currentInfoPanel }) => (
  <div className="info_panel_container">
    {panels[currentInfoPanel]}
  </div>
);

const ImageCarousel = ({ images, setImage, selectedImage, setInfoPanel }) => (
  <div>
    <div
      className="image_carousel_title"
    >
      Image Carousel
    </div>
    <div
      className="image_carousel_selected_container"
    >
      <img src={selectedImage} alt="Image is Coming" className="image_carousel_selected" />
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
            {image}
          </div>),
        )
      }
    </div>
  </div>
);

const Landing = ({ images, setImage, selectedImage, panels, currentInfoPanel, setInfoPanel }) => (
  <div className="landing_container">
    <InfoPanel panels={panels} currentInfoPanel={currentInfoPanel} />
    <ImageCarousel
      images={images}
      setImage={setImage}
      selectedImage={selectedImage}
      setInfoPanel={setInfoPanel}
    />
  </div>
);

const mapState = state => ({
  images: state.imagesReducer.images,
  selectedImage: state.imagesReducer.currentImage,
  panels: state.infoPanelReducer.panels,
  currentInfoPanel: state.infoPanelReducer.currentInfoPanelIndex,
});

const mapDispatch = disptach => ({
  setImage: img => disptach(changeImage(img)),
  setInfoPanel: index => disptach(changeInfoPanelIndex(index)),
});

export default connect(mapState, mapDispatch)(Landing);
