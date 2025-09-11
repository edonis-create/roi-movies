import React, { useEffect, useState } from "react"; // 0.000001ms
import "./App.css"; //0.000001ms
import SearchBar from "./components/SearchBar/SearchBar"; //0.000001ms
import MovieList from "./components/MovieList/MovieList"; //0.000001ms
import axios from "axios";

//91ddcf74 OMDB api key
function App() {
  const [movies, setMovies] = useState([]);
  const [term, setTerm] = useState("superman");

  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?apikey=91ddcf74&s=${term}`)
      .then((res) => {
        setMovies(res.data.Search);
      });
  }, []);

  return (
    <div className="App">
      <div className="home">
        <h1>Movie Database</h1>
        <SearchBar />
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
