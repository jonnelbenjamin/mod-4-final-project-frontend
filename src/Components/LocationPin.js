import React, { Component } from 'react';
import pin from '../LocationPins.png'

class LocationPin extends Component {
  render() {
    return (
      <div id={`Pin-` + this.props.location.id}>
      <img src={pin}
        onClick={ () => this.props.pinClickHandler(this.props.location)}
       />
      </div>
  )
  }
}

export default LocationPin;
