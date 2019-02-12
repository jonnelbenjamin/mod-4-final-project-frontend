import React, { Component } from 'react';
import Leader from './Leader'
import Button from 'react-bootstrap/Button'
import {Modal} from 'semantic-ui-react'
import LocationPin from './LocationPin.js'


class LocationDetail extends React.Component {
  render(){
  const { location } = this.props;
    return (
      <Modal trigger={<button>Show</button>}>
      <Modal.Content>
      <Modal.Description>
      <div className="LocationDetail"
      key={location.id}
      >
        <header className="LocationDetail-header">
            <h2>Name: {location.name}</h2>
            <p>Description: {location.city_information}</p>


            </header>
            <div>
            <Button id="battleButton" fixed="right"
            onClick={() => this.props.handleLeader(location.leader)}
            >Leader: {location.leader.name}</Button>

            </div>
            </div>
            </Modal.Description>
            </Modal.Content>
          </Modal>
          )

      }}

export default LocationDetail;
