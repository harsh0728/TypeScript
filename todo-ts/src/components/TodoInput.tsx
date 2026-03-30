import React from "react";
import { useState } from "react";

interface Props {
  addTodo: (text: string,dueDate:string,category:string) => void;
}

export default function TodoInput({ addTodo }: Props) {
  const [text, setText] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text,dueDate,category);

    // Clear inputs after submit
    setText("");
    setDueDate("");
    setCategory("");
  };

  return (
    <form onSubmit={submit} style={styles.form}>
      <input
        style={styles.input}
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add a new todo..."
      />
      {/* Due date input */}
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      {/* Category input */}
      <input
        type="text"
        placeholder="Category (Work, Personal...)"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <button style={styles.btn}>Add</button>
    </form>
  );
}

const styles = {
  form: { display: "flex", gap: "10px" },
  input: { flex: 1, padding: "10px" },
  btn: { padding: "10px 20px", cursor: "pointer" },
};