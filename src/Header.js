import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  // render() {
  return (
    <div>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" data-widget="pushmenu" href="#">
              <i className="fas fa-bars" />
            </NavLink>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            {/* <a href="index3.html" className="nav-link">Home</a> */}
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            {/* <a href="#" className="nav-link">Contact</a> */}
          </li>
        </ul>
        {/* SEARCH FORM */}
        {/* <form className="form-inline ml-3">
      <div className="input-group input-group-sm">
        <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
        <div className="input-group-append"> 
          <button className="btn btn-navbar" type="submit">
            <i className="fas fa-search" />
          </button>
        </div>
      </div>
    </form> */}
        {/* Right navbar links */}
      </nav>
    </div>
  );
};
export default Header;
