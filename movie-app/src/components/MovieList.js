import React from 'react';
import { Box, Typography } from '@mui/material';
export default function MovieList({ movie }){

  return(
    <Box border={1} borderRadius={4} padding={2} margin={1} >
      <Typography variant="h6">{movie.Title}</Typography>
      <Typography>Year: {movie.Year}</Typography>
      <img src={movie.Poster} alt={movie.Title} style={{ width: '100%' }} />
    </Box>
  )
}