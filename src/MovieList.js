import { Box, Button, Grid } from '@mui/material'
import React, { useState } from 'react'
import Count from './Components/Count/Count';

export default function MovieList({movies}) {
    const [show, setShow] = useState(true);
  return (
    <div className="App">
         
    <h1 className='header'>Movie Ratings</h1>
      <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {movies.map(({movie, image, rating, category, cbfc, star, summary})=>{
          return(
            <Grid item xs={4}>
              <img className='image' src={image} alt={movie} />
              <h3>Movie: {movie}</h3>
              <p>Rating: {rating} </p>
              {/* <img className='star-rate' src={star} alt={movie}/> */}
              {/* <p>Category: {category}</p>
              <p>CBFC: {cbfc}</p> */}
              <div>
              {show ? <p >Summary: {summary}</p>: null }
                    <Button onClick={() => setShow(!show)}>more</Button>
              </div>
              <Count />
            </Grid>
          )
        }
      )}
     </Grid>
    </Box>
    {/* <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 3, md: 3 }}>
        {movies1.map((users)=>{
          const{movie1, img1, rating1, category1, cbfc1, star1, summary1} = users
         
           return(
             <Grid item xs={4}>
                <img className='image' src={img1} alt={movie1} />
                <h3>Movie: {movie1}</h3>
                <p>Rating: {rating1} </p>
                <img className='star-rate' src={star1} alt={movie1}/>
                <p>Category: {category1}</p>
                <p>CBFC: {cbfc1}</p>
                {show ? 
                <div>
                Summary: {summary1}...<Button onClick={() => setShow(true)}>more</Button>
              </div>
        : null }
              
                <Count/>
              </Grid>
            )
         }
       )}
     </Grid>
    </Box> */}
    </div>
  );
}
