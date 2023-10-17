import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const Todo = ({ task, toggleCompleted, handleDelete, updateTodo }) => {
  return (
    <li
      onClick={() => toggleCompleted(task.id)}
      className={`list-group-item rounded d-flex justify-content-between mb-3 ${
        task.completed ? "bg-success completed" : "bg-info"
      }`}
    >
      {task.task}
      <div>
        <FaEdit
          color="#02182B"
          className="mx-3"
          onClick={() => updateTodo(task.id)}
        />
        <FaTrash color="#D7263D" onClick={() => handleDelete(task.id)} />
      </div>
    </li>
  );
};

export default Todo;
