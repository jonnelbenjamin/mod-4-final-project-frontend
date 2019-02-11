import React, { Component } from 'react';


class Leader extends Component {
  render() {
    return (
      <div className="Leader">
        <header className="Leader-header">
            <h2>CEO: {this.props.leader.name}</h2>
            <h3>Attack: {this.props.leader.attack}</h3>
            <h3>Defense: {this.props.leader.defense}</h3>
            <h3>HP: {this.props.leader.health_points}</h3>
            </header>
            </div>
          )
        }
      }

export default Leader;
