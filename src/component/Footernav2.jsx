import React, { Component } from "react";

export default class Footernav2 extends Component {
  render() {
    return (
      <div>
        <nav className="navbar-footer2">
          <ul className="nav-links">
            <li>
              <i class="fa-solid fa-house"></i>
              <br />
              <a href="#home">Home</a>
            </li>
            <li>
              <i class="fa-solid fa-bars"></i>
              <br />
              <a href="#menu">Menu</a>
            </li>
            <li>
              <i class="fa-solid fa-tag"></i>
              <br />
              <a href="#offers">Offers</a>
            </li>
            <li>
              <i class="fa-solid fa-chess-king"></i>
              <br />
              <a href="#rewards">Rewards</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
