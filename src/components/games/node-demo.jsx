import React from 'react';
import CodeMirror from 'react-codemirror';

require('codemirror/mode/javascript/javascript');

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

export default DemoNode;
