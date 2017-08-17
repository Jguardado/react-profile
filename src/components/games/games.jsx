import React from 'react';
import { connect } from 'react-redux';
import DemoRedux from './redux-demo.jsx';
import DemoReact from './react-demo.jsx';
import DemoNode from './node-demo.jsx';
import DemoRuby from './ruby-demo.jsx';
import { updateCodemirrorContent, setJSframework } from '../../actions/games-actions';
import { getFramework } from '../../selectors/games-selector';

const Games = ({
  updateCode,
  reactCode,
  reduxCode,
  rubyCode,
  setCodeMirror,
  framework,
}) => {
  const handleFrameworkChange = (input) => {
    setCodeMirror(input);
  };

  return (
    <div>
      <div>
        Basic Games
        <DemoRuby updateCode={updateCode} rubyCode={rubyCode} />
        <div onClick={() => handleFrameworkChange('react')}>REACT</div>
        <div onClick={() => handleFrameworkChange('redux')}>REDUX</div>
        <div onClick={() => handleFrameworkChange('node')}>NODE</div>
        {framework === 'redux' ? <DemoRedux updateCode={updateCode} reduxCode={reduxCode} /> : null}
        {framework === 'react' ? <DemoReact updateCode={updateCode} reactCode={reactCode} /> : null}
        {framework === 'node' ? <DemoNode /> : null}
      </div>
    </div>
  );
};

const mapState = state => ({
  reactCode: state.gamesReducer.react,
  reduxCode: state.gamesReducer.redux,
  rubyCode: state.gamesReducer.ruby,
  framework: getFramework(state),
});

const mapDispatch = dispatch => ({
  updateCode: (type, text) => dispatch(updateCodemirrorContent(type, text)),
  setCodeMirror: framework => dispatch(setJSframework(framework)),
});

export default connect(mapState, mapDispatch)(Games);
