import React, { Component } from 'react'
import bigboi from '../images/bigbot1.jpg'
import bigboi2 from '../images/bigbot2.jpg'
import bots from '../images/botbattle.jpg'
import comingsoon from '../images/comin-soon-logo.jpg'
export default class AboutUs extends Component {
  render() {
    return (
      <form>
        <center><img src={bots}/></center>
        <h3>About Flatline Robotics</h3>
        Flatline Robotics (FR) is a new venture established to provide entertainment services in the form of robot combat events.
        FR will provide a safe and secure environment for competitors and spectators to enjoy robotic combat events. 
        Utilizing state of the art technology, FR will provide an engaging, interactive, and safe experience for participants.
<p>
  <br></br>
  <p>Our robots range from small kid friendly 3D printed models, all the way up to our big our spinner and pneumatic robots, with even more styles and variants coming soon!</p>
  <img src={bigboi}/>
  <br></br>
  <br></br>
  <img src={bigboi2}/>
  <br></br>
  <img src={comingsoon}/>
</p>
      </form>
    )
  }
}