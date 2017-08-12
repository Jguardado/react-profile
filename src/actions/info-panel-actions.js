import * as types from '../constants';

export const changeInfoPanelIndex = index => ({
  type: types.CHANGE_INFO_PANEL_INDEX,
  payload: index,
});
