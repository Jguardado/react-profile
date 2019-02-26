import { connect } from 'react-redux';

import {
  updateCodemirrorContent,
  setJSframework,
  deactivateDemo as deactivateDemoAction,
  fetchDemoInfo,
} from '../../actions/games-actions';

import {
  setEdit,
} from '../../actions/ui-actions';

import {
  reactDemo as reactDemoSelector,
  reduxDemo as reduxDemoSelector,
  nodeDemo as nodeDemoSelector
} from '../../selectors/games-selector';

import {
  editPageStatus,
} from '../../selectors/ui-selector';

import Games from './games'

const mapState = state => ({
  demoCode: state.gamesReducer.code,
  reactCode: state.gamesReducer.react,
  reduxCode: state.gamesReducer.redux,
  rubyCode: state.gamesReducer.ruby,
  nodeCode: state.gamesReducer.node,
  reactDemo: reactDemoSelector(state),
  reduxDemo: reduxDemoSelector(state),
  nodeDemo: nodeDemoSelector(state),
  editable: editPageStatus(state),
});

const mapDispatch = dispatch => ({
  fetchDemoCode: () => fetchDemoInfo(dispatch),
  updateCode: (type, text) => dispatch(updateCodemirrorContent(type, text)),
  setCodeMirror: framework => dispatch(setJSframework(framework)),
  deactivateDemo: demoName => dispatch(deactivateDemoAction(demoName)),
  editPage: bool => dispatch(setEdit(bool)),
});

export default connect(mapState, mapDispatch)(Games);
