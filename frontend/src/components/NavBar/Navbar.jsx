import React from "react";
import "./Navbar.css";
import { FaSwatchbook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/" style={{ color: "red" }}>
          <b>
            <FaSwatchbook /> TODOist
          </b>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto ms-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link active" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link active" to="/todo">
                TODO
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link active btn-nav" to="/signup">
                Sign Up
              </Link>
            </li>
            <li className="nav-item active mx-2">
              <Link className="nav-link active btn-nav" to="/signin">
                Sign In
              </Link>
            </li>
            <li className="nav-item active mx-2">
              <Link className="nav-link active btn-nav" to="/">
                Logout
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="#">
                <img
                  className="img-fliud user-png"
                  alt="user icon"
                  src="https://cdn-icons-png.flaticon.com/512/2566/2566166.png"
                />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

//12.06
