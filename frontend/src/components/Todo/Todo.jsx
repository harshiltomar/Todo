import React, { useState } from "react";
import "./Todo.css";
import TodoCards from "./TodoCards";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Update from "./Update";

const Todo = () => {
  const [Inputs, setInputs] = useState({ title: "", body: "" });
  const [Array, setArray] = useState([]);

  const show = () => {
    document.getElementById("textarea").style.display = "block";
  };

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };

  const submit = () => {
    if (Inputs.title === "" || Inputs.body === "") {
      toast.error("Either Title or Body is Empty !");
    } else {
      console.log(Inputs);
      setArray([...Array, Inputs]);
      setInputs({ title: "", body: "" });
      toast.success("Your Task is Added");
      toast.error("Task is added but not Saved! Please Signup/ SignIn");
    }
  };

  const del = (id) => {
    const newArray = [...Array];
    newArray.splice(id, 1);
    setArray(newArray);
  };

  const dis = (value) => {
    console.log(value);
    document.getElementById("todo-update").style.display = value;
  };

  return (
    <>
      <div className="todo">
        <ToastContainer />
        <div className="todo-main container d-flex justify-content-center align-items-center my-4 flex-column">
          <div className="d-flex flex-column todo-inputs-div w-lg-50 w-100 p-1">
            <input
              type="text"
              placeholder="TITLE"
              className="my-2 p-2 todo-inputs"
              onClick={show}
              name="title"
              value={Inputs.title}
              style={{ borderBottom: "1px solid black" }}
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
          </div>
          <div className="d-flex justify-content-end">
            <button className="home-btn px-2 py-1" onClick={submit}>
              Add Task &rarr;
            </button>
          </div>
        </div>
        <div className="todo-body">
          <div className="container-fluid">
            <div className="row">
              {Array &&
                Array.map((item, index) => (
                  <div className="col-lg-3 mx-5 my-2" key={index}>
                    <TodoCards
                      title={item.title}
                      body={item.body}
                      id={index}
                      delid={del}
                      display={dis}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="todo-update" id="todo-update">
        <div className="container update">
          {" "}
          <Update display={dis} />
        </div>
      </div>
    </>
  );
};

export default Todo;

//21.01
