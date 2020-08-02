import React, { Component } from "react";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [1, 2, 3, 4, 5],
    };
  }
  render() {
    return (
      <main className="container main-container cart-items">
        {this.getRow()}
      </main>
    );
  }
  getRow() {
    {
      let products = this.props.products;
      let productsLength = products.length;
      if (!productsLength) {
        return false;
      }
      var selected_items = [];
      var total_selected = 0;
      var total_amount = 0;
      for (var i = 0; i < productsLength; ++i) {
        if (products[i]["selected"] == 1) {
          selected_items[i] = products[i]["id"];
          total_selected++;
          total_amount = total_amount + products[i]["total_amount"];
        }
      }

      if (total_selected == 0) {
        return <Redirect to="/" />;
      }

      return (
        <div>
          {this.props.products.map((data, i) => {
            return this.getLists(data, i);
          })}
          <div className="row cart-item-list">
            <div className="col-8"></div>
            <div className="col-2">
              <b>Grand Total</b>
            </div>
            <div className="col-2">
              <b>{total_amount}</b>
            </div>
          </div>
        </div>
      );
    }
  }

  getLists(data, i) {
    if (data.selected === 0) {
      return false;
    }
    return (
      <div className="row cart-item-list" key={i}>
        <div className="col-2">
          <img
            src="http://localhost/test/daru/images/1.jpg"
            className="cart-image img-responsive"
          />
        </div>
        <div className="col-3">
          <div className="item-name-desc">
            {data.id} {data.quantity} {data.name}
          </div>
          <div className="item-name-price">Rs. {data.price}</div>
        </div>
        <div className="col-5">
          <div className="amount">Amount</div>

          <button
            className="add_button"
            onClick={() => {
              this.props.lessQuantity(data.id);
            }}
          >
            -
          </button>
          <input
            type="text"
            width="50"
            className="quanity-input"
            onChange={() => {}}
            value={data.quantity}
          />
          <button
            className="add_button"
            onClick={() => {
              this.props.addQuantity(data.id);
            }}
            value="1"
          >
            +
          </button>
        </div>

        <div className="col-1">
          <div className="total-title">Total</div>
          <div className="total">{data.total_amount}</div>
        </div>
        <div className="col-1">
          <a
            href="/#"
            className="delete_link"
            onClick={(e) => {
              e.preventDefault();
              this.props.SelectDeselect(data.id, true);
            }}
          >
            <img src="/delete.png" />
          </a>
        </div>
      </div>
    );
  }
}

export default Cart;
