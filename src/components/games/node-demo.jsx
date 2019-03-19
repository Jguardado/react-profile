import React from 'react';
import PropTypes from 'prop-types';
import CodeMirror from 'react-codemirror';

require('codemirror/mode/javascript/javascript');

const DemoNode = ({ updateCode, nodeCode }) => (
  <div className="demo_node">
    this would be a demo Node
    <CodeMirror
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
