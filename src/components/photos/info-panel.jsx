import React from 'react';
import PropTypes from 'prop-types';


const InfoPanel = ({ images, currentInfoPanel }) => {
  if (currentInfoPanel && images.length > 1) {
    return (
      <div className="info_panel_container">
        {images[currentInfoPanel].infoPanel}
      </div>
    );
  }
  return null;
};

InfoPanel.propTypes = {
  images: PropTypes.array,
  currentInfoPanel: PropTypes.number,
};

InfoPanel.defaultProps = {
  images: [],
  currentInfoPanel: 0,
};

export default InfoPanel;
