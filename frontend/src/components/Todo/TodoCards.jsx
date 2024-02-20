import React from "react";
import "./Todo.css";
import { MdDelete } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";
import { IoMdDoneAll } from "react-icons/io";
import { CiSquareCheck } from "react-icons/ci";

const TodoCards = ({
  title,
  body,
  id,
  delid,
  tickid,
  display,
  updateId,
  tobeUpdate,
}) => {
  return (
    <div className="d-flex justify-content-between p-2 todo-card">
      <div class="d-flex">
        <div
          class=""
          onClick={() => {
            tickid(id);
          }}
        >
          <CiSquareCheck style={{ color: "white" }} class="m-1 mr-2" />
        </div>
        <div className="d-flex flex-column">
          <h5 style={{ color: "white" }}>{title}</h5>
          {/* <p className="todo-card-p">{body.split("", 77)}...</p> */}
        </div>
      </div>
      <div className="d-flex">
        <div
          class="mx-3"
          onClick={() => {
            display("block");
            tobeUpdate(updateId);
          }}
        >
          <div className="rounded-icon">
            <GrDocumentUpdate
              className="card-icons"
              style={{ color: "white" }}
            />
          </div>
        </div>
        <div
          className=""
          style={{ color: "white" }}
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

export default TodoCards;
