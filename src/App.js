import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WorldMap from './Containers/WorldMap'
import NavBar from './Containers/NavBar'
import { Button} from 'react-bootstrap';
import Battle from './Components/Battle.js'
import HowToPlay from './Components/HowToPlay.js'
import {Route} from 'react-router-dom'

class App extends Component {
  constructor(){
    super()
    this.state = {
      locationPin: [],
      missions: [],
      locationDetail: [],
      show: true,
      Spy: [],
      battle: [],
      leader: []
    }
  }

  componentDidMount(){
      fetch('http://localhost:3000/locations')
      .then(res => res.json())
      .then(locationPin => {
        this.setState({
          locationPin
        })
      })
      fetch('http://localhost:3000/spies')
      .then(res => res.json())
      .then(Spy => {
        this.setState({
          Spy
        })
      })
    }

    onClickHandler = (pinObj) => {
      this.setState({
        locationDetail: [pinObj]
      })
      console.log(pinObj.name)
    }

    showModal = () => {
      this.setState({
        ...this.state,
        show: !this.state.show
      })
    }

    showHowToPlayModal = () => {
      this.setState({
        ...this.state,
        show: !this.state.show
      })
    }

    handleLeader = (leader) => {
      console.log('hit the leader', leader)
      this.setState({
        leader: [leader],
        battle: [...this.state.Spy,leader]
      })
    }

  render() {
    return (
      <div className="App">
        <NavBar
          instructions={this.showHowToPlayModal}
          spy={this.state.Spy}
          />

          <WorldMap
            allLocations={this.state.locationPin}
            pinClickHandler={this.onClickHandler}
            locationDetail={this.state.locationDetail}
            spy={this.state.Spy}
            onClick={this.showModal}
            battle={this.state.battle}
            handleLeader={this.handleLeader}
            leader={this.state.leader}
             />
           <Battle
             battle={this.state.battle}
             onClose={this.showModal}
             show={this.state.show}>
           </Battle>
           <Route />
      </div>
    );
  }
}

export default App;
