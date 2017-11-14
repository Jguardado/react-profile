import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import InfoPanel from './info-panel.jsx';
import ImageCarousel from './image-carousel.jsx';

import { changeImage, fetchCarouselImages } from '../../actions/carousel-actions';
import { changeInfoPanelIndex, fetchPanelInfo } from '../../actions/info-panel-actions';


// TODO: I need to convert this to stateful comp and prepupulate on componentDidMount
class Landing extends Component {
  componentWillMount() {
    const { fetchCarousel, setImage } = this.props;
    fetchCarousel();
    // fetchPanels();s
    setImage('/san-fran.jpeg'); // BAD!!! just tryint to get around async call
  }

  render() {
    const {
      images,
      setImage,
      selectedImage,
      currentInfoPanel,
      setInfoPanel,
      minImages,
    } = this.props;
    // console.log('what is images: ', images);
    // console.log('what is selectedImage: ', selectedImage);
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

Landing.propTypes = {
  minImages: PropTypes.array,
  images: PropTypes.array,
  selectedImage: PropTypes.array,
  panels: PropTypes.array,
  currentInfoPanel: PropTypes.string,
  setImage: PropTypes.func,
  setInfoPanel: PropTypes.func,
};

Landing.defaultProps = {
  minImages: [],
  images: [],
  selectedImage: [],
  panels: [],
  currentInfoPanel: '',
  setImage: () => {},
  setInfoPanel: () => {},
};

export default connect(mapState, mapDispatch)(Landing);
