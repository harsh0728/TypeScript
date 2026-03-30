import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useTodos } from './hooks/useTodos';
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import TodoFilters from "./components/TodoFilters";

function App() {
  const {todos,addTodo,toggleTodo,editTodo,removeTodo,reorderTodos }=useTodos();
  const [filter,setFilter]=useState("all");
  const [search, setSearch] = useState("");

  // Filter + Search
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active" && todo.completed) return false;
    if (filter === "completed" && !todo.completed) return false;

    if (filter === "today") {
      const today = new Date().toISOString().split("T")[0];
      return todo.dueDate === today;
    }

    if (search && !todo.text.toLowerCase().includes(search.toLowerCase()))
      return false;

    return true;
  });

  // const filteredTodos=todos.filter(todo=>{
  //   if (filter==="active") return !todo.completed;
  //   if (filter==="completed") return todo.completed;
  //   return true;
  // })

  return (
    <div style={styles.app}>
      <h1>Todo App (TypeScript)</h1>

      <TodoInput addTodo={addTodo} />

      {/* Search bar */}
      <input
        style={styles.search}
        placeholder="Search todos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <TodoFilters filter={filter} setFilter={setFilter} />

      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
        editTodo={editTodo}
        reorderTodos={reorderTodos} // IMPORTANT FOR DRAG & DROP
      />
    </div>
  );
}

const styles = {
  app: { maxWidth: "600px", margin: "0 auto", padding: "20px" },
  search: {
    width: "100%",
    padding: "10px",
    marginTop: "15px",
  },
};

export default App;
