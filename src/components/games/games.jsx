import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Menu } from 'antd';

import DemoRedux from './redux-demo.jsx';
import DemoReact from './react-demo.jsx';
import DemoNode from './node-demo.jsx';
import DemoRuby from './ruby-demo.jsx';

import {
  existingDemos,
} from '../../selectors/games-selector';

class Games extends Component {
  componentDidMount () {
    const { fetchDemoCode, demoCode } = this.props;
    if (demoCode.length < 1) {
      fetchDemoCode()
    }
  }

  render() {
    const {
      updateCode,
      reactCode,
      reduxCode,
      rubyCode,
      nodeCode,
      setCodeMirror,
      reactDemo,
      reduxDemo,
      nodeDemo,
      deactivateDemo,
      editPage,
      editable,
    } = this.props;

    // TODO: these should be in a selector file or util file
    const handleFrameworkChange = (input) => {
      setCodeMirror(input);
    };

    const deactivateAllOtherDemos = (currentDemo) => {
      Object.keys(existingDemos())
        .filter(demo => demo !== currentDemo)
        .forEach(demo => deactivateDemo(demo));
    };

    return (
      <div>
        <div>
          <DemoRuby
            editable={editable}
            updateCode={updateCode}
            rubyCode={rubyCode}
            editPage={editPage}
          />
          <div className="framework_options">
            <Menu
              mode="horizontal"
            >
              <Menu.Item key="react">
                <Button
                  type="default"
                  className="framework_option"
                  onClick={() => {
                    handleFrameworkChange({ name: 'reactDemo', active: true });
                    deactivateAllOtherDemos('reactDemo');
                  }}
                >REACT</Button>
              </Menu.Item>
              <Menu.Item key="redux">
                <Button
                  type="default"
                  className="framework_option"
                  onClick={() => {
                    handleFrameworkChange({ name: 'reduxDemo', active: true });
                    deactivateAllOtherDemos('reduxDemo');
                  }}
                >REDUX</Button>
              </Menu.Item>
              <Menu.Item key="node">
                <Button
                  type="default"
                  className="framework_option"
                  onClick={() => {
                    handleFrameworkChange({ name: 'nodeDemo', active: true });
                    deactivateAllOtherDemos('nodeDemo');
                  }}
                >NODE</Button>
              </Menu.Item>
            </Menu>
          </div>
          {reduxDemo ? <DemoRedux updateCode={updateCode} reduxCode={reduxCode} /> : null}
          {reactDemo ? <DemoReact updateCode={updateCode} reactCode={reactCode} /> : null}
          {nodeDemo ? <DemoNode updateCode={updateCode} nodeCode={nodeCode} /> : null}
        </div>
      </div>
    );
  };
};

Games.propTypes = {
  updateCode: PropTypes.func,
  reactCode: PropTypes.string,
  reduxCode: PropTypes.string,
  rubyCode: PropTypes.string,
  nodeCode: PropTypes.string,
  setCodeMirror: PropTypes.func,
  reactDemo: PropTypes.string,
  reduxDemo: PropTypes.string,
  nodeDemo: PropTypes.string,
  deactivateDemo: PropTypes.func,
};

Games.defaultProps = {
  updateCode: () => {},
  reactCode: '',
  reduxCode: '',
  rubyCode: '',
  nodeCode: '',
  setCodeMirror: () => {},
  reactDemo: '',
  reduxDemo: '',
  nodeDemo: '',
  deactivateDemo: () => {},
};

export default Games;
