import React from "react";
import "./Todo.css";
import { MdDelete } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";
import { IoMdDoneAll } from "react-icons/io";

const TodoCards = ({
  title,
  body,
  id,
  delid,
  display,
  updateId,
  tobeUpdate,
}) => {
  return (
    <div className="p-3 todo-card">
      <div>
        <h5>{title}</h5>
        <p className="todo-card-p">{body.split("", 77)}...</p>
      </div>
      <div className="d-flex justify-content-around">
        <div
          className="d-flex justify-content-center align-items-center card-icon-head px-2 py-1 update-div"
          onClick={() => {
            display("block");
            tobeUpdate(updateId);
          }}
        >
          <div className="rounded-icon">
            <GrDocumentUpdate className="card-icons" /> Update
          </div>
        </div>
        <div
          className="d-flex justify-content-center align-items-center card-icon-head px-2 py-1 text-danger delete-div"
          onClick={() => {
            delid(id);
          }}
        >
          <MdDelete className="card-icons del" />
        </div>
        <div
          className="d-flex justify-content-center align-items-center card-icon-head px-2 py-1 complete-div"
          onClick={() => {
            delid(id);
          }}
        >
          <IoMdDoneAll className="" /> Done
        </div>
      </div>
    </div>
  );
};

export default TodoCards;
