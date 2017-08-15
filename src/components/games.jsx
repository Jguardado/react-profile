import React from 'react';
import CodeMirror from 'react-codemirror';
import { connect } from 'react-redux';
// import Example from './example.jsx';
import { updateCodemirrorContent } from '../actions/games-actions';

require('codemirror/mode/javascript/javascript');
require('codemirror/mode/ruby/ruby');


// NOTE: It looks like we can only render one per type at a time
const DemoNode = () => (
  <div className="demo_node">
    this would be a demo Node
    <CodeMirror
      ref="editor"
      options={{
        lineNumbers: true,
        mode: 'javascript',
      }}
    />
  </div>
);

const DemoReact = ({ updateCode, reactCode }) => {
  const handleChange = (input) => {
    // I can stringify input and store in state as initialState
    updateCode('react', JSON.stringify(input));
  };

  return (
    <div className="demo_react">
      This is React
      <CodeMirror
        ref="editor"
        options={{
          lineNumbers: true,
          mode: 'javascript',
        }}
        onChange={handleChange}
        value={reactCode}
      />
    </div>
  );
};

const DemoRuby = ({ updateCode, rubyCode }) => {
  const handleChange = (input) => {
    // I can stringify input and store in state as initialState
    updateCode('ruby', JSON.stringify(input));
  };
  return (
    <div className="demo_ruby">
      This would be ruby
      <CodeMirror
        options={{
          lineNumbers: true,
          mode: 'ruby',
        }}
        onChange={handleChange}
      />
    </div>
  );
};

const DemoRedux = ({ updateCode, reduxCode }) => {
  const handleChange = (input) => {
    // I can stringify input and store in state as initialState
    updateCode('redux', JSON.stringify(input));
  };

  return (
    <div className="demo_redux">
      Lets play with Redux
      <CodeMirror
        ref="editor"
        options={{
          lineNumbers: true,
          mode: 'javascript',
        }}
        onChange={handleChange}
        value={reduxCode}
      />
    </div>
  );
};

const Games = ({ updateCode, reactCode, reduxCode }) => (
  <div>
    <div>
      Basic Games

      <DemoRuby />
      <DemoRedux updateCode={updateCode} reduxCode={reduxCode} />
      <DemoNode />
    </div>

  </div>
);

const mapState = state => ({
  reactCode: state.gamesReducer.react,
  reduxCode: state.gamesReducer.redux,
});

const mapDispatch = dispatch => ({
  updateCode: (type, text) => dispatch(updateCodemirrorContent(type, text)),
});

export default connect(mapState, mapDispatch)(Games);
// <DemoReact updateCode={updateCode} reactCode={reactCode} />
// <Example />
