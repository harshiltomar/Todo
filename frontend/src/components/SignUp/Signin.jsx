import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import HeadingComp from "./HeadingComp";
import axios from "axios";

const Signin = () => {
  const history = useNavigate();
  const [Inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };

  //SUBMIT CODE FOR BACKEND INTEGRATION
  const submit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/v1/signin", Inputs)
      .then((response) => {
        console.log(alert(response.data.message));
      });
  };

  return (
    <div className="signup">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 column d-flex justify-content align-items-center">
            <div className="d-flex flex-column  w-100 p-3">
              <input
                className="p-2  my-3 input-signup"
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={Inputs.email}
                onChange={change}
              />
              <input
                className="p-2 my-3 input-signup"
                type="password"
                name="password"
                placeholder="Enter Your Password"
                value={Inputs.password}
                onChange={change}
              />
              <button className="btn-signup p-2" onClick={submit}>
                Sign In
              </button>
            </div>
          </div>
          <div
            className="col-lg-4 column d-flex justify-content align-items-center"
            style={{ height: "100vh" }}
          >
            <HeadingComp first="Sign" second="Up" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
