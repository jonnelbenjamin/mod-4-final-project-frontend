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

  componentDidMount(){
      fetch('http://localhost:3000/locations')
      .then(res => res.json())
      .then(locationPin => {
        this.setState({
          locationPin
        })
      })
    }

  pinClickHandler(){

    console.log('location pin hit')
    
  }

  render() {
    return (
      <div className="App">
        <NavBar />

          <WorldMap
            allLocations={this.state.locationPin}
            pinClickHandler={this.pinClickHandler}
             />


      </div>
    );
  }
}

export default App;
