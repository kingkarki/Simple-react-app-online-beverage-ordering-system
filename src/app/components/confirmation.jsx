import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
class Confirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <main className="container main-container">
        <div className="row">
          <div className="col-md-12">
            <h4 className="confirm_order_title">Please Confirm Your Order</h4>
            <div className="row">
              <div className="col-md-6 order-list-box">
                <div className="row confirm-row">
                  <div className="col-4">Item</div>
                  <div className="col-4">Price</div>
                  <div className="col-4">Total</div>
                </div>

                {this.getCartRow(this.props.products)}
              </div>
              <div className="col-md-6 ">
                <div className="row ">
                  <div className="col-6">
                    <b>Name</b>
                  </div>
                  <div className="col-6">{this.props.user.name}</div>
                  <div className="col-6">
                    <b>Address</b>
                  </div>
                  <div className="col-6">{this.props.user.address}</div>
                  <div className="col-6">
                    <b>Phone</b>
                  </div>
                  <div className="col-6">{this.props.user.phone}</div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12" style={{ textAlign: "center" }}>
                <Link
                  to="/thankyou"
                  className="btn btn-primary confirm_order_button"
                >
                  Next
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  getCartRow() {
    let products = this.props.products;
    if (!products.length) {
      return false;
    }
    var grand_total = 0;
    var return_data;
    return_data = products.map((data, i) => {
      if (data.selected === 0) {
        return false;
      }
      grand_total = grand_total + data.total_amount;
      var class_name = "";
      if (i % 2 == 0) {
        class_name += "row odd-row";
      } else {
        class_name += "row even-row";
      }
      return (
        <div className={class_name} key={i}>
          <div className="col-md-4">
            {data.i} {data.name}
          </div>
          <div className="col-md-4">{data.price}</div>
          <div className="col-md-4">{data.total_amount}</div>
        </div>
      );
    });
    if (grand_total === 0) {
      console.log("zero");
      return <Redirect to="/" />;
    }

    return this.getFinalList(return_data, grand_total);
  }
  getFinalList(data, grand_total) {
    return (
      <div>
        {data}
        <div className="row">
          <div className="col-md-8">
            <b>Grand Total</b>
          </div>
          <div className="col-md-4">
            <b>{grand_total}</b>
          </div>
        </div>
      </div>
    );
  }
}

export default Confirmation;

{
  /* <div className="row">
        <div className="col-md-4">
          <h6> Name</h6>
          Rushlan Vodka Rs. 800
        </div>
        <div className="col-md-4">
          <h6> Price Per Unit</h6>
          Rushlan Vodka Rs. 800
        </div>
        <div className="col-md-4">
          <h6> Price</h6>
          Rushlan Vodka Rs. 800
        </div>
      </div> */
}
