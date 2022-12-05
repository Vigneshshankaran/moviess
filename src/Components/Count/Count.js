import ThumbDown from '@mui/icons-material/ThumbDown';
import ThumbUp from '@mui/icons-material/ThumbUp';
import { Button } from '@mui/material';
import React, { useState } from 'react'

export default function Count() {
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);
  return (
    <div>
   <Button 
      variant="outlined" 
      color="success"
      style={{marginRight:'10px', marginBottom:'10px'}}
      startIcon={<ThumbUp />}
      onClick={()=> {
        setLike(like + 1);
      }}
      >
        Like  {like}
    </Button>
        
       
   <Button 
      variant="outlined" 
      color="error"
      style={{marginBottom:'10px'}}
      startIcon={<ThumbDown />}
      onClick={()=> {
        setDislike(dislike + 1);
      }}
     >
       Dislike  {dislike}
    </Button>
    </div>
  )
}
