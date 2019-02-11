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

    onClickHandler = (pinObj) => {
      // document.querySelector('.LocationDetail-header').remove()
      this.setState({
        locationDetail: [pinObj]
      })
      console.log(pinObj.name)
    }

  render() {
    return (
      <div className="App">
        <NavBar />

          <WorldMap
            allLocations={this.state.locationPin}
            pinClickHandler={this.onClickHandler}
            locationDetail={this.state.locationDetail}
             />


      </div>
    );
  }
}

export default App;
