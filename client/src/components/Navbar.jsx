import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav
      className="navbar navbar-expand-md bg-orange text-uppercase fixed-top"
      id="mainNav"
    >
      <div className="container">
        <Link to="/" className="navbar-brand">
          Catch 'em all
        </Link>
        <button
          className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          MENU <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-0 mx-lg-1">
              <Link
                to="/"
                className="nav-link py-3 px-0 px-lg-3 rounded"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            {props.user && props.user.role === "admin" && (
              <li className="nav-link py-3 px-0 px-lg-3 rounded">
                <Link
                  to="/adminmessaging"
                  className="nav-link py-3 px-0 px-lg-3 rounded"
                >
                  Messaging
                </Link>
              </li>
            )}
            <li className="nav-item mx-0 mx-lg-1">
              <Link
                to="/calendar"
                className="nav-link py-3 px-0 px-lg-3 rounded"
              >
                Calendar
              </Link>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <Link
                to="/counter"
                className="nav-link py-3 px-0 px-lg-3 rounded"
              >
                Counter
              </Link>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <Link to="/users" className="nav-link py-3 px-0 px-lg-3 rounded">
                Users
              </Link>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <Link
                to="/statistics"
                className="nav-link py-3 px-0 px-lg-3 rounded py-3 px-0 px-lg-3 rounded"
              >
                Statistics
              </Link>
            </li>
            {(props.user && (
              <li className="nav-item mx-0 mx-lg-1">
                <Link
                  to="/login"
                  className="nav-link py-3 px-0 px-lg-3 rounded"
                  onClick={props.onSignOut}
                >
                  Sign out
                </Link>
              </li>
            )) || (
              <>
                <li className="nav-item mx-0 mx-lg-1">
                  <Link
                    to="/login"
                    className="nav-link py-3 px-0 px-lg-3 rounded"
                  >
                    Log in
                  </Link>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <Link
                    to="/signup"
                    className="nav-link py-3 px-0 px-lg-3 rounded"
                  >
                    Sign up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
