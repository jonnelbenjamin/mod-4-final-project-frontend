import React, { Component } from 'react';


class Leader extends Component {
  render() {
    return (
      <div className="Leader">
        <header className="Leader-header">


            <span>CEO: {this.props.leader.name} </span>
            <span>Attack: {this.props.leader.attack} </span>
            <span>Defense: {this.props.leader.defense} </span>
            <span>HP: {this.props.leader.health_points} </span>
            </header>
            </div>
          )
        }
      }

export default Leader;
