import React, { Component } from 'react'
import corp1 from '../images/corp1.png'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
export default class CompanyEvents extends Component {
  render() {
    return (
    <form>
        <center><h1> Company Events</h1></center>

          <p>
            <div class="columns">
              <div class="column">
              <img src={corp1}/>
              </div>
              <div class="column">
                <ul>
                  <strong> Company and Team Building Events</strong>
                  <br></br>
                  <br></br>
                  Basic Corporate Party / Ideal for holiday parties
                  <br></br>
                  Advanced Arenas with automated Hazards
                  <br></br>
                  10 Combat Robots per Arena
                  <br></br>
                  1 Experienced Technician
                  <br></br>
                  Our Robot Combat Technician will train and coach your guests.
                </ul>
              </div>
              <div class="column">
              <p>
              <a class="btn btn-outline-dark"   role="button">
          <Link to={'/contactus'}>Select Package</Link>
          </a>
        </p>
                
              </div>
            </div>
            Flatline Robotics sends out our Senior Technicians along with our Advanced arena!
            They will organize a Tournament Bracket for you and your co-workers or Free For All where we hold four-way rumble matches for anyone who wants to jump into the action!
          </p>
          



    
          </form>
          )
  }
}