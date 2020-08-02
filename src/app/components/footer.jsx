import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  useLocation,
  withRouter,
  useHistory,
} from "react-router-dom";
function useQuery() {
  let location = useLocation();
  return location.pathname;
}
function Footer() {
  let query = useQuery();
  if (query == "/address") {
    return false;
  }
  return (
    <div className="second-nav footer-nav">
      <div className="container-fluid">
        <div className="row">
          <Back />
          <Next />
        </div>
      </div>
    </div>
  );
}
function Next() {
  let query = useQuery();
  var link = "/";
  switch (query) {
    case "/":
      link = "/cart";
      break;
    case "/cart":
      link = "/address";
      break;
    case "/address":
      link = "0";
      break;
    case "/thankyou":
      return false;
      break;
    default:
      link = "/";
  }
  if (link === "0") {
    return false;
  }
  return (
    <div className="next-back">
      <Link to={link} className="next">
        Next
      </Link>
    </div>
  );
}
function Back() {
  let query = useQuery();
  let history = useHistory();
  if (query == "/address" || query == "/thankyou") {
    return false;
  }

  if (query === "/") {
    return <div className="next-back"></div>;
  }

  return (
    <div className="next-back">
      <a
        className="next"
        href="/#"
        onClick={(e) => {
          e.preventDefault();
          history.goBack();
        }}
      >
        Back
      </a>
    </div>
  );
}

export default withRouter(Footer);
