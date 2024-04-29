import React from "react";

import "./TodoCard.css";

const TodoCard = ({ todo }) => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="title">{todo.title}</h5>
        <p className="text">
          Status:{" "}
          {todo.completed ? (
            <h1 className="completed">Completed</h1>
          ) : (
            <h1 className="pending">Pending </h1>
          )}
        </p>
      </div>
    </div>
  );
};

export default TodoCard;
