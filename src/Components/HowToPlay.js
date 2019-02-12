import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'


export default class HowToPlay extends React.Component {

  render() {

    return (
      <div>
      <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>Have you ever had a WeWork membership? Have you spent multiple hours working inside of WeWork?</h1>
      <h1>Maybe you have spent so many hours working that your friends start to joke about how you live there!</h1>
      <h1>What if you actually could live in a WeWork? Why not all WeWorks?</h1>
      <p>Welcome to WeConquer</p>
      <h1>Rendered on the map are various WeWork locations across the globe that you are technically a member of.</h1>
      <h1>You are now a spy enlisted by Flatiron School. Your job is to infiltrate each WeWork location and take out the leader, so you actually could live at that location.</h1>
      <br></br>
      <h1>1. Click on one of the pins rendered on the world map</h1>
      <p>2. Compare the stats of the leader vs. your own. There is an element of chance in each battle mind you!</p>
      <p>3. If you feel comfortable engaging in battle then press the button and begin the engagement</p>
      <p>4. Once the leader's health reaches 0, you have conquered the location. If your health reaches 0, then the game ends. Remember! You can click the 'Run Away' button if you want to live to fight another day.</p>
      <p>5. You win the game once you have conquered all WeWork locations around the world. Only then will you truly live at WeWork! Good luck!</p>

  <div>
  <Link to="/worldmap"><Button
  bsstyle='success'
  >
        Let's Get Started!
        </Button>
        </Link>
      </div>
      </div>
      </div>
    )
  }
}

HowToPlay.propTypes = {
  onClose: PropTypes.func.isRequired
}
