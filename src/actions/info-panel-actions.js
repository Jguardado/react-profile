import * as types from '../constants';

export const changeInfoPanelIndex = index => ({
  type: types.CHANGE_INFO_PANEL_INDEX,
  payload: index,
});

export const receivedPanelInfo = panels => ({
  type: types.RECEIVED_PANEL_INFO,
  payload: panels,
});

export const fetchPanelInfo = dispatch => window.fetch('/panels')
  .then(res => res.json())
  .then(res => dispatch(receivedPanelInfo(res.panels)))
  .catch(err => console.log('there was an error fetching Panels: ', err));
