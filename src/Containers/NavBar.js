import React, { Component } from 'react';
import Spy from '../Components/Spy.js'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'


class NavBar extends Component {



  render() {
    return (
      <div className="nav">
        <Navbar fixed="top" bg="secondary" variant="dark">
          <Navbar.Brand href="" className="navbar-brand-welcome">Welcome Spy</Navbar.Brand>
          {this.props.spy.length > 0 ?
          <Spy
            spy={this.props.spy}
            />: null}
            <Link to="/missions"><Button id="missionsButton" fixed="right">Your Missions</Button></Link>
            <Link to="/howtoplay"><Button
              id="instructionsButton" bsstyle='success'>How to Play</Button></Link>
        </Navbar>

</div>
    );
  }
}

export default NavBar;

// <Spy />
