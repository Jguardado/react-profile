import React, { Component } from 'react';
import { Link } from 'react-router';

class Landing extends Component {
  render() {
    return (
      <div className="landing_container">
        <button>
          <Link to="/blog">Blog</Link>
        </button>
        <button>
          <Link to="/games">Games</Link>
        </button>
      </div>
    );
  }
}


export default Landing;
