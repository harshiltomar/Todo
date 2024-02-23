import React, { useState, useEffect } from "react";
import TodoHistoryCards from "../TodoHistoryCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Update from "../Update";
import axios from "axios";
import "./History.css";
import { Link } from "react-router-dom";
import Sidebar from "../../Sidebar";

let id = sessionStorage.getItem("id");
console.log(id);
let toUpdateArray = [];

const History = () => {
  console.log(id);
  const [Inputs, setInputs] = useState({ title: "", body: "" });
  const [Array, setArray] = useState([]);

  const del = async (Cardid) => {
    if (id) {
      await axios
        .delete(`http://localhost:3000/api/v3/deleteHistoryTask/${Cardid}`, {
          data: { id: id },
        })
        .then(() => {
          toast.success("Your Task is Deleted");
        });
    } else {
      toast.error("Please SignUp or SignIn First!");
    }
  };

  const dis = (value) => {
    console.log(value);
    document.getElementById("todo-update").style.display = value;
  };

  const update = (value) => {
    toUpdateArray = Array[value];
  };

  useEffect(() => {
    const fetchHistoryTasks = async () => {
      await axios
        .get(`http://localhost:3000/api/v3/historyTask/${id}`, { id: id })
        .then((response) => {
          setArray(response.data.list);
          console.log(response.data.list);
        });
    };
    fetchHistoryTasks();
  }, []); // Run only once when component mounts

  return (
    <>
      <div className="todo d-flex">
        <div class="col-2 sidebar">
          <Sidebar />
        </div>
        <ToastContainer />
        <div className="todo-main container d-flex justify-content-center align-items-center my-4 col-7 flex-column">
          <p>Task History ✨</p>
          <div className="todo-main container d-flex justify-content-center align-items-center my-4 flex-column col-8">
            <div className="container-fluid">
              <div className="column jusity-content-center">
                {Array &&
                  Array.map((item, index) => (
                    <div class="mx-5 my-2" key={index}>
                      <TodoHistoryCards
                        class="todocard-history"
                        title={item.title}
                        body={item.body}
                        id={item._id}
                        delid={del}
                        display={dis}
                        updateId={index}
                        tobeUpdate={update}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="todo-update" id="todo-update">
        <div className="container update">
          {" "}
          <Update display={dis} update={toUpdateArray} />
        </div>
      </div>
    </>
  );
};

export default History;
