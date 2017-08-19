import React, { PropTypes } from 'react';
import CodeMirror from 'react-codemirror';

require('codemirror/mode/javascript/javascript');

const DemoNode = ({ updateCode, nodeCode }) => (
  <div className="demo_node">
    this would be a demo Node
    <CodeMirror
      ref="editor"
      options={{
        lineNumbers: true,
        mode: 'javascript',
      }}
      onChange={updateCode}
      value={nodeCode}
    />
  </div>
);

DemoNode.propTypes = {
  updateCode: PropTypes.func,
  nodeCode: PropTypes.string,

};

DemoNode.defaultProps = {
  updateCode: () => {},
  nodeCode: '',
};

export default DemoNode;
