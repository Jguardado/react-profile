import React from 'react';
import { connect } from 'react-redux';

import { changeImage } from '../actions/carousel-actions';

const IntroPanel = () => (
  <div>
    this is the info Panel
  </div>
);

/*
NOTE:
I can disptach an action that sets image as current view. I will
need to figure out how exactly I plan on having the teh images
cycle
 */

const ImageCarousel = ({ images, setImage, selectedImage }) => (
  <div>
    <h1>Image Carousel</h1>
    <div>
      <img src={selectedImage} alt="Image is Coming" />
    </div>
    <div className="image_carousel_pic_box">
      {
        images.map(image => (
          <div
            className="image_carousel_image_button"
            onClick={() => setImage(image)}
          >
            {image}
          </div>),
        )
      }
    </div>
  </div>
);

const Landing = ({ images, setImage, selectedImage }) => (
  <div className="landing_container">
    <IntroPanel />
    <ImageCarousel images={images} setImage={setImage} selectedImage={selectedImage} />
  </div>
);

const mapState = state => ({
  images: state.imagesReducer.images,
  selectedImage: state.imagesReducer.currentImage,
});

const mapDispatch = disptach => ({
  setImage: img => disptach(changeImage(img)),
});

export default connect(mapState, mapDispatch)(Landing);
