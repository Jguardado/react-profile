import * as types from '../constants';

const infoPanelReducer = (state = {}, action) => {
  switch (action.type) {
    case types.CHANGE_INFO_PANEL_INDEX:
      return {
        ...state,
        currentInfoPanelIndex: action.payload,
      };
    default:
      return state;
  }
};

export default infoPanelReducer;
