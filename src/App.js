import React, { useState, useEffect } from "react";
import axios from "axios";


import "bootstrap/dist/css/bootstrap.min.css";

import TodoList from "./components/TodoList/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage] = useState(10);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      setTodos(response.data);
    };
    fetchTodos();
  }, []);

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">To-do List</h1>
      <TodoList
        todos={currentTodos}
        paginate={paginate}
        todosPerPage={todosPerPage}
        totalTodos={todos.length}
      />
    </div>
  );
}

export default App;
