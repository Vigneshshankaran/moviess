import React from 'react'
import Box from '@mui/material/Box';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { pink } from '@mui/material/colors';

const TodoList = ({todos, setTodos, setEditTodo}) => {
    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if(item.id === todo.id) {
                    return{...item, completed: !item.completed};
                }
                return item;
            })
        );

    };
    const handleDelete =({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    const handleEdit = ({id}) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);

    };
  return (
    //   <Box sx={{
    //           mt: '3px',
    //           height: 20,
    //           padding: '.15em 4px',
    //           fontWeight: 600,
    //           lineHeight: '15px',
    //           borderRadius: '2px',
    //         }} 
    //         style={{border:'2px solid gray', borderRadius:'10px',width:'20%', marginLeft:'37%', marginTop:'11px', padding:'20px'}}
    //         >
    <div className="todo-list">
       {todos.map((todo) =>(
           <li className='todo-list' key={todo.id} style={{listStyle:'decimal'}}>
               <input 
               type="text" 
               value={todo.title} 
               className={`list ${todo.completed ? "complete" : ""}`}
               onChange={(event) => event.preventDefault()}
               style={{padding:'10px',  marginTop:'10px'}}
               />
               
                  <CheckCircleOutlineRoundedIcon 
                     color='success' 
                     className='button-complete task-button' 
                     onClick={() => handleComplete(todo)}
                   >
                  </CheckCircleOutlineRoundedIcon>
                  <BorderColorRoundedIcon 
                      color='primary' 
                      className='button-edit task-button' 
                      onClick={() => handleEdit(todo)}
                      >
                   </BorderColorRoundedIcon>
                  <DeleteForeverRoundedIcon 
                    sx={{ color: pink[500] }} 
                    className='button-delete task-button' 
                    onClick={() => handleDelete(todo)}>
                 </DeleteForeverRoundedIcon>

               
           </li>
       )
       )}
    </div>
//   </Box>
  )
}

export default TodoList