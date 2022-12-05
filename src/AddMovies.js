import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useState } from "react";


export default function AddMovies({moviesList, setMoviesList}) {
  const [movie, setMovie] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [image, setImage] = useState("");
  return (
    <div>
<Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
   <TextField id="outlined-basic" label="Movie name" variant="outlined" value={movie} onChange={(event) => setMovie(event.target.value)} />
   <TextField id="outlined-basic" label="Rating" variant="outlined" value={rating} onChange={(event) => setRating(event.target.value)} />
   <TextField id="outlined-basic" label="Category" variant="outlined" value={summary} onChange={(event) => setSummary(event.target.value)} />
   <TextField id="outlined-basic" label="Summary" variant="outlined" value={image} onChange={(event) => setImage(event.target.value)} />
   <Button 
   style={{marginTop:'20px'}}
   variant="contained"
   onClick={() => {
        const newMovies = {
          movie,
          rating,
          summary,
          image,
        };
        setMoviesList([...moviesList, newMovies]);
      }}>
        Add Movies</Button>

</Box>
    </div>
  )
}
