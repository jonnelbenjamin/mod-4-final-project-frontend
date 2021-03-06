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
      <p>Have you ever had a WeWork membership? Have you spent multiple hours working inside of WeWork?</p>
      <p>Maybe you have spent so many hours working that your friends start to joke about how you live there!</p>
      <p>What if you actually could live in a WeWork? Why not all WeWorks?</p>
      <br></br>
      <p>Welcome to WeConquer!</p>
      <br></br>
      <p>Rendered on the map are various WeWork locations across the globe that you are technically a member of.</p>
      <p>You are now a spy enlisted by Flatiron School. Your job is to infiltrate each WeWork location and take out the leader, so you actually could live at that location.</p>
      <br></br>
      <p>1. Click on one of the pins rendered on the world map</p>
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
