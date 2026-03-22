import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useTodos } from './hooks/useTodos';
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import TodoFilters from "./components/TodoFilters";

function App() {
  const {todos,addTodo,toggleTodo,editTodo,removeTodo}=useTodos();
  const [filter,setFilter]=useState("all");

  const filteredTodos=todos.filter(todo=>{
    if (filter==="active") return !todo.completed;
    if (filter==="completed") return todo.completed;
    return true;
  })

  return (
    <div style={styles.app}>
      <h1>Todo App (TypeScript)</h1>

      <TodoInput addTodo={addTodo} />

      <TodoFilters filter={filter} setFilter={setFilter} />

      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
        editTodo={editTodo}
      />
    </div>
  );
}

const styles = {
  app: { maxWidth: "600px", margin: "0 auto", padding: "20px" },
};

export default App;
