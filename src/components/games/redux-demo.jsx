import React, { PropTypes } from 'react';
import CodeMirror from 'react-codemirror';

require('codemirror/mode/javascript/javascript');

const DemoRedux = ({ updateCode, reduxCode }) => {
  const handleChange = (input) => {
    // I can stringify input and store in state as initialState
    updateCode('redux', JSON.stringify(input));
  };

  return (
    <div className="demo_redux">
      Lets play with Redux
      <CodeMirror
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

DemoRedux.propTypes = {
  updateCode: PropTypes.func,
  reduxCode: PropTypes.string,
};

DemoRedux.defaultProps = {
  updateCode: () => {},
  reduxCode: '',
};

export default DemoRedux;
