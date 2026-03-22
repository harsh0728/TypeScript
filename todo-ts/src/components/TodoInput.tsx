import React from "react";
import { useState } from "react";

interface Props {
  addTodo: (text: string) => void;
}

export default function TodoInput({ addTodo }: Props) {
  const [text, setText] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={submit} style={styles.form}>
      <input
        style={styles.input}
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add a new todo..."
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