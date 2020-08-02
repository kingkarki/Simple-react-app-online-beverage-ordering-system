import React, { Component } from "react";

class Thankyou extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <main className="container main-container">
        <div className="row">
          <div className="col-12" style={{ textAlign: "center" }}>
            <h1>Thank You For Your Order</h1>
            <h5>Our team will contact you within 15 minutes.</h5>
          </div>
        </div>
      </main>
    );
  }
}

export default Thankyou;
