import React, { PropTypes } from 'react';
import { Layout } from 'antd';
import NavigationComp from './header.jsx'; // eslint-disable-line

const { Header, Content, Sider, Footer } = Layout;

const Home = ({ children }) => (
  <div>
    <Layout>
      <Header />
      <NavigationComp />
      <Layout>
        <Content>
          {children}
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

Home.propTypes = {
  children: PropTypes.element,
};

Home.defaultProps = {
  children: {},
};

export default Home;
