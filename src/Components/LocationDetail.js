import React, { Component } from 'react';
import Leader from './Leader'


const LocationDetail = props => {
  const { location } = props;

    return (
      <div className="LocationDetail"
      key={location.id}
      >
        <header className="LocationDetail-header">
            <h2>Name: {location.name}</h2>
            <p>Description: {location.city_information}</p>
            </header>
            <Leader />
            </div>
          )

      }

export default LocationDetail;
