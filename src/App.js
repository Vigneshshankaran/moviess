import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddMovies from './AddMovies';
import MovieList from './MovieList';
import ErrorPage from './ErrorPage';
import { InitialMovies } from './InitialMovies';
import { BottomNavigation, BottomNavigationAction, Box, Link } from '@mui/material';
// import RestoreIcon from '@mui/icons-material/Restore';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Welcome from './Welcome';
// import HomeRounded from '@mui/icons-material/HomeRounded';
import Header from './Components/Header';
import Form from './Components/Form';
import TodoList from './Components/TodoList';



export default function App() {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];

  const [moviesList, setMoviesList] = useState(InitialMovies);

  const [value, setValue] = React.useState(0);
  const [input, setInput] =useState("");
  const [todos, setTodos] =useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);

  return (
  <div className="App">
   
     <Router>
     <Box sx={{ width: 500 }} style={{width:'100%'}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        style={{border:'2px solid lightgray', borderRadius:'10px', marginBottom:'50px', paddingTop:'25px'}}
      >
      <Link href="/" underline="none"> Home <BottomNavigationAction label="Home" /></Link>
       <Link href="/movie-list/add-movies" underline="none"> Add Movies <BottomNavigationAction label="Add Movies"  /></Link>
        <Link href="/movie-list" underline="none"> Movie List <BottomNavigationAction label="Movie List"  /></Link>
        <Link href="/todo-list" underline="none"> Todo List <BottomNavigationAction label="Movie List"  /></Link>
      </BottomNavigation>
    </Box>
       <Routes>
         <Route path="/" element={<Welcome />}/>
         <Route path="/movie-list/add-movies" element={<AddMovies moviesList={moviesList} setMoviesList={setMoviesList}  />}/>
         <Route path="/movie-list" element={<MovieList movies={moviesList} />}/>
         <Route path="*" element={<ErrorPage />}/>
         <Route path="/todo-list" element={<Header />}/>
         <Route path="/form" element={<Form input={input} setInput={setInput} todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo}/>}/>
         <Route path="/todolist" element={<TodoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />}/>
       </Routes>
     </Router>
    
  </div>
   );
  
}

