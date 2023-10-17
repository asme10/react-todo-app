import React, { useState } from "react";

const UpdateForm = ({ updateTodo, task }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim() !== "") {
      updateTodo(input, task.id);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3 d-flex">
        <input
          value={input}
          className="form-control"
          placeholder="Update task"
          onChange={(e) => setInput(e.target.value)}
        />

        <button type="submit" className="btn btn-primary ms-2">
          Update
        </button>
      </div>
    </form>
  );
};

export default UpdateForm;
