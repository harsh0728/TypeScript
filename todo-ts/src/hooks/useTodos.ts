import { useLocalStorage } from "./useLocalStorage";
import { Todo } from "../types/todo";
import {v4 as uuid} from "uuid"

export function useTodos(){
    const [todos,setTodos]=useLocalStorage<Todo[]>("todos",[]); // doubt

    const addTodo=(text:string)=>{
        setTodos([...todos,{id:uuid(),text,completed:false}]) // doubt
    }

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

    return {todos,addTodo,toggleTodo,editTodo,removeTodo};
}