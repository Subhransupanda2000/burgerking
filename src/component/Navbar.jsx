import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div id="navbar">
        <nav className="container">
          <ul>
            <li id="li1">
              <i className="fa-solid fa-bars"></i>
            </li>
            <li id="li2">BURGER KING</li>
            <li id="li3">
              <i class="fa-solid fa-user"></i>
            </li>
            <li id="li4">
              <button>view cart</button>
            </li>
          </ul>
          <hr />
        </nav>
      </div>
    );
  }
}
