import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer class="text-center text-lg-start bg-body-tertiary mt-4">
        <div class="d-flex flex-column justify-content-center p-4 mt-4">
          <h1 className="mt-4">
            Gain calmness and clarity with the
            <br />
            worlds most beloved productivity app
          </h1>
          <h4 className="mt-4">
            337,000+ ★★★★★ reviews on Google Play and App Store
          </h4>
          <div className="text-center mt-4">
            {" "}
            <button className="active btn-start w-25">Start free</button>
          </div>{" "}
        </div>
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div class="me-5 d-none d-lg-block">
            <span></span>
          </div>
        </section>
        <section class="">
          <div class="container mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 text-left">
                <h4 class="fw-bold mb-4">TODOist™</h4>
                <p>
                  Join millions of people who organize work and life with
                  Todoist.
                </p>
              </div>
              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text-left">
                <h6 class="text-uppercase fw-bold mb-4">Features</h6>
                <p>
                  <a href="#!" class="text-reset">
                    How it Works
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    For Team
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Templates
                  </a>
                </p>
              </div>
              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 text-left">
                <h6 class="text-uppercase fw-bold mb-4">Techstack</h6>
                <p>
                  <a href="#!" class="text-reset">
                    MongoDB
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Reactjs
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Expressjs
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Nodejs
                  </a>
                </p>
              </div>
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text-left">
                <h6 class="text-uppercase fw-bold mb-4">Contact ME:</h6>
                <p>
                  <i class="fas fa-home me-3"></i> New York, NY 10012, US
                </p>
                <p>
                  <i class="fas fa-envelope me-3"></i> harshiltomar20@gmail.com
                </p>
                <p>
                  <i class="fas fa-phone me-3"></i> + 91 9958977078
                </p>
              </div>
            </div>
          </div>
        </section>
        <div class="text-center p-4 mt-4">
          Designed and Coded by&nbsp;
          <a
            class="text-reset fw-bold"
            href="https://linkedin.com/in/harshiltomar"
          >
            Harshil™✨
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
