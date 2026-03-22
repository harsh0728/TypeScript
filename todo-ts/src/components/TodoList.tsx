import React from "react";
import TodoItem from "./TodoItem";
import { Todo } from "../types/todo";

interface Props {
  todos: Todo[];
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
  editTodo: (id: string, text: string) => void;
}

export default function TodoList({ todos, toggleTodo, removeTodo, editTodo }: Props) {
  return (
    <ul style={styles.list}>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
}

const styles = {
  list: { listStyle: "none", padding: 0, marginTop: "20px" },
};