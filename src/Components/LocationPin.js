import React, { Component } from 'react';
import bluePin from '../bluePin.png'

class LocationPin extends Component {
  render() {
    return (
      <div id={`Pin-` + this.props.location.id}>
      <img src={bluePin}
        onClick={ () => this.props.pinClickHandler(this.props.location)}
       />
      </div>
  )
  }
}

export default LocationPin;
