import React, { Component } from 'react'
export default class KidsParty extends Component {
  render() {
    return (
      <form>
        <br>
        </br>
        <br>
        </br>
        <h3>Kids Party Info</h3>

        <p>
          <div class="columns">
            <div class="column">
              basic1.png
            </div>
            <div class="column">
            <ul>
              Basic Party
              <br></br>
              Up to 16 participants, 
              minimum age is 7
              Robots: 8
              Hosts: 1
              Arenas: 1
              Duration: 2 Hours
              Start Hour: 11 AM / 3.30 PM Sat & Sun
              </ul>
              </div>
            <div class="column">
              <p>$350 basic2.png</p>
            </div>
          </div>
          Our most popular birthday (or other party type!) package
          Sixteen kids experience a robot war in your living room
        </p>
        <p>
          <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
            Select Package
          </a>
        </p>
        <div class="collapse" id="collapseExample">
          <div class="card card-body">
            {/* Add Form Data here  */}
          </div>
        </div>

        <p>
          <div class="columns">
            <div class="column">delux1.png</div>
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
            <div class="column"><p>$ 450 delux2.png</p></div>
          </div>

          The Deluxe is ideal for larger groups
          With extra Robots and an extra hour, we can accommodate the entire class
        </p>
        <p>
          <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
            Select Package
          </a>
        </p>
        <div class="collapse" id="collapseExample">
          <div class="card card-body">
            {/* Add Form Data here  */}
          </div>
        </div>
        <p>
          <div class="columns">
            <div class="column">advanced1.png</div>
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
            <div class="column"><p>$ 450 advanced2.png</p></div>
          </div>
        </p>
        <p>
          <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
            Select Package
          </a>
        </p>
        <div class="collapse" id="collapseExample">
          <div class="card card-body">
            {/* Add Form Data here  */}
          </div>
        </div>
        <p>
          <div class="columns">
            <div class="column">BigBang1.png</div>
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
            <div class="column">$ 1,750 BigBang2.png</div>
          </div>
          It's time to Party!
          Have DJ Glitch spin some tunes while you fight in our double arena's.
        </p>
        <p>
          <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
            Select Package
          </a>
        </p>
        <div class="collapse" id="collapseExample">
          <div class="card card-body">
            {/* Add Form Data here  */}
          </div>
        </div>
      </form>
    )
  }
}
