import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Menu.scss";

const Menu = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(false);
  useEffect(() => {
    // Check if the current location matches the profile link path
    if (location.pathname === "/clientData") {
      setActiveLink(true);
    } else {
      setActiveLink(false);
    }
  }, [location.pathname]);
  return (
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <Link to="/" className="brand-link">
          <div className="map-image">
            <img
              src="./imaratlogo.png"
              alt="Imarat Logo"
              className="brand-image img-circle elevation-3"
            />
          </div>
          {/* <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} /> */}
          {/* <span className="brand-text font-weight-light">AdminLTE 3</span> */}
        </Link>
        <div className="sidebar">
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item has-treeview menu-open">
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Dashboard v1</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/clientData" className="nav-link">
                  <i
                    className={`nav-icon fas fa-user-circle ${
                      activeLink ? "text-success" : ""
                    }`}
                  />
                  <p className={` ${activeLink ? "text-success" : ""}`}>
                    Clients
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/some" className="nav-link">
                  <i className="nav-icon fas fa-building" />
                  <p>
                    Leads
                    {/* <span className="right badge badge-danger">New</span> */}
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/something" className="nav-link">
                  <i className="nav-icon fas fa-th-list" />
                  <p>
                    Inventory
                    {/* <span className="right badge badge-danger">New</span> */}
                  </p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default Menu;
