import React, { Component } from 'react';
import Spy from '../Components/Spy.js'


class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <nav>Navbar</nav>
        <header className="NavBar-header">
        I'm the NavBar, does this update?
        </header>
        <Spy />
      </div>
    );
  }
}

export default NavBar;
