import React, { Component } from 'react';
import Leader from './Leader'


const LocationDetail = props => {
  const { location } = props;

    return (
      <div className="LocationDetail"
      key={location.id}
      >
        <header className="LocationDetail-header">
            <h2>"I'm the LocationDetail"</h2>
            <p>Name: {location.name}</p>
            </header>
            <Leader />
            </div>
          )

      }

export default LocationDetail;
