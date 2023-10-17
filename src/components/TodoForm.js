import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      addTodo(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3 d-flex">
        <input
          value={input}
          className="form-control"
          placeholder="What is your plan today?"
          onChange={(e) => setInput(e.target.value)}
        />

        <button type="submit" className="btn btn-primary ms-2">
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
