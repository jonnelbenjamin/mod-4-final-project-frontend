import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WorldMap from './Containers/WorldMap'
import NavBar from './Containers/NavBar'
import { Button} from 'react-bootstrap';

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
        <NavBar />
        <header className="App-header">
          <WorldMap />
            <p>Here is paragraph in the App</p>
            <Button bsstyle='success'>Hello Button</Button>
        </header>
      </div>
    );
  }
}

export default App;
