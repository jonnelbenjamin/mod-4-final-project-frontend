import React, { Component } from 'react';
import Spy from '../Components/Spy.js'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'


class NavBar extends Component {
  render() {
    return (
      <div className="nav">
        <Navbar fixed="top" bg="secondary" variant="dark">
          <Navbar.Brand href="">Welcome Spy</Navbar.Brand>
          <Button fixed="right">Your Missions</Button>
            <Button bsstyle='success'>How to Play</Button>
        </Navbar>

</div>
    );
  }
}

export default NavBar;

// <Spy />
