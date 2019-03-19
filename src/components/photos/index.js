import { connect } from 'react-redux';

import { changeImage, fetchCarouselImages } from '../../actions/carousel-actions';
import { changeInfoPanelIndex, fetchPanelInfo } from '../../actions/info-panel-actions';

import Landing from "./photos";

const mapState = state => ({
  minImages: state.imagesReducer.minImages,
  images: state.imagesReducer.images,
  selectedImage: state.imagesReducer.currentImage,
  panels: state.infoPanelReducer.panels,
  currentInfoPanel: state.infoPanelReducer.currentInfoPanelIndex,
});

const mapDispatch = dispatch => ({
  setImage: img => dispatch(changeImage(img)),
  setInfoPanel: index => dispatch(changeInfoPanelIndex(index)),
  fetchCarousel: () => fetchCarouselImages(dispatch),
  fetchPanels: () => fetchPanelInfo(dispatch),
});

export default connect(mapState, mapDispatch)(Landing);
