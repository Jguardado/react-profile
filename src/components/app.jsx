import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import Spinner from "../spinner";
import NavigationComp from './header.jsx'; // eslint-disable-line
import RouteWithSubRoutes from '../RouteWithSubRoutes.jsx';

const { Header, Content, Sider, Footer } = Layout;

const App = (props) => {
  // if () {
  //
  // }

  return (
    <div>
      <Layout>
        <Header>
          <NavigationComp />
        </Header>
        <Layout>
          <Content>
            {props.routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
          </Content>
          <Sider>
            someshit
          </Sider>
        </Layout>
        <Footer>
          gonne drop some shit
        </Footer>
      </Layout>
    </div>
  );
}

// Home.propTypes = {
//   children: PropTypes.element,
// };

// Home.defaultProps = {
//   children: {},
// };

export default App;
