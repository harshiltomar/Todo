import React from "react";
import "./Home.css";

const SRC =
  "https://img.freepik.com/premium-vector/young-trendy-girl-is-stand-with-phone-her-hands-with-nature-leaves-communication-by-phone_78677-9012.jpg";

const Home = () => {
  return (
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
          <button className="btn btn-danger btn-start w-25">
            Get Started &rarr;
          </button>
        </div>
        <img src={SRC} className="mr-4" alt="Nature" />
      </div>
    </div>
  );
};

export default Home;
