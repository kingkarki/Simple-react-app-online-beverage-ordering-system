import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "../css/App.css";
import "../css/Mobile.css";
import Header from "./header";
import Body from "./body";
import Footer from "./footer";
import Cart from "./cart";
import Address from "./address";
import Confirmation from "./confirmation";
import Thankyou from "./thankyou";

const axios = require("axios");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { products: {}, user: {} };
    this.SelectDeselect = this.SelectDeselect.bind(this);
    this.addQuantity = this.addQuantity.bind(this);
    this.lessQuantity = this.lessQuantity.bind(this);
    this.setUserdata = this.setUserdata.bind(this);
  }
  getUrl() {
    return window.location.pathname;
  }
  componentWillMount = () => {
    axios
      .get("https://thenextcoders.com/daru/api.php")
      .then((response) => this.setState({ products: response.data }));
    this.setState({ location: this.getUrl() });
  };

  SelectDeselect(productId, warning = false) {
    if (warning) {
      var con = window.confirm("Are you sure to delte this item?");
      if (!con) {
        return false;
      }
    }
    let products = this.state.products;
    let value = products[productId]["selected"] === 1 ? 0 : 1;
    products[productId]["selected"] = value;
    products[productId]["quantity"] = 1;
    products[productId]["total_amount"] = products[productId]["price"];
    this.setState(products);
  }

  addQuantity(productID) {
    let products = this.state.products;
    products[productID]["quantity"]++;
    products[productID]["total_amount"] =
      products[productID]["quantity"] * products[productID]["price"];
    this.setState(products);
  }

  lessQuantity(productID) {
    let products = this.state.products;
    if (products[productID]["quantity"] === 1) {
      return false;
    }
    products[productID]["quantity"]--;
    products[productID]["total_amount"] =
      products[productID]["quantity"] * products[productID]["price"];
    this.setState(products);
  }

  setUserdata(userData) {
    let products = this.state.products;
    this.setState({ user: {} }, () => {
      this.setState({ user: userData }, () => {
        console.log(Object.keys(this.state.user).length);
      });
    });
  }

  render() {
    return (
      <Router>
        {Object.keys(this.state.user).length != 0 ? (
          <Redirect to="/confirmation" />
        ) : null}

        <Header />

        <Switch>
          <Route path="/cart">
            <Cart
              products={this.state.products}
              addQuantity={this.addQuantity}
              lessQuantity={this.lessQuantity}
              SelectDeselect={this.SelectDeselect}
            />
          </Route>

          <Route path="/address">
            <Address
              products={this.state.products}
              setUserdata={this.setUserdata}
            />
          </Route>
          <Route path="/confirmation">
            <Confirmation
              products={this.state.products}
              user={this.state.user}
            />
          </Route>
          <Route path="/thankyou">
            <Thankyou />
          </Route>
          <Route path="/">
            <Body
              products={this.state.products}
              SelectDeselect={this.SelectDeselect}
            />
          </Route>
        </Switch>

        <Footer location={this.state.location} />
      </Router>
    );
  }
}

export default App;
