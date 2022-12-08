import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import basic1 from '../images/basic1.png'
import basic2 from '../images/basic2.PNG'
import advanced1 from '../images/advanced1.png'
import advanced2 from '../images/advanced2.png'
import delux1 from '../images/delux1.png'
import delux2 from '../images/delux2.png'
import bigbang1 from '../images/bigbang1.png'
import bigbang2 from '../images/bigbang2.png'
export default class KidsParty extends Component {
  render() {
    return (
      <form>
        <br>
        </br>
        <br>
        </br>
        <center><h1>Kids Party Info</h1></center>

        <p>
          <div class="columns">
            <div class="column">
              <img src={basic1}/>
            </div>
            <div class="column">
            
              <h5><strong><center>Basic Party</center></strong></h5>
              <ul>
              Up to 16 participants
              <br></br>
              Minimum age is 7
              <br></br>
              Robots: 8
              <br></br>
              Hosts: 1
              <br></br>
              Arenas: 1
              <br></br>
              Duration: 2 Hours
              <br></br>
              Party Hours: 11 AM / 3.30 PM Sat & Sun
            </ul>
              </div>
            <div class="column">
            <h5><strong><center>$350</center></strong></h5>
                <img src={basic2} />
            </div>
          </div>
          Our most popular birthday (or other party type!) package
          Sixteen kids experience a robot war in your living room
        </p>
        <p>
          <a class="btn btn-outline-dark"   role="button">
          <Link to={'/contactus'}>Select Package</Link>
          </a>
        </p>
        
        <p>
          <div class="columns">
            <div class="column"><img src={delux1} /></div>
            <div class="column">
              <ul>
              <h5><strong><center>Deluxe Party</center></strong></h5>
              <br></br> 
              Up to 24 participants
              <br></br>
              Minimum age is 7
              <br></br>
              Robots: 10
              <br></br>
              Hosts: 1
              <br></br>
              Arenas: 1
              <br></br>
              Duration: 3 Hours
              <br></br>
              Party Hours: 3:30 PM Sat & Sun
              </ul>
            </div>
            <div class="column">
            <h5><strong><center>$450</center></strong></h5>
             <img src={delux2} /></div>
          </div>

          The Deluxe is ideal for larger groups.
          With extra Robots and an extra hour, we can accommodate the entire class.
        </p>
        <p>
        <a class="btn btn-outline-dark"  role="button">
        <Link to={'/contactus'}>Select Package</Link>
          </a>
        </p>
        
        <p>
          <div class="columns">
            <div class="column">
              <img src={advanced1}/>
            </div>
            <div class="column">
            <ul>
            <h5><strong><center>Advanced Party</center></strong></h5>
              <br></br>
              Up to 18 participants
              <br></br>
              Minimum age is 9
              <br></br>
              Robots: 14
              <br></br>
              Hosts: 1
              <br></br>
              Arenas: 1
              <br></br>
              Duration: 2 Hours
              <br></br>
              Party Hours: 11 AM / 3.30 PM
              <br></br>
               </ul>
              </div>
            <div class="column">
            <h5><strong><center>$450</center></strong></h5>
                <img src={advanced2} />
            </div>
          </div>
         Time to break out the big guns.
         We bring out our spinner and pneumatic robots take to the arena with more powerful weapon types.
 
        </p>
        <p>
          <a class="btn btn-outline-dark"   role="button">
          <Link to={'/contactus'}>Select Package</Link>
          </a>
        </p>
        
        <p>
          <div class="columns">
            <div class="column"><img src={bigbang1}/></div>
            <div class="column">
              <ul>
              <h5><strong><center>Big Bang Party</center></strong></h5>
              <br></br>
              Unlimited Guests
              <br></br>
              Robots: 20
              <br></br>
              Hosts: 2
              <br></br>
              Arenas: 2
              <br></br>
              Music: Dj Danyon
              <br></br>
              Duration: 4 Hours
              <br></br>
              Start Hour: anytime
              
              </ul>
              </div>
            <div class="column">
            <h5><strong><center>$1,750</center></strong></h5>
            <img src={bigbang2}/></div>
          </div>
          It's time to Party!
          Have DJ Danyon spin some tunes while you fight in our double arena's.
        </p>
        <p>
        <a class="btn btn-outline-dark"  role="button">
        <Link to={'/contactus'}>Select Package</Link>
          </a>
        </p>
      </form>
    )
  }
}
