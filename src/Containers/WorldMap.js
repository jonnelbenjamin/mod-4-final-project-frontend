import React, { Component } from 'react';
import LocationDetail from '../Components/LocationDetail.js'
import LocationPin from '../Components/LocationPin.js'
import Leader from '../Components/Leader.js'

class WorldMap extends Component {

constructor(){
super()
this.state = {
  leader: [],
  battle: []
}
}

handleLeader = (leader) => {
  console.log('hit the leader', leader)
  this.setState({
    leader: [leader],
    battle: [...this.props.spy,leader]
  })

}

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
          battle={this.state.battle}
          location={location}
          handleLeader={this.handleLeader}
          leader={this.state.leader}
          spy={this.props.spy}
           />): null}
           {this.state.leader[0] ?
             <Leader
               leader={this.state.leader[0]}
               /> : null}
      </div>
    );
  }
}

export default WorldMap;
