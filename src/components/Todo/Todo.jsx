import React, { useState } from "react";
import "./Todo.css";
import axios from "axios";
axios.defaults.withCredentials = true;

function Todo() {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");

  function handleClick(e) {
    e.preventDefault();
    console.log(title, description);

    axios
      .post("http://127.0.0.1:3001/todo/api/u1/register", {
        title,
        description,
      })
      .then((result) => console.log("reselte", result))
      .catch((err) => console.log("err", err));
  }

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <div className="todo-container">
        <input
          type="text"
          id="new-task"
          placeholder=" Title"
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          type="text"
          id="new-task"
          placeholder="Add a new task"
          onChange={(e) => {
            setdescription(e.target.value);
          }}
        />
        <button className="button-9" onClick={handleClick}>
          Add
        </button>

        <ul id="task-list"></ul>
      </div>
    </div>
  );
}

export default Todo;


// const token = "your-authentication-token";

// localStorage.setItem("authToken", token);