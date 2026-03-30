// import React, { useState } from "react";
// import TodoItem from "./TodoItem";
// import { Todo } from "../types/todo";

// interface Props {
//   todos: Todo[];
//   toggleTodo: (id: string) => void;
//   removeTodo: (id: string) => void;
//   editTodo: (id: string, text: string) => void;
//   //setTodos: (t: Todo[]) => void; // needed for drag and drop
//   reorderTodos: (start: number, end: number) => void; // NEW: drag & drop
// }

// export default function TodoList({ todos, toggleTodo, removeTodo, editTodo, reorderTodos }: Props) {
//   const [search, setSearch] = useState("");

//   // Filter by search
//   const filtered = todos.filter((t) =>
//     t.text.toLowerCase().includes(search.toLowerCase())
//   );

//   // Drag & Drop Handlers
//   const handleDragStart = (e: React.DragEvent, id: string) => {
//     e.dataTransfer.setData("todo-id", id);
//   };

//   const handleDrop = (e: React.DragEvent, targetId: string) => {
//     const draggedId = e.dataTransfer.getData("todo-id");

//     if (!draggedId) return;

//     const dragged = todos.find((t) => t.id === draggedId)!;
//     const target = todos.find((t) => t.id === targetId)!;

//     // Swap their order
//     const updated = todos.map((t) => {
//       if (t.id === dragged.id) return { ...t, order: target.order };
//       if (t.id === target.id) return { ...t, order: dragged.order };
//       return t;
//     });

//     // Re-sort based on updated order
//     updated.sort((a, b) => a.order - b.order);

//     setTodos(updated);
//   };

//   return (
//     <>
//       {/* Search Input */}
//       <input
//         type="text"
//         placeholder="Search todos..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       <ul className="todo-list">
//         {filtered.map((todo) => (
//           <div
//             key={todo.id}
//             draggable
//             onDragStart={(e) => handleDragStart(e, todo.id)}
//             onDragOver={(e) => e.preventDefault()}
//             onDrop={(e) => handleDrop(e, todo.id)}
//           >
//             <TodoItem
//               todo={todo}
//               toggleTodo={toggleTodo}
//               removeTodo={removeTodo}
//               editTodo={(t) => editTodo(t.id, t.text)}
//             />
//           </div>
//         ))}
//       </ul>
//     </>
//   );
// }

// const styles = {
//   list: { listStyle: "none", padding: 0, marginTop: "20px" },
// };

// components/TodoList.tsx
import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { Todo } from "../types/todo";

interface Props {
  todos: Todo[];
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
  editTodo: (id: string, text: string) => void;
  reorderTodos: (start: number, end: number) => void; // NEW: drag & drop
}

export default function TodoList({
  todos,
  toggleTodo,
  removeTodo,
  editTodo,
  reorderTodos,
}: Props) {
  
  // Track the index of the item being dragged
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);

  /**
   * Triggered when dragging starts
   */
  const handleDragStart = (index: number) => {
    setDraggingIndex(index);
  };

  /**
   * Prevent default so "drop" event works
   */
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  /**
   * Handle dropping item on a new position
   */
  const handleDrop = (index: number) => {
    if (draggingIndex === null) return;

    reorderTodos(draggingIndex, index);
    setDraggingIndex(null);
  };

  return (
    <ul style={styles.list}>
      {todos
        .sort((a, b) => a.order - b.order) // ensure correct display order
        .map((todo, index) => (
          <li
            key={todo.id}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(index)}
            style={{
              ...styles.dragItem,
              opacity: draggingIndex === index ? 0.5 : 1,
            }}
          >
            <TodoItem
              todo={todo}
              toggleTodo={toggleTodo}
              removeTodo={removeTodo}
              editTodo={editTodo}
            />
          </li>
        ))}
    </ul>
  );
}

const styles = {
  list: {
    listStyle: "none",
    padding: 0,
    marginTop: "20px",
  },
  dragItem: {
    marginBottom: "10px",
    cursor: "grab",
  },
};