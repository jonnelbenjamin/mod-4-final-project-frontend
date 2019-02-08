import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WorldMap from './Containers/WorldMap'
import NavBar from './Containers/NavBar'

class App extends Component {
  constructor(){
    super()
    this.state = {
      locationPin: [],
      missions: []
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
          <WorldMap />
        </header>
      </div>
    );
  }
}

export default App;
