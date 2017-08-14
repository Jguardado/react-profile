import React from 'react';
import CodeMirror from 'react-codemirror';
import Example from './example.jsx';

require('codemirror/mode/javascript/javascript');
require('codemirror/mode/ruby/ruby');

const DemoNode = () => (
  <div className="demo_node">
    this would be a demo Node
    <CodeMirror
      ref="editor"
      options={{
        mode: 'javascript',
      }}
    />
  </div>
);

const DemoReact = () => (
  <div className="demo_react">
    This is React
    <CodeMirror
      ref="editor"
      options={{
        mode: 'javascript',
      }}
    />
  </div>
);

const DemoRuby = () => (
  <div className="demo_ruby">
    This would be ruby
    <CodeMirror />
  </div>
);

const DemoRedux = () => (
  <div className="demo_redux">
    Lets play with Redux
    <CodeMirror
      ref="editor"
      options={{
        mode: 'javascript',
      }}
    />
  </div>
);

const Games = () => (
  <div>
    <div>
      Basic Games
    </div>
    <Example />
  </div>
);

export default Games;

// <DemoReact />
// <DemoRuby />
// <DemoRedux />
// <DemoNode />
