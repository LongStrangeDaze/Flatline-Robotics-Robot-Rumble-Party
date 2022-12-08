import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import logo from '../images/flatlineicon.png'
import logo2 from '../images/flatlineicon1.png'

export default class Main extends Component {
  render() {
    return (
      <form>
        <center><img src={logo}/></center>
        <h3>Welcome to Robot Rumble Parties</h3>
        Are you tired of the reuglar kids parties?  Bounce houses?  Clowns? Mind numbing game trucks? Here at Robot Rumble Parties
        we offer hands on robot combat for all ages.  We come to you with fully built arenas, robots for all ages, and we handle everything
        from setting up, entertaining your guests with full on robot combat and various games.
        <br></br>
        <br></br>
        <center><strong>We offer very an experience like no other. Click the gear below to get started</strong></center>
        <br></br>
        <center><Link to={'/aboutus'}><img src={logo2}/></Link></center>
        <footer><h10>presented by Flatline Robotics</h10></footer>
  
<p>

</p>
      </form>
    )
  }
}