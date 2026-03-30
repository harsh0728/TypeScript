import React from "react";
import { useState } from "react";
import { Todo } from "../types/todo";

interface Props {
  todo: Todo;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
  editTodo: (id: string, text: string) => void;
}

export default function TodoItem({ todo, toggleTodo, removeTodo, editTodo }: Props) {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(todo.text);

  const handleEdit = () => {
    if (editing && value.trim()) {
      editTodo(todo.id, value);
    }
    setEditing(!editing);
  };

  return (
    <li style={styles.item}>
      {editing ? (
        <input value={value} onChange={e => setValue(e.target.value)} style={styles.input} />
      ) : (
        <span
          onClick={() => toggleTodo(todo.id)}
          style={{
            ...styles.text,
            textDecoration: todo.completed ? "line-through" : "none",
          }}
        >
          {todo.text}
        </span>
      )}

      {/* Bonus: display category */}
      {todo.category && <span className="tag">{todo.category}</span>}

      {/* Bonus: display due date */}
      {todo.dueDate && <small className="due">Due: {todo.dueDate}</small>}

      <button onClick={handleEdit} style={styles.btn}>
        {editing ? "Save" : "Edit"}
      </button>
      <button onClick={() => removeTodo(todo.id)} style={styles.delete}>
        Delete
      </button>
    </li>
  );
}

const styles = {
  item: { display: "flex", gap: "10px", alignItems: "center", marginBottom: "10px" },
  text: { flex: 1, cursor: "pointer" },
  input: { flex: 1, padding: "5px" },
  btn: { padding: "5px 10px", cursor: "pointer" },
  delete: { padding: "5px 10px", cursor: "pointer", color: "red" },
};