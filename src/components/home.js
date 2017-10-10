import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';




class Home extends Component {
  render() {
    return (
      <div className='container'>
      <img src="https://i.ytimg.com/vi/w6DW4i-mfbA/hqdefault.jpg" />
      <h1>Welcome to Who Dat</h1>
      <nav>
        <div className='nav-buttons'>
          <a href="login">Log-In</a>
          <a href="register">Register</a>
          <a href="lost">Forgot Username/Password?</a>
        </div>
      </nav>

  </div>
    );
  }
}

export default Home;
