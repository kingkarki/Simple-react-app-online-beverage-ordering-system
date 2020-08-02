import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class Address extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "",
        address: "",
        phone: "",
        valid: false,
      },
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.validate_me = this.validate_me.bind(this);
  }
  handleInputChange(event, key) {
    let user = this.state.user;
    user[key] = event.target.value;
    this.setState(user);
  }
  validate_me() {
    let user = this.state.user;
    if (user.name == "" || user.address == "" || user.form == "") {
      alert("All the fields are required.");
      return false;
    } else {
      user.valid = true;
      this.setState({ user: user });
    }
  }

  render() {
    let products = this.props.products;
    let productsLength = products.length;
    var total_selected = 0;
    for (var i = 0; i < productsLength; ++i) {
      if (products[i]["selected"] == 1) {
        total_selected++;
      }
    }
    if (this.state.user.valid) {
      return <Redirect to="thankyou" />;
    }

    return (
      <main className="container main-container">
        <div className="row">
          <div className="col-md-12">
            <h5
              style={{
                textAlign: "center",
                width: "100%",
                margin: 20,
              }}
            >
              Enter Your address
            </h5>

            <form
              className="form-horizontal"
              onSubmit={(e) => {
                e.preventDefault();
                // todo remaining to validate the form
                this.props.setUserdata(this.state.user);
              }}
            >
              <div className="form-group row">
                <div className="col-sm-2"></div>
                <label className="col-sm-2 control-label">Your Name</label>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name.."
                    value={this.state.user.name}
                    onChange={(e) => {
                      this.handleInputChange(e, "name");
                    }}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-2"></div>
                <label className="col-sm-2   control-label">Address</label>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your address.."
                    value={this.state.user.address}
                    onChange={(e) => {
                      this.handleInputChange(e, "address");
                    }}
                  />
                </div>
              </div>

              <div className="form-group row">
                <div className="col-sm-2"></div>
                <label className="col-sm-2   control-label">
                  Mobile Number.
                </label>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your mobile number.."
                    value={this.state.user.phone}
                    onChange={(e) => {
                      this.handleInputChange(e, "phone");
                    }}
                  />
                </div>
              </div>

              <div className="form-group row">
                <div className="col-sm-2"></div>
                <label className="col-sm-2   control-label"></label>
                <div className="col-sm-6">
                  <a
                    href="#/"
                    onClick={this.validate_me}
                    className="btn btn-primary confirm_order_button"
                  >
                    Confirm
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    );
  }
}

export default Address;
