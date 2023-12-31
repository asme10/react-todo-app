import React from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="container">
      <Header />
      <TodoList />
    </div>
  );
};

export default App;
