import React, { PropTypes } from 'react';


const InfoPanel = ({ images, currentInfoPanel }) => (
  <div className="info_panel_container">
    {images.length > 1 ? images[currentInfoPanel].infoPanel : null}
  </div>
);

InfoPanel.propTypes = {
  images: PropTypes.array,
  currentInfoPanel: PropTypes.string,
};

InfoPanel.defaultProps = {
  images: [],
  currentInfoPanel: '',
};

export default InfoPanel;
