import React from "react";
import "./Todo.css";
import { MdDelete } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";
import { IoMdDoneAll } from "react-icons/io";
import { CiSquareCheck } from "react-icons/ci";

const TodoHistoryCards = ({ title, body, id, delid }) => {
  return (
    <div className="d-flex justify-content-between p-3 todo-card-history">
      <div class="d-flex">
        <div className="d-flex flex-column">
          <h5>{title}</h5>
          <p className="todo-card-p">{body.split("", 77)}...</p>
        </div>
      </div>
      <div className="d-flex">
        <div
          className=""
          style={{ color: "red", opacity: 0.7 }}
          onClick={() => {
            delid(id);
          }}
        >
          <MdDelete className="card-icons" />
        </div>
      </div>
    </div>
  );
};

export default TodoHistoryCards;
