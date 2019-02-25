import React, { PropTypes } from 'react';
import CodeMirror from 'react-codemirror';
import EditModal from '../editModal.jsx';

require('codemirror/mode/ruby/ruby');

// NOTE: Ruby code is not rendering with initail state
const DemoRuby = ({
  updateCode,
  rubyCode,
  editPage,
  editable,
}) => {
  const handleChange = (input) => {
    // I can stringify input and store in state as initialState
    updateCode('ruby', JSON.stringify(input));
  };
  // console.log('what is editable: ', editable);
  return (
    <div className="demo_ruby">
      This would be ruby
      <div>
        Temporary button, will remove when login setup
        <button
          className="btn"
          onClick={() => editPage(true)}
        >
          Edit
        </button>
      </div>
      {editable ? <EditModal /> : null}
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

// <button
//   className="btn"
//   onClick={() => editPage(true)}
// >
//   Edit
// </button>
