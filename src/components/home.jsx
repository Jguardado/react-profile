import React, { PropTypes } from 'react';
import { Layout } from 'antd';
import Spinner from "../spinner";
import NavigationComp from './header.jsx'; // eslint-disable-line
import RouteWithSubRoutes from '../RouteWithSubRoutes.jsx';

const { Header, Content, Sider, Footer } = Layout;

const Home = (props) => {
  // if () {
  //
  // }

  return (
    <div>
      <Layout>
        <Header />
        <Layout>
          <NavigationComp />
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

export default Home;
