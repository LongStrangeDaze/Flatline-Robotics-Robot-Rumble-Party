import React, { Component } from 'react'
import corp1 from '../images/corp1.png'
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
                  Basic Corporate Party/ ideal for holiday parties
                  <br></br>
                  1 - 4
                  <br></br>
                  Advanced Arenas
                  <br></br>
                  with automated Hazards
                  <br></br>
                  10 Combat Robots
                  <br></br>
                  per Arena
                  <br></br>
                  custom built robots by Flatline Robotics
                  <br></br>
                  1 Experienced Technician
                  <br></br>
                  Robot Combat Technician will train and coach your guests.
                </ul>
              </div>
              <div class="column">
              <p>
          <a class="btn btn-primary" href="/contactus" role="button">
            Select Package
          </a>
        </p>
                
              </div>
            </div>
            Flatline Robotics sends out one of our Senior Technicians along with our Advanced arena!
            They organize either a Tournament Bracket for you and your co-workers or Fair Style where we hold four-way rumble matches for anyone who wants to jump into the action!
          </p>
          



    
          </form>
          )
  }
}