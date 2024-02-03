import React from "react";
import "./Todo.css";

const Update = () => {
  return (
    <div className="p-5 update-div d-flex justify-content-center align-items-center flex-column">
      <h3>Update Your Task</h3>
      <textarea className="todo-inputs w-100 p-3" />
      <button className="btn btn-dark my-4">UPDATE</button>
    </div>
  );
};

export default Update;
