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
      missions: [],
      locationDetail: []
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

    pinClickHandler(pinObj){
      console.log(pinObj.id)
      this.setState({
        locationDetail: pinObj
      })
    }

  render() {
    return (
      <div className="App">
        <NavBar />

          <WorldMap
            allLocations={this.state.locationPin}
            pinClickHandler={this.pinClickHandler}
            locationDetail={this.state.locationDetail}
             />


      </div>
    );
  }
}

export default App;
