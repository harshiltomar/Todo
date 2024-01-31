import React from "react";
import "./Navbar.css";
import { FaSwatchbook } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#" style={{ color: "red" }}>
          <b>
            <FaSwatchbook /> TODOist
          </b>
        </a>

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
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link active" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link active" href="#">
                TODO
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link active btn-nav" href="#">
                Sign Up
              </a>
            </li>
            <li className="nav-item active mx-2">
              <a className="nav-link active btn-nav" href="#">
                Sign In
              </a>
            </li>
            <li className="nav-item active mx-2">
              <a className="nav-link active btn-nav" href="#">
                Logout
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                <img
                  className="img-fliud user-png"
                  alt="user icon"
                  src="https://cdn-icons-png.flaticon.com/512/2566/2566166.png"
                />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

//12.06
