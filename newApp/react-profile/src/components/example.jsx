import React, { Component } from 'react';

const Codemirror = require('react-codemirror');

require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');
require('codemirror/mode/markdown/markdown');

const defaults = {
  markdown: '# Heading\n\nSome **bold** and _italic_ text\nBy [Jed Watson](https://github.com/JedWatson)',
  javascript: 'var component = {\n\tname: "react-codemirror",\n\tauthor: "Jed Watson",\n\trepo: "https://github.com/JedWatson/react-codemirror"\n};',
};

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: defaults.markdown,
      readOnly: false,
      mode: 'markdown',
    };
  }

  updateCode(newCode) {
    this.setState({
      code: newCode,
    });
  }

  changeMode(e) {
    const mode = e.target.value;
    this.setState({
      mode,
      code: defaults[mode],
    });
  }

  toggleReadOnly() {
    this.setState({
      readOnly: !this.state.readOnly,
    }, () => this.refs.editor.focus());
  }

  render() {
    const options = {
      lineNumbers: true,
      readOnly: this.state.readOnly,
      mode: this.state.mode,
    };
    return (
      <div>
        <Codemirror
          ref="editor"
          value={this.state.code}
          onChange={this.updateCode}
          options={options}
          autoFocus
        />
        <div style={{ marginTop: 10 }}>
          <select onChange={this.changeMode} value={this.state.mode}>
            <option value="markdown">Markdown</option>
            <option value="javascript">JavaScript</option>
          </select>
          <button onClick={this.toggleReadOnly}>Toggle read-only mode (currently {this.state.readOnly ? 'on' : 'off'})</button>
        </div>
      </div>
    );
  }
}

export default Example;
