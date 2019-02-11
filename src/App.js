import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WorldMap from './Containers/WorldMap'
import NavBar from './Containers/NavBar'
import { Button} from 'react-bootstrap';
import Modal from './Modal/Modal.js'

class App extends Component {
  constructor(){
    super()
    this.state = {
      locationPin: [],
      missions: [],
      locationDetail: [],
      show: true
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

  render() {
    return (
      <div className="App">
        <NavBar />

          <WorldMap
            allLocations={this.state.locationPin}
            pinClickHandler={this.onClickHandler}
            locationDetail={this.state.locationDetail}
             />
           <input type="button"
             onClick={this.showModal}
             value="Show Modal" />
           <Modal
             onClose={this.showModal}
             show={this.state.show}>
             This message is from Modal!
           </Modal>

      </div>
    );
  }
}

export default App;
