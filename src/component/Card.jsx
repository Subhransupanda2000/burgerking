import React, { Component } from "react";
export default class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="card-div">
        <img
          src={this.props.src}
          alt=""
          id="image"
          style={{
            width: 500,
          }}
        />
        <h1>{this.props.heading}</h1>
        <p>{this.props.para}</p>
        <button id="ord-btn">Order now</button>
      </div>
    );
  }
}
