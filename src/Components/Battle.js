import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom'

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
  maxWidth: 1000,
  maxHeight: 700,
  minHeight: 300,
  margin: '0 auto',
  padding: 30,
  position: "relative"
};

const footerStyle = {
  position: "absolute",
  bottom: 20
};

class Battle extends React.Component {

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
      let hurtLeaderDifference = spyObj.attack - leaderObj.defense
      hurtLeaderDifference = hurtLeaderDifference * Math.floor(Math.random() * Math.floor(4))
      leaderObj.health_points = leaderObj.health_points - hurtLeaderDifference
      if(leaderObj.attack < spyObj.defense){
      let hurtSpyDifference = Math.abs(leaderObj.attack - spyObj.defense)
      hurtSpyDifference = hurtSpyDifference * Math.ceil(Math.random() * Math.ceil(6))
      spyObj.health_points = spyObj.health_points - hurtSpyDifference}
      else if (spyObj.defense === leaderObj.attack){
      let hurtSpyDifference = 0.5
      hurtSpyDifference = Math.ceil(hurtSpyDifference * Math.ceil(Math.random() * Math.ceil(2)))
      spyObj.health_points = spyObj.health_points - hurtSpyDifference
      }
      else if (leaderObj.health_points < 1 || this.props.battle[1].health_points < 1){
        alert('Bro! You live here!')
        this.setState({
          spyHealth: []
        })
      }
      else if (spyObj.health_points < 1 || this.props.battle[0].health_points < 1){
        alert('Membership cancelled :(')
        this.props.history.push("/")
        alert('Please refresh the page!')
      }
      else {
      let hurtSpyDifference =  Math.abs(spyObj.defense - leaderObj.attack)
      hurtSpyDifference = hurtSpyDifference * Math.ceil(Math.random() * Math.ceil(1))
      spyObj.health_points = spyObj.health_points - hurtSpyDifference
      let hurtLeaderDifference = leaderObj.defense - spyObj.attack
      hurtLeaderDifference = hurtLeaderDifference * Math.floor(Math.random() * Math.floor(2))
      leaderObj.health_points = leaderObj.health_points - hurtLeaderDifference
    }
    this.setState({
      leaderHealth: leaderObj.health_points,
      spyHealth: spyObj.health_points
    })
    if (leaderObj.health_points < 1 || this.props.battle[1].health_points < 1){
      alert('Bro! You live here!')
      this.setState({
        spyHealth: [spyObj.health_points = 125]
      })
    }
    else if (spyObj.health_points < 1 || this.props.battle[0].health_points < 1){
      alert('Membership cancelled :(')
      this.props.history.push("/")
      alert('Please refresh the page!')
    }
    } //closes the if statement on line 44
    else if (leaderObj.health_points < 1 || this.props.battle[1].health_points < 1){
      alert('Bro! You live here!')
      this.setState({
        spyHealth: [spyObj.health_points = 125]
      })
    }
    else if(spyObj.attack < leaderObj.defense){
      let hurtLeaderDifference = leaderObj.defense - spyObj.attack
      hurtLeaderDifference = hurtLeaderDifference * Math.ceil(Math.random() * Math.ceil(2))
      leaderObj.health_points = leaderObj.health_points - hurtLeaderDifference
      let hurtSpyDifference = Math.abs(leaderObj.attack - spyObj.defense)
      hurtSpyDifference = hurtSpyDifference * Math.ceil(Math.random() * Math.ceil(6))
      spyObj.health_points = spyObj.health_points - hurtSpyDifference
      this.setState({
        leaderHealth: leaderObj.health_points,
        spyHealth: spyObj.health_points
      })
      if (leaderObj.health_points < 1 || this.props.battle[1].health_points < 1){
        alert('Bro! You live here!')
        this.setState({
          spyHealth: [spyObj.health_points = 125]
        })
      }
      else if (spyObj.health_points < 1 || this.props.battle[0].health_points < 1){
        alert('Membership cancelled :(')
        this.props.history.push("/")
        alert('Please refresh the page!')
      }
    }
    else {
      let hurtLeaderDifference = leaderObj.defense - spyObj.attack
      hurtLeaderDifference = hurtLeaderDifference + 1 * Math.ceil(Math.random() * Math.ceil(2))
      leaderObj.health_points = leaderObj.health_points - hurtLeaderDifference
      if(leaderObj.attack > spyObj.defense){
      let hurtSpyDifference = leaderObj.attack - spyObj.defense
      hurtSpyDifference = hurtSpyDifference * Math.ceil(Math.random() * Math.ceil(3))
      spyObj.health_points = spyObj.health_points - hurtSpyDifference}
      else if (spyObj.defense === leaderObj.attack){
      let hurtSpyDifference = 0.5
      hurtSpyDifference = Math.ceil(hurtSpyDifference * Math.ceil(Math.random() * Math.ceil(2)))
      spyObj.health_points = spyObj.health_points - hurtSpyDifference
      this.setState({
      leaderHealth: leaderObj.health_points,
      spyHealth: spyObj.health_points
        })
      }
      else if (leaderObj.health_points < 1 || this.props.battle[1].health_points < 1){
        alert('Bro! You live here!')
        this.setState({
          spyHealth: [spyObj.health_points = 125]
        })
      }
      else if (spyObj.health_points < 1 || this.props.battle[0].health_points < 1){
        alert('Membership cancelled :(')
        this.props.history.push("/")
        alert('Please refresh the page!')
      }
      else {
      let hurtSpyDifference =  spyObj.defense - leaderObj.attack
      hurtSpyDifference = hurtSpyDifference * Math.ceil(Math.random() * Math.ceil(3))
      spyObj.health_points = spyObj.health_points - hurtSpyDifference
      this.setState({
      leaderHealth: leaderObj.health_points,
      spyHealth: spyObj.health_points
    })}
    }
} //closes the engage function on line 38
  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  }
  render() {
    if (this.props.show) {
      return null;
    }

    return (
      <div>
      {this.state.leaderHealth[0] ? null :
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
      </div>}
      </div>
    )
  }
}

export default withRouter(Battle);

Battle.propTypes = {
  onClose: PropTypes.func.isRequired
}
