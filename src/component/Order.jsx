import React, { Component } from "react";

export default class Order extends Component {
  render() {
    return (
      <>
        <div id="parent-div">
          <div>
            <h1 id="h">Start your BK® order.</h1>
          </div>
          <div>
            <button id="btn1">Order Delivery</button>

            <button id="btn2">Order Pickup</button>
          </div>
        </div>
        <div>
          <img
            src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/97876c636e357c965a26f603f0a10bf3dd0d3f29-800x450.png?w=1125&q=90&fit=max&auto=format"
            alt=""
            id="firstimage"
          />
        </div>
      </>
    );
  }
}
