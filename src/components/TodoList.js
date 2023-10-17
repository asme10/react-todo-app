import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import UpdateForm from "./UpdateForm";
import { v4 as uuidv4 } from "uuid";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const newTodo = {
      id: uuidv4(),
      task: todo,
      completed: false,
      isEditing: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const toggleCompleted = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const updateTask = (task, id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              task,
              isEditing: !todo.isEditing,
            }
          : todo
      )
    );
  };

  const updateTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="card">
      <TodoForm addTodo={addTodo} />
      <ul className="list-group">
        {todos.map((todo) =>
          todo.isEditing ? (
            <UpdateForm updateTodo={updateTask} task={todo} key={todo.id} />
          ) : (
            <Todo
              task={todo}
              key={todo.id}
              toggleCompleted={toggleCompleted}
              handleDelete={handleDelete}
              updateTodo={updateTodo}
            />
          )
        )}
      </ul>
    </div>
  );
};

export default TodoList;
