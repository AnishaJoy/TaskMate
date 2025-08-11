import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import logo from "../logo.png";

export default function Header(props) {
  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm"
      style={{
        background: "linear-gradient(135deg, #52ab98, #3d8b7c)",
        borderBottomLeftRadius: "15px",
        borderBottomRightRadius: "15px",
      }}
    >
      <div className="container">
        {/* Logo + App Title */}
        <NavLink
          className="navbar-brand d-flex align-items-center"
          to="/"
          style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: "1.2rem",
            letterSpacing: "0.5px",
          }}
        >
          <img
            src={logo}
            alt="Logo"
            width="40"
            height="40"
            className="me-2"
            style={{ borderRadius: "8px", background: "#fff", padding: "3px" }}
          />
          {props.title}
        </NavLink>

        {/* Toggle Button for Mobile View */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ border: "none" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Home Link */}
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  "nav-link px-3" + (isActive ? " fw-bold" : "")
                }
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "#e8f6f3",
                  borderRadius: "20px",
                  transition: "0.3s",
                  background: isActive ? "rgba(255, 255, 255, 0.2)" : "transparent",
                })}
              >
                Home
              </NavLink>
            </li>

            {/* About Link */}
            <li className="nav-item ms-2">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  "nav-link px-3" + (isActive ? " fw-bold" : "")
                }
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "#e8f6f3",
                  borderRadius: "20px",
                  transition: "0.3s",
                  background: isActive ? "rgba(255, 255, 255, 0.2)" : "transparent",
                })}
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// Default title if none is passed
Header.defaultProps = {
  title: "Todo App",
};

// Type-checking for props
Header.propTypes = {
  title: PropTypes.string,
};
