import React from "react";
import "./Pricing.css";
import { Link } from "react-router-dom";

const BizPricing = () => {
  return (
    <div className="container-fluid">
      <p></p>
      <div className="container p-5">
        <div className="d-flex justify-content-center">
          {" "}
          <div className="col-lg-4 col-md-12 mb-4">
            <div className="card h-100 shadow-lg">
              <div className="card-body">
                <div className="text-center p-3">
                  <h5 className="card-title">Business Plan</h5>
                  <small>upto 20+ people</small>
                  <br />
                  <br />
                  <span className="h2">$70</span>/month
                  <br />
                  <br />
                </div>
                <p className="card-text">
                  Simplify and organize your team’s work, too with Ultra
                  features
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>{" "}
                  No limit on projects
                </li>
                <li className="list-group-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>{" "}
                  Lifetime history with AI suggestions
                </li>
                <li className="list-group-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>{" "}
                  Sub-task maker with collab features
                </li>
              </ul>
              <div className="card-body text-center">
                <Link to={`/payment/${70}`}>
                  <button
                    className="btn btn-outline-primary btn-lg"
                    style={{ borderRadius: "30px" }}
                  >
                    Select
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BizPricing;
