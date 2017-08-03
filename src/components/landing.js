import React, { Component } from 'react';
import { Link } from 'react-router';

class Landing extends Component {
  render() {
    return (
      <div >
        <Link to="/blog">Blog</Link>
        <Link to="/games">Games</Link>
      </div>
    );
  }
}


export default Landing;
