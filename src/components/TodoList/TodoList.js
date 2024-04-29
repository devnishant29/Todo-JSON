import React from "react";

import "./TodoList.css";

import Pagination from "../Pagination/Pagination";
import TodoCard from "../TodoCard/TodoCard";

function TodoList({ todos, paginate, todosPerPage, totalTodos }) {
  return (
    <div>
      <div className="card-columns">
        {todos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      </div>
      <Pagination
        todosPerPage={todosPerPage}
        totalTodos={totalTodos}
        paginate={paginate}
      />
    </div>
  );
}

export default TodoList;
