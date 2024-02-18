import React from "react";
import "./Home.css";
import company from "../Home/company.JPG";
import { Link } from "react-router-dom";

const SRC =
  "https://img.freepik.com/free-vector/project-management-goal-completion-list-questionnaire-survey-answering-business-organization-tool_335657-3289.jpg?size=626&ext=jpg&ga=GA1.1.51789250.1707655726&semt=sph";

const SRC2 =
  "https://img.freepik.com/free-vector/man-holding-clock-time-management-concept_23-2148823171.jpg?size=626&ext=jpg&ga=GA1.1.51789250.1707655726&semt=sph";

const Home = () => {
  return (
    <>
      <div className="flex-column">
        <div className="home d-flex justify-content-center align-items-center flex-row">
          <div className="container d-flex justify-content flex-column ml-4">
            <h1>
              Organize Life <br />
              One Task at a Time.
            </h1>
            <p>
              Become focused, Organized and calm with <br />
              TODOist. The World's #1 task manager Application.
            </p>
            <Link
              to="/signin"
              className="nav-link active btn-start w-25 px-3 mt-4"
            >
              Let's Organise &rarr;
            </Link>
          </div>
          <img
            src={SRC}
            className="mr-4"
            alt="Nature"
            style={{ maxWidth: "500px", maxHeight: "500px" }}
          />
        </div>
      </div>
      <div className="flex-column">
        <div className="home d-flex justify-content-center align-items-center flex-row">
          <img
            src={SRC2}
            className="mr-4"
            alt="Nature"
            style={{ maxWidth: "500px", maxHeight: "500px" }}
          />
          <div className="container d-flex justify-content flex-column ml-4 text-right mr-4">
            <p className="high-text">In it for the long haul</p>
            <h1>
              A Task manager you <br />
              can Trust for Life
            </h1>
            <p>
              We built this over years of hardwork <br />
              Your goals are out goals and let's get those Done !
            </p>
          </div>
        </div>
      </div>
      <div className="flex-column margin-top-40px">
        <div className="home justify-content-center align-items-center mt-4">
          <p className="text-center flex-column">
            10 million+ people and teams trust their sanity and productivity to
            TODOist
          </p>
          <p className="text-center flex-column">
            <img src={company} />
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
