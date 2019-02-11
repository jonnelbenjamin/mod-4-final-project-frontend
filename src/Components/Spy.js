import React, { Component } from 'react';
import Mission from './Mission.js'


const Spy = props => {

    return (
      <div className="Spy">
        <header className="Spy-header">
            <span>Your Stats - </span>
            <span>Attack:{props.spy[0].attack}</span>
            <span>Defense:{props.spy[0].defense}</span>
            <span>HP:{props.spy[0].health_points}</span>


            </header>
            </div>
          )
        }


export default Spy;
