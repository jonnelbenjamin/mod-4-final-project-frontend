import React, { Component } from 'react';
import pin from '../LocationPins.png'

class LocationPin extends Component {
  render() {
    return (
      <div className={`Pin-` + this.props.location.id}>
      <img src={pin}
        onClick={this.props.pinClickHandler}
       />
      </div>
  )
  }
}

export default LocationPin;
