import React from 'react';

const IntroPanel = () => (
  <div>
    this is the info Panel
  </div>
);

const ImageCarousel = () => (
  <div>
      Image Carousel
  </div>
);

const Landing = () => (
  <div className="landing_container">
    <IntroPanel />
    <ImageCarousel />
  </div>
);

export default Landing;
