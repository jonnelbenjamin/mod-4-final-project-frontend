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

        {this.props.locationDetail.length > 0 ? this.props.locationDetail.map(location =>
        <LocationDetail
          location={location}
           />): null}
      </div>
    );
  }
}

export default WorldMap;
