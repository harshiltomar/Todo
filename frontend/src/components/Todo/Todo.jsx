import React, { useState, useEffect } from "react";
import "./Todo.css";
import TodoCards from "./TodoCards";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Update from "./Update";
import axios from "axios";
import Sidebar from "../Sidebar";
import { BsAlarm, BsTag } from "react-icons/bs";

let id = sessionStorage.getItem("id");
let toUpdateArray = [];

const Todo = () => {
  const [Inputs, setInputs] = useState({ title: "", body: "" });
  const [Array, setArray] = useState([]);
  const [selectedTime, setSelectedTime] = useState(0);

  const times = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
  ];
  const show = () => {
    document.getElementById("textarea").style.display = "block";
  };

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };

  const handleTimeChange = (e) => {
    console.log(e);
    setSelectedTime(e);
  };

  const submit = async () => {
    if (Inputs.title === "" || Inputs.body === "") {
      toast.error("Either Title or Body is Empty !");
    } else {
      if (id) {
        await axios
          .post("http://localhost:3000/api/v2/addTask", {
            title: Inputs.title,
            body: Inputs.body,
            id: id,
          })
          .then((response) => {
            console.log(response);
          });
        setInputs({ title: "", body: "" });
        toast.success("Your Task is Added");
      } else {
        setArray([...Array, Inputs]);
        setInputs({ title: "", body: "" });
        toast.error("Task is added but not Saved! Please Signup/ SignIn");
      }
    }
  };

  const del = async (Cardid) => {
    console.log(id);
    if (id) {
      await axios
        .delete(`http://localhost:3000/api/v2/deleteTask/${Cardid}`, {
          data: { id: id },
        })
        .then(() => {
          toast.success("Your Task is Deleted");
        });
    } else {
      toast.error("Please SignUp or SignIn First!");
    }
  };

  const tick = async (Cardid) => {
    if (id) {
      await axios
        .post(`http://localhost:3000/api/v3/historyTask/${Cardid}`, {
          id: id,
        })
        .then(() => console.log("Task moved to history"));
    } else {
      console.log("Not able to move to history");
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
    if (id) {
      const fetch = async () => {
        await axios
          .get(`http://localhost:3000/api/v2/getTasks/${id}`)
          .then((response) => {
            setArray(response.data.list);
          });
      };
      fetch();
    }
  }, [submit]);

  return (
    <>
      <div className="todo d-flex">
        <div class="col-2 sidebar">
          <Sidebar />
        </div>
        <ToastContainer />
        <div className="todo-main container d-flex justify-content-center align-items-center my-4 col-7 flex-column">
          <p>Add Your Tasks Here ✨</p>
          <div className="d-flex flex-column todo-inputs-div w-lg-50 w-100 p-1 mt-4 p-2">
            <input
              type="text"
              placeholder="TITLE"
              className="my-2 p-2 todo-inputs"
              onClick={show}
              name="title"
              value={Inputs.title}
              style={{ borderBottom: "1px solid black " }}
              onChange={change}
            />
            <textarea
              id="textarea"
              type="text"
              placeholder="BODY"
              className="p-2 todo-inputs"
              name="body"
              value={Inputs.body}
              onChange={change}
            />
            <div className="d-flex">
              <select class="mt-2 p-2 dropdown">
                <option disabled selected>
                  <BsTag />
                  Select Tag
                </option>
                <option class="dropdown-options">Priority</option>
                <option class="dropdown-options">Normal</option>
                <option class="dropdown-options">Easy</option>
              </select>
              <select
                class="mt-2 mx-2 p-2 dropdown"
                onChange={(e) => handleTimeChange(e.target.value)}
              >
                <option disabled selected>
                  <BsAlarm />
                  Set Alarm
                </option>
                {times.map((time, index) => (
                  <option key={index} className="dropdown-options" value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <button className="home-btn px-2 py-1" onClick={submit}>
              Add Task &rarr;
            </button>
          </div>
          <div className="todo-main container d-flex justify-content-center align-items-center my-4 flex-column col-8">
            <div className="container-fluid">
              <div className="column jusity-content-center">
                {Array &&
                  Array.map((item, index) => (
                    <div class="mx-5 my-2" key={index}>
                      <TodoCards
                        title={item.title}
                        body={item.body}
                        id={item._id}
                        delid={del}
                        display={dis}
                        updateId={index}
                        tobeUpdate={update}
                        tickid={tick}
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

export default Todo;
