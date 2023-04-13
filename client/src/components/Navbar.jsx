import React from "react";
import { Link } from "react-router-dom";
const hostName = "http://localhost:3000/";

const Navbar = () => {
  console.log(window.location.href);
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light ${
        window.location.href === hostName + "" ? "" : "ftco-navbar-light-2"
      }`}
      id="ftco-navbar"
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <span className="flaticon-lotus"></span>Energen
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="oi oi-menu"></span> Menu
        </button>
        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            <li
              className={`nav-item ${
                window.location.href === hostName + "" ? "active" : ""
              }`}
            >
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li
              className={`nav-item ${
                window.location.href === hostName + "about" ? "active" : ""
              }`}
            >
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li
              className={`nav-item ${
                window.location.href === hostName + "services" ? "active" : ""
              }`}
            >
              <Link to="/services" className="nav-link">
                Services
              </Link>
            </li>
            <li
              className={`nav-item ${
                window.location.href === hostName + "team" ? "active" : ""
              }`}
            >
              <Link to="/team" className="nav-link">
                Specialists
              </Link>
            </li>
            <li
              className={`nav-item ${
                window.location.href === hostName + "pricing" ? "active" : ""
              }`}
            >
              <Link to="/pricing" className="nav-link">
                Pricing
              </Link>
            </li>
            <li
              className={`nav-item ${
                window.location.href === hostName + "blogs" ? "active" : ""
              }`}
            >
              <Link to="/blogs" className="nav-link">
                Blog
              </Link>
            </li>
            <li
              className={`nav-item ${
                window.location.href === hostName + "contact" ? "active" : ""
              }`}
            >
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
