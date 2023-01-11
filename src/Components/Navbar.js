import React from "react";
import "./Navbar.css";
import logo from "../Images/logo.jpg";

const Navbar = () => {
  return (
    <React.Fragment>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light  fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} height="40px" alt="logo" />
          </a>
          <div id="navbarText">
            <ul className="navbar-nav me-auto mb-2 ">
              <li className="nav-item">
                <span className="nav-link active" aria-current="page">
                  Home
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link aboutLink"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  About
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
