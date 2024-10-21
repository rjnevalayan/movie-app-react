import { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import { Container, Box, Typography } from '@mui/material';
import axios from "axios";
import SearchComponent from "./components/SearchComponent";

import "./css/style.css"

export default function App() {

  // const [movies, setMovies] = useState([
  //   {
  //       Title: 'Minions',
  //       Year: '1977',
  //       imdbID: 'tt0076759',
  //       Type: 'movie',
  //       Poster:
  //           'https://m.media-amazon.com/images/M/MV5BODI4NzMyNjE0MF5BMl5BanBnXkFtZTgwMTcwNzI0MzE@._V1_SX300.jpg',
  //   },
  //   {
  //       Title: 'Star Wars: Episode V - The Empire Strikes Back',
  //       Year: '1980',
  //       imdbID: 'tt0080684',
  //       Type: 'movie',
  //       Poster:
  //           'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  //   },
  //   {
  //       Title: 'Star Wars: Episode VI - Return of the Jedi',
  //       Year: '1983',
  //       imdbID: 'tt0086190',
  //       Type: 'movie',
  //       Poster:
  //           'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  //   },
  // ]);

  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState('batman'); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchInput, setSearchInput] = useState('')
  // const [filteredMovies, setFilteredMovies] = useState([])

  useEffect(() => {

    axios({
      url: `https://www.omdbapi.com/?s=${query}&apikey=5b7da36`,
      method: 'GET',
    })
      .then((response) => {
        if (response.data.Response === 'True') {
          setMovies(response.data.Search); // Should be an array
          // setFilteredMovies(response.data.Search)
        } else {
          setError(response.data.Error);
        }
      })
  }, [query]);

  const searchItems = (value) => {
    setQuery(value); // Update the query state with the input value
  };
  const filteredMovies = movies.filter((movie) =>
    movie.Title.toLowerCase().includes(query.toLowerCase())
  );

  // const searchMovies = (searchValue) => {
  //   setSearchInput(searchValue)

  //   setFilteredMovies(
  //     movies.filter((movie) => {
  //       console.log("Hellow")
  //       return movie.Title.toLowerCase().includes(searchValue.toLowerCase())
  //     })
  //   )
  // }

  return (

    <Container maxWidth="250" style={{ padding: 0, backgroundColor: 'rgba(24, 24, 24, 1)' }}>
      <SearchComponent 
        onChange={(e) => searchItems(e.target.value)}
        
        />
      {/* {loading && <Typography>Loading...</Typography>} */}
      {/* {error && <Typography color="error">{error}</Typography>} */}
      {/* <Box className="movie-app" display="flex" flexWrap="wrap" >
        {Array.isArray(filteredMovies) && filteredMovies.map((movie) => (
          <MovieList key={movie.imdbID} movie={movie} />
        ))}
      </Box> */}
    </Container>
  );
}
