import React, { Component } from 'react';
import LocationDetail from '../Components/LocationDetail.js'
import LocationPin from '../Components/LocationPin.js'
import Leader from '../Components/Leader.js'

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
          battle={this.props.battle}
          location={location}
          handleLeader={this.props.handleLeader}
          leader={this.props.leader}
          spy={this.props.spy}
          onClick={this.props.onClick}
           />): null}
           {this.props.leader[0] ?
             <Leader
               leader={this.props.leader[0]}
               onClick={this.props.onClick}
               battle={this.props.battle}
               /> : null}
      </div>
    );
  }
}

export default WorldMap;
