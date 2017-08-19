import React, { PropTypes } from 'react';
import CodeMirror from 'react-codemirror';

require('codemirror/mode/javascript/javascript');

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

DemoReact.propTypes = {
  updateCode: PropTypes.func,
  reactCode: PropTypes.string,
};

DemoReact.defaultProps = {
  updateCode: () => {},
  reactCode: '',
};

export default DemoReact;
