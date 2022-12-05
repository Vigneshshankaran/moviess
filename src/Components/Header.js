import React, { useState,  useEffect } from 'react'
import Form from './Form'
import TodoList from './TodoList';

const Header = () => {
   const initialState = JSON.parse(localStorage.getItem("todos")) || [];
    const [input, setInput] =useState("");
  const [todos, setTodos] =useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);

  return (
    <div>
    <h1 className="todo-heading">Todos List</h1>
    <div>
    <Form input={input} setInput={setInput} todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo}/>
    </div>
    <div>
        <TodoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo}/>
    </div>
    </div>
    
  )
}

export default Header