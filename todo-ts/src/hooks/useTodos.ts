import { useLocalStorage } from "./useLocalStorage";
import { Todo } from "../types/todo";
import {v4 as uuid} from "uuid"

export function useTodos(){
    const [todos,setTodos]=useLocalStorage<Todo[]>("todos",[]); // doubt

    // const addTodo=(text:string)=>{
    //     setTodos([...todos,{id:uuid(),text,completed:false}])
    // }
    const addTodo = (
    text: string,
    category?: string,
    dueDate?: string
  ) => {
    const newTodo: Todo = {
      id: uuid(),
      text,
      completed: false,
      category: category || "",
      dueDate: dueDate || "",
      order: todos.length, // new item always added at bottom
    };

    setTodos([...todos, newTodo]);
  };

    const toggleTodo=(id:string)=>{
        setTodos(todos.map(todo=>
        todo.id===id?{...todo,completed:!todo.completed}:todo // doubt why :todo at last
    ))}

    const editTodo=(id:string,text:string)=>{
        setTodos(todos.map(todo=>todo.id===id?{...todo,text}:todo))
    }
    const removeTodo=(id:string)=>{
        setTodos(todos.filter(todo=>todo.id!=id))
    }
    /**
   * DRAG & DROP REORDERING SUPPORT
   * Updates `order` values after drag & drop action.
   */
  const reorderTodos = (startIndex: number, endIndex: number) => {
    const updated = [...todos];

    // Remove dragged item
    const [moved] = updated.splice(startIndex, 1);

    // Insert at new position
    updated.splice(endIndex, 0, moved);

    // Update order numbers
    const withOrder = updated.map((todo, index) => ({
      ...todo,
      order: index,
    }));

    setTodos(withOrder);
  };

    return {todos,setTodos,addTodo,toggleTodo,editTodo,removeTodo,reorderTodos};
}