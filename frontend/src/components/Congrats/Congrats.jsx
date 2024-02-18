import React from "react";
import "./Congrats.css";

const Congrats = () => {
  return (
    <div className="about d-flex justify-content-center align-items-center">
      <div className="flex-row">
        <div className="home d-flex justify-content-center align-items-center flex-row">
          <div className="container d-flex justify-content flex-column ml-4">
            <h1>Congrats !</h1>
            <p>Welcome aboard to Team Todoist!</p>
            <p>Hope you accomplish tons of stuff with us!</p>
            <p>Here's what you can expect from Todoist:</p>
            <ul>
              <li>
                Effortlessly create and manage tasks, projects, and deadlines.
              </li>
              <li>
                Stay organized with color-coded labels, priority levels, and due
                dates.
              </li>
              <li>
                Sync your tasks across all your devices to stay productive
                anytime, anywhere.
              </li>
              <li>
                Collaborate with your team members by sharing tasks and
                projects.
              </li>
              <li>
                Unlock advanced features with Todoist Premium for even greater
                productivity.
              </li>
            </ul>
          </div>
          <img
            src="https://img.freepik.com/free-vector/businessman-sets-goals-runs-up-graph-columns-success-time-self-management-self-regulation-learning-self-organization-course-concept-illustration_335657-2070.jpg?w=996&t=st=1708259314~exp=1708259914~hmac=6fa3e816724632f1ba7363960d404b1f90d8a8b41b8cf73d444ddbf6dda280ab"
            className="mr-4"
            alt="Nature"
            style={{ maxWidth: "500px", maxHeight: "500px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Congrats;
