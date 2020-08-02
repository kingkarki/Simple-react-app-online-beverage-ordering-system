import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";
function useQuery() {
  let location = useLocation();
  return location.pathname;
}
function Header() {
  let query = useQuery();
  return (
    <div className="top-bar">
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/#" style={{ color: "#a53343" }}>
          <img src="/logo.png" height="30" />
          Online Liquor Shop
        </a>
      </nav>

      <div className="second-nav">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <Link to="/" className="back">
                <h5 className={query === "/" ? "selected_nav" : null}>
                  कुन दारु?
                </h5>
              </Link>
            </div>
            <div className="col-4">
              <h5 className={query === "/cart" ? "selected_nav" : null}>
                कति?
              </h5>
            </div>
            <div className="col-4">
              <h5 className={query === "/address" ? "selected_nav" : null}>
                ठेगाना
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
