import React, {useEffect} from 'react'
import {v4 as uuidv4} from 'uuid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import { useEffect } from 'react';

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
    const updateTodo = (title, id, completed) => {
     const newTodo = todos.map((todo) => 
         todo.id === id ? {title, id, completed} : todo
     );
     setTodos(newTodo);
     setEditTodo("");
    };
    useEffect(() => {
        if(editTodo){
            setInput(editTodo.title);
        }else{
        setInput("")
        }
    }, [setInput, editTodo]);
const onInputChange=(event)=>{
       setInput(event.target.value);
    };
const onFormSubmit = (event) => {
       event.preventDefault();
        if(!editTodo){
        setTodos([...todos, {id:uuidv4(), title: input, completed: false}]);
        setInput("");
        } else{
            updateTodo(input, editTodo.id, editTodo.completed)
        }
       
    };
  return (
    <form onSubmit={onFormSubmit}>
        <TextField 
        type="text" 
        label="Task"
        id="outlined-size-small"
        placeholder="Enter a todo..." 
        className="task-input"
        value={input} 
        required
        onChange={onInputChange}
        />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button className='button-add' variant="contained" type="submit"> 
        {editTodo ? "OK" : "Add"}
        </Button>
    </form>
  )
}

export default Form