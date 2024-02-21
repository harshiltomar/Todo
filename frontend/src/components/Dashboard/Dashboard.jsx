import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./Dashboard.css";
import axios from "axios";
import Sidebar from "../Sidebar";
import { MdEdit } from "react-icons/md";

let id = sessionStorage.getItem("id");
let toUpdateArray = [];

const Dashboard = () => {
  const [Inputs, setInputs] = useState({ title: "", body: "" });
  const [Array, setArray] = useState([]);

//   useEffect(() => {
//     if (id) {
//       const fetch = async () => {
//         await axios
//           .get(`http://localhost:3000/api/v2/getTasks/${id}`)
//           .then((response) => {
//             setArray(response.data.list);
//           });
//       };
//       fetch();
//     }
//   }, [submit]);

  return (
    <>
      <div className="todo d-flex">
        <div class="col-2 sidebar">
          <Sidebar/>
        </div>
        <ToastContainer />
        <div className="todo-main container d-flex align-items-center my-4 col-7 flex-column">
          <p className="mt-4">Your Task Dashboard ✨</p>
          <div className="d-flex flex-column todo-inputs-div w-lg-50 w-100 p-1 mt-4 p-4">
            <p>Total Tasks</p>
            <h4>43</h4>
          </div>
          <div className="d-flex flex-column todo-inputs-div w-lg-50 w-100 p-1 mt-4 p-4">
            <p>Tasks Completed</p>
            <h4>31</h4>
          </div>
          <div className="d-flex todo-inputs-div w-lg-50 w-100 p-1 mt-4 p-4">
            <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2566/2566166.png"
              alt="Generic placeholder image"
              className="img-fluid"
            />
            </div>
            <div className="d-flex space-between">
              <div className="flex-grow-1">
                <div className="d-flex">
                  <h5 className="mb-1 mr-4">Harshil Tomar</h5>
                  <MdEdit />
                </div>
                <p className="mb-2 pb-1 work">Software Engineer</p>
                <div className="d-flex justify-content-start rounded-3 p-2 mb-2 div2">
                  <div>
                    <p className="small text-muted mb-1">Articles</p>
                    <p className="mb-0">41</p>
                  </div>
                  <div className="px-3">
                    <p className="small text-muted mb-1">Followers</p>
                    <p className="mb-0">976</p>
                  </div>
                  <div>
                    <p className="small text-muted mb-1">Rating</p>
                    <p className="mb-0">8.5</p>
                  </div>
                </div>
                <div className="d-flex pt-1">
                  <button
                    type="button"
                    className="btn btn-outline-primary mr-2"
                  >
                    Male
                  </button>
                  <button type="button" className="btn btn-primary ml-2">
                    Age: 22
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

