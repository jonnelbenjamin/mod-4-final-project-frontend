import React, { Component } from 'react';
import Leader from './Leader'
import Button from 'react-bootstrap/Button'


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
            <div>
            <Button id="battleButton" fixed="right"
            onClick={() => props.handleLeader(location.leader)}
            >Leader: {location.leader.name}</Button>

            </div>
            </div>
          )

      }

export default LocationDetail;
