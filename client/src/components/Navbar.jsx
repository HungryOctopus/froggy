import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-orange text-uppercase fixed-top justify-content-around"
      id="mainNav"
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler text-uppercase rounded py-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target=".navbar-collapse"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          MENU
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="27"
            fill="currentColor"
            className="navbar-toggler-icon"
            viewBox="0 1 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>

        <div className="collapse navbar-collapse" id="navbarResponsive">
          <Link to="/" className="navbar-brand">
            RealFrogger
          </Link>

          <ul className="navbar-nav ms-auto mx-lg-3">
            <li className="nav-item mx-0 mx-lg-1">
              <Link to="/" className="nav-link py-3 px-1 px-lg-3 rounded">
                Home
              </Link>
            </li>
            {props.user && (
              <li className="nav-item mx-0 mx-lg-1">
                <Link
                  to="/users"
                  className="nav-link py-3 px-1 px-lg-3 rounded"
                >
                  volunteers
                </Link>
              </li>
            )}

            {props.user && (
              <li className="nav-item mx-0 mx-lg-1">
                <Link
                  to="/counter"
                  className="nav-link py-3 px-1 px-lg-3 rounded"
                >
                  Counter
                </Link>
              </li>
            )}

            {props.user && (
              <li className="nav-item mx-0 mx-lg-1">
                <Link
                  to="/statistics"
                  className="nav-link py-3 px-1 px-lg-3 rounded py-3 px-0 px-lg-3 rounded"
                >
                  Statistics
                </Link>
              </li>
            )}

            {props.user && (
              <li className="nav-item mx-0 mx-lg-1">
                <Link
                  to="/calendar"
                  className="nav-link py-3 px-1 px-lg-3 rounded"
                >
                  Latest
                </Link>
              </li>
            )}

            {!props.user && (
              <>
                <li className="nav-item mx-0 mx-lg-1">
                  <Link
                    to="/login"
                    className="nav-link py-3 px-1 px-lg-3 rounded"
                  >
                    Log in
                  </Link>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <Link
                    to="/signup"
                    className="nav-link py-3 px-1 px-lg-3 rounded"
                  >
                    Sign up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* ICONS */}

        {/* Admin messaging */}

        <div className="navbar">
          <ul className="navbar-nav ms-auto d-flex flex-row align-items-center justify-content-end">
            {props.user && props.user.role === 'admin' && (
              <li className="nav-item mx-0 mx-lg-0">
                <Link
                  to="/adminmessaging"
                  className="nav-link py-1 px-1 px-lg-2 rounded"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="24"
                    fill="currentColor"
                    className="bi bi-chat-right-text-fill"
                    viewBox="0 1 16 16"
                  >
                    <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353V2zM3.5 3h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z" />
                  </svg>
                </Link>
              </li>
            )}

            {/* Settings */}

            {props.user && (
              <li className="nav-item mx-0 mx-lg-0">
                <Link
                  to="/settings"
                  className="nav-link py-1 px-1 px-lg-2 rounded"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="24"
                    fill="currentColor"
                    className="bi bi-gear-wide-connected"
                    viewBox="0 1 16 16"
                  >
                    <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646.087.065-.087-.065z" />
                  </svg>
                </Link>
              </li>
            )}

            {/* Logout */}

            {props.user && (
              <li className="nav-item mx-0 mx-lg-0">
                <Link
                  to="/login"
                  className="nav-link py-1 px-1 px-lg-2 rounded"
                  onClick={props.onSignOut}
                >
                  <i className="fas fa-power-off"></i>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
