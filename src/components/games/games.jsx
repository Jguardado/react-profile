import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import DemoRedux from './redux-demo.jsx';
import DemoReact from './react-demo.jsx';
import DemoNode from './node-demo.jsx';
import DemoRuby from './ruby-demo.jsx';
import {
  updateCodemirrorContent,
  setJSframework,
  deactivateDemo as deactivateDemoAction,
} from '../../actions/games-actions';
import {
  reactDemo as reactDemoSelector,
  reduxDemo as reduxDemoSelector,
  nodeDemo as nodeDemoSelector,
  existingDemos } from '../../selectors/games-selector';

const Games = ({
  updateCode,
  reactCode,
  reduxCode,
  rubyCode,
  nodeCode,
  setCodeMirror,
  reactDemo,
  reduxDemo,
  nodeDemo,
  deactivateDemo,
}) => {
  const handleFrameworkChange = (input) => {
    setCodeMirror(input);
  };
  const deactivateAllOtherDemos = (currentDemo) => {
    Object.keys(existingDemos())
      .filter(demo => demo !== currentDemo)
      .forEach(demo => deactivateDemo(demo));
  };

  return (
    <div>
      <div>
        Basic Games
        <DemoRuby updateCode={updateCode} rubyCode={rubyCode} />
        <div className="framework_options">
          <Button
            ghost
            type="primary"
            className="framework_option"
            onClick={() => {
              handleFrameworkChange({ name: 'reactDemo', active: true });
              deactivateAllOtherDemos('reactDemo');
            }}
          >REACT</Button>
          <Button
            ghost
            type="primary"
            className="framework_option"
            onClick={() => {
              handleFrameworkChange({ name: 'reduxDemo', active: true });
              deactivateAllOtherDemos('reduxDemo');
            }}
          >REDUX</Button>
          <Button
            ghost
            type="primary"
            className="framework_option"
            onClick={() => {
              handleFrameworkChange({ name: 'nodeDemo', active: true });
              deactivateAllOtherDemos('nodeDemo');
            }}
          >NODE</Button>
        </div>
        {reduxDemo ? <DemoRedux updateCode={updateCode} reduxCode={reduxCode} /> : null}
        {reactDemo ? <DemoReact updateCode={updateCode} reactCode={reactCode} /> : null}
        {nodeDemo ? <DemoNode updateCode={updateCode} nodeCode={nodeCode} /> : null}
      </div>
    </div>
  );
};

const mapState = state => ({
  reactCode: state.gamesReducer.react,
  reduxCode: state.gamesReducer.redux,
  rubyCode: state.gamesReducer.ruby,
  nodeCode: state.gamesReducer.node,
  reactDemo: reactDemoSelector(state),
  reduxDemo: reduxDemoSelector(state),
  nodeDemo: nodeDemoSelector(state),
});

const mapDispatch = dispatch => ({
  updateCode: (type, text) => dispatch(updateCodemirrorContent(type, text)),
  setCodeMirror: framework => dispatch(setJSframework(framework)),
  deactivateDemo: demoName => dispatch(deactivateDemoAction(demoName)),
});

Games.propTypes = {
  updateCode: PropTypes.func,
  reactCode: PropTypes.string,
  reduxCode: PropTypes.string,
  rubyCode: PropTypes.string,
  nodeCode: PropTypes.string,
  setCodeMirror: PropTypes.func,
  reactDemo: PropTypes.string,
  reduxDemo: PropTypes.string,
  nodeDemo: PropTypes.string,
  deactivateDemo: PropTypes.func,
};

Games.defaultProps = {
  updateCode: () => {},
  reactCode: '',
  reduxCode: '',
  rubyCode: '',
  nodeCode: '',
  setCodeMirror: () => {},
  reactDemo: '',
  reduxDemo: '',
  nodeDemo: '',
  deactivateDemo: () => {},
};

export default connect(mapState, mapDispatch)(Games);
