import React, { Component } from 'react';
import Spy from '../Components/Spy.js'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'


class NavBar extends Component {

  constructor(){
    super()
    this.state = {
      Spy: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/spies')
    .then(res => res.json())
    .then(Spy => {
      this.setState({
          Spy
      })
    })
  }

  render() {
    return (
      <div className="nav">
        <Navbar fixed="top" bg="secondary" variant="dark">
          <Navbar.Brand href="">Welcome Spy</Navbar.Brand>
          <Button id="missionButton" fixed="right">Your Missions</Button>
          {this.state.Spy.length > 0 ?
          <Spy
            spy={this.state.Spy}
            />: null}
            <Button id="instructionsButton" bsstyle='success'>How to Play</Button>
        </Navbar>

</div>
    );
  }
}

export default NavBar;

// <Spy />
