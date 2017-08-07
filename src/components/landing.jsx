import React from 'react';
import { connect } from 'react-redux';

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

const ImageCarousel = ({ images }) => (
  <div>
    <h1>Image Carousel</h1>
    <div className="image_carousel_pic_box">
      {
        images.map(image => <img src={image} />)
      }
    </div>
  </div>
);

const Landing = ({ images }) => (
  <div className="landing_container">
    <IntroPanel />
    <ImageCarousel images={images} />
  </div>
);

const mapState = state => ({
  images: state.images,
});

const mapDispatch = () => ({

});

export default connect(mapState, mapDispatch)(Landing);
