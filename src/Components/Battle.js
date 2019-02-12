import React from 'react';
import PropTypes from 'prop-types';

const backdropStyle = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(0,0,0,0.3)',
  padding: 50
}

const modalStyle = {
  backgroundColor: '#fff',
  borderRadius: 5,
  maxWidth: 500,
  minHeight: 300,
  margin: '0 auto',
  padding: 30,
  position: "relative"
};

const footerStyle = {
  position: "absolute",
  bottom: 20
};

export default class Battle extends React.Component {

  constructor(){
    super()
    this.state = {
      spyHealth: [],
      leaderHealth: []
    }
  }
  engage = (spyObj, leaderObj) => {
    this.setState({
      spyHealth: spyObj.health_points,
      leaderHealth: leaderObj.health_points
    })
    console.log('engaging in battle', spyObj, leaderObj)
    if(spyObj.attack > leaderObj.defense){
      leaderObj.health_points = leaderObj.health_points -2
      this.setState({
        leaderHealth: leaderObj.health_points
      })
    }
  }
  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  }
  render() {
    if (this.props.show) {
      return null;
    }

    return (
      <div style={backdropStyle} className="battleBox">
      <div style={modalStyle}>
      <h1>SPY: {this.props.battle[0].name}</h1>
      <h1>ATTACK: {this.props.battle[0].attack}</h1>
      <h1>DEFENSE: {this.props.battle[0].defense}</h1>
      <h1>HP: {this.props.battle[0].health_points}</h1>
      <div>
      <h1>LEADER: {this.props.battle[1].name}</h1>
      <h1>ATTACK: {this.props.battle[1].attack}</h1>
      <h1>DEFENSE: {this.props.battle[1].defense}</h1>
      <h1>HP: {this.props.battle[1].health_points}</h1>
      </div>
      <br></br>

      <div style={footerStyle}>
      <button
      onClick={() => this.engage(this.props.battle[0],this.props.battle[1])}
      >ENGAGE</button>

      </div>
      </div>
      <button
      onClick={(e) => {this.onClose(e)}}
      >
      Run Away!
      </button>
      </div>
    )
  }
}

Battle.propTypes = {
  onClose: PropTypes.func.isRequired
}
