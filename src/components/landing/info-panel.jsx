import React, { PropTypes } from 'react';


const InfoPanel = ({ panels, currentInfoPanel }) => (
  <div className="info_panel_container">
    {panels[currentInfoPanel]}
  </div>
);

InfoPanel.propTypes = {
  panels: PropTypes.array,
  currentInfoPanel: PropTypes.string,
};

InfoPanel.defaultProps = {
  panels: [],
  currentInfoPanel: '',
};

export default InfoPanel;
