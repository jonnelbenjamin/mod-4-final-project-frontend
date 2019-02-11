import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Spy from './Spy'



class Leader extends Component {

  handleBattleClick = (leaderObj) => {
    console.log('start the battle with the leaderObj', leaderObj)
    this.setState({
      battle: [...leaderObj]
    })
  }
  render() {
    return (
      <div className="Leader">
        <header className="Leader-header">


            <span>CEO: {this.props.leader.name} </span>
            <span>Attack: {this.props.leader.attack} </span>
            <span>Defense: {this.props.leader.defense} </span>
            <span>HP: {this.props.leader.health_points} </span>
            <Button
            onClick={() => this.handleBattleClick(this.props.leader)}
            id="battleButton" fixed="right">Battle!</Button>
            </header>
            </div>
          )
        }
      }

export default Leader;
