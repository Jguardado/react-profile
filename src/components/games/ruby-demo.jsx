import React, { PropTypes } from 'react';
import CodeMirror from 'react-codemirror';

require('codemirror/mode/ruby/ruby');

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

DemoRuby.propTypes = {
  updateCode: PropTypes.func,
  rubyCode: PropTypes.string,
};

DemoRuby.defaultProps = {
  updateCode: () => {},
  rubyCode: '',

};

export default DemoRuby;
