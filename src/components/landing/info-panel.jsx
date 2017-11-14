import React, { PropTypes } from 'react';


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
  currentInfoPanel: PropTypes.string,
};

InfoPanel.defaultProps = {
  images: [],
  currentInfoPanel: '',
};

export default InfoPanel;
