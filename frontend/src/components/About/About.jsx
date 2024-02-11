import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about d-flex justify-content-center align-items-center">
      <div className="flex-row">
        <div className="home d-flex justify-content-center align-items-center flex-row">
          <div className="container d-flex justify-content flex-column ml-4">
            <h1>About Us</h1>
            <p>
              TODOist is your ultimate task management solution, designed to
              enhance productivity and simplify your daily routines. We
              understand the challenges of modern life, and that's why we've
              created a powerful yet intuitive platform to help you organize
              your tasks effortlessly. Whether you're a professional juggling
              work commitments or a student keeping track of assignments,
              TODOist is here for you.
              <br />
              <br />
              Our user-friendly interface and seamless synchronization across
              devices ensure that you can manage your tasks anytime, anywhere.
              Say goodbye to stress and disorganization. TODOist is your
              personal assistant, guiding you towards a more focused and
              organized life. Join us in this journey towards productivity and
              let every task be a step towards a more fulfilling day!
            </p>
          </div>
          <img
            src="https://img.freepik.com/free-vector/task-management-abstract-concept-illustration_335657-2127.jpg?size=626&ext=jpg&ga=GA1.1.51789250.1707655726&semt=sph"
            className="mr-4"
            alt="Nature"
            style={{ maxWidth: "500px", maxHeight: "500px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
