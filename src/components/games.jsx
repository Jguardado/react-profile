import React from 'react';
import CodeMirror from 'react-codemirror';
import { connect } from 'react-redux';
// import Example from './example.jsx';
import { updateCodemirrorContent, setJSframework } from '../actions/games-actions';
import { getFramework } from '../selectors/games-selector';

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
        value={rubyCode}
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

const RenderJSComp = ({ framework, updateCode, reactCode, reduxCode }) => {
  console.log('framework', framework);
  const components = {
    react: <DemoReact updateCode={updateCode} reactCode={reactCode} />,
    redux: <DemoRedux updateCode={updateCode} reduxCode={reduxCode} />,
    node: <DemoNode />,
  };

  return (
    <div>
      {
        components[framework]
      }
    </div>
  );
};

// NOTE: This may need to be changed to a Class as the components[framework] is
// not updating, with redux change
const Games = ({
  updateCode,
  reactCode,
  reduxCode,
  rubyCode,
  setCodeMirror,
  framework,
}) => {
  console.log('framework in Games: ', framework);
  const handleFormChange = (evt) => {
    console.log('change the form', evt.target.value);
    setCodeMirror(evt.target.value);
  };

  return (
    <div>
      <div>
        Basic Games
        <DemoRuby updateCode={updateCode} rubyCode={rubyCode} />
        <form>
          <label htmlFor="Framework">
            Select which JavaScript Framework
            <select onChange={handleFormChange}>
              <option value="react">React</option>
              <option value="redux">Redux</option>
              <option value="node">Node</option>
            </select>
          </label>
        </form>
        <RenderJSComp
          framework={framework}
          updateCode={updateCode}
          reactCode={reactCode}
          reduxCode={reduxCode}
        />
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
// <DemoReact updateCode={updateCode} reactCode={reactCode} />
// <Example />
