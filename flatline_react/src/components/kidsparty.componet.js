import React, { Component } from 'react'
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
            <ul>
              Basic Party
              <br></br>
              Up to 16 participants 
              minimum age is 7
              Robots: 8
              Hosts: 1
              Arenas: 1
              Duration: 2 Hours
              Start Hour: 11 AM / 3.30 PM Sat & Sun
              </ul>
              </div>
            <div class="column">
                <p>$350</p>
                <img src={basic2} />
            </div>
          </div>
          Our most popular birthday (or other party type!) package
          Sixteen kids experience a robot war in your living room
        </p>
        <p>
          <a class="btn btn-primary" href="/contactus" role="button">
            Select Package
          </a>
        </p>
        

        <p>
          <div class="columns">
            <div class="column"><img src={delux1} /></div>
            <div class="column">
              <ul>
              Deluxe Party
              <br></br> 
              Up to 24 participants
              minimum age is 7
              Robots: 10
              Hosts: 1
              Arenas: 1
              Duration: 3 Hours
              Start Hour: 3.30 PM Sat & Sun
              </ul>
            </div>
            <div class="column"><p>$ 450</p>
             <img src={delux2} /></div>
          </div>

          The Deluxe is ideal for larger groups
          With extra Robots and an extra hour, we can accommodate the entire class
        </p>
        <p>
        <a class="btn btn-primary" href="/contactus" role="button">
            Select Package
          </a>
        </p>
        
        <p>
          <div class="columns">
            <div class="column"><img src={advanced1}/></div>
            <div class="column">
              <ul>
              Advanced Party
              <br></br>
              Up to 18 participants
              minimum age is 9
              Robots: 14
              Hosts: 1
              Arenas: 1
              Duration: 2 Hours
              Start Hour: 11 AM / 3.30 PM
              </ul>
              Time to break out the big guns.
              As our spinner and pneumatic robots take to the arena with more powerful weapon types.</div>
            <div class="column"><p>$ 450</p>
            <img src={advanced2}/></div>
          </div>
        </p>
        <p>
        <a class="btn btn-primary" href="/contactus" role="button">
            Select Package
          </a>
        </p>
        
        <p>
          <div class="columns">
            <div class="column"><img src={bigbang1}/></div>
            <div class="column">
              <ul>
              Big Bang Party
              <br></br>
              unlimited guests
              Robots: 20
              Hosts: 2
              Arenas: 2
              Music: Dj Dan
              Duration: 4 Hours
              Start Hour: anytime
              </ul>
              </div>
            <div class="column"><p>$ 1,750</p>
            <img src={bigbang2}/></div>
          </div>
          It's time to Party!
          Have DJ Glitch spin some tunes while you fight in our double arena's.
        </p>
        <p>
        <a class="btn btn-primary" href="/contactus" role="button">
            Select Package
          </a>
        </p>
      </form>
    )
  }
}
