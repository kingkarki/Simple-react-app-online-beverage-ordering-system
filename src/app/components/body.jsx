import React, { Component } from "react";
import Product from "./product";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <main className="container main-container">
        <div className="row">{this.getProduct()}</div>
      </main>
    );
  }

  getProduct() {
    if (this.props.products.length) {
      return this.props.products.map((prd) => {
        return (
          <Product
            key={prd.id}
            product={prd}
            SelectDeselect={this.props.SelectDeselect}
          />
        );
      });
    }
  }
}

export default Body;
