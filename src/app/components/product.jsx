import React, { Component } from "react";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="col-md-2 col-4">
        <a
          href="/#"
          onClick={(e) => {
            e.preventDefault();
            this.props.SelectDeselect(this.props.product.id);
          }}
          className={this.getClassName(this.props.product.selected)}
        >
          <img
            src={this.props.product.image}
            className="product-image img-responsive"
          />
          <div className="product-name">
            {this.props.product.id} {this.props.product.name}
          </div>
          <div className="product-price">Rs. {this.props.product.price}</div>
        </a>
      </div>
    );
  }
  getClassName(selected) {
    let class_names = "product ";
    class_names += selected === 1 ? "selected" : "";
    return class_names;
  }
}

export default Product;
