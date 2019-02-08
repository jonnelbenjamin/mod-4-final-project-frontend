// import React, { Component } from 'react';
// import LocationDetail from '../Components/LocationDetail.js'
//
//
// class WorldMap extends Component {
//   render() {
//     return (
//       <div className="WorldMap">
//         <header className="WorldMap-header">
//         I'm the World Map
//         </header>
//       </div>
//     );
//   }
// }
//
// export default WorldMap;
//

import React, {Component} from 'react';
import MapGL, {NavigationControl} from 'react-map-gl';
const TOKEN = 'pk.eyJ1Ijoiam9ubmVsYmVuamFtaW4yMyIsImEiOiJjanJ3YTVmZ2IwYW5sM3lxb2ZjMXUyYzc3In0.v0hrA7wAVwvEm9kc5CKQLQ';
const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};

class Map extends Component {
constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 37.785164,
        longitude: -100,
        zoom: 2.8,
        bearing: 0,
        pitch: 0,
        width: 500,
        height: 500,
      }
    };
  }
render() {
    const {viewport} = this.state;
return (
      <MapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxApiAccessToken={TOKEN}>
        <div className="nav" style={navStyle}>
          <NavigationControl/>
        </div>
      </MapGL>
    );
  }
}

export default WorldMap;
