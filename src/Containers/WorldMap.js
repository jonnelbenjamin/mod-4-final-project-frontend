import React, { Component } from 'react';
import LocationDetail from '../Components/LocationDetail.js'
import LocationPin from '../Components/LocationPin.js'

class WorldMap extends Component {
  render() {
    return (
      <div className="WorldMap">
        <header className="WorldMap-header">
          {this.props.allLocations.map(location =>
            <LocationPin
              location={location}
              pinClickHandler={this.props.pinClickHandler}
              />

          )
        }
        </header>
      </div>
    );
  }
}

export default WorldMap;
