import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./Signup.css";
import HeadingComp from "./HeadingComp";
import axios from "axios";
import { authActions } from "../../store/index.store";
import { Link } from "react-router-dom";
import { PiSparkleFill } from "react-icons/pi";

const Signin = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
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
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/signin",
        Inputs
      );
      console.log(response.data);
      if (response.data) {
        sessionStorage.setItem("id", response.data.user._id);
        dispatch(authActions.login());
        history("/todo");
      } else {
        console.log("Respone data or _id not found in the response. ");
      }
    } catch (error) {
      console.log("An error occured", error);
    }
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
              <div class="row mt-4">
                  <div class="col-md-12">
                    <a class="btn btn-lg btn-google btn-block text-uppercase btn-outline" href="#"><img src="https://img.icons8.com/color/16/000000/google-logo.png"/> Signup Using Google</a>
                  </div>
              </div>
              <p className="mt-4">
                New to TODOist? <Link to="/signup">SIGNUP<PiSparkleFill/></Link>
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 column d-flex justify-content align-items-center"
            style={{ height: "100vh" }}
          >
            <HeadingComp first="Sign" second="In" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
