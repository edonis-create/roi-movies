import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import MovieList from "./components/MovieList/MovieList";

//3f788d21 OMDB api key
function App() {
  const movies = [
    {
      imdbID: "1",
      Title: "Inception",
      Year: "2010",
      Poster:
        "https://resizing.flixster.com/RxGReKiNeLRDhz_1DDe-JiurSSY=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7825626_p_v8_ae.jpg",
    },
    {
      imdbID: "2",
      Title: "The Dark Knight",
      Year: "2008",
      Poster:
        "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg",
    },
    {
      imdbID: "3",
      Title: "Interstellar",
      Year: "2014",
      Poster:
        "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10543523_p_v8_as.jpg",
    },
    {
      imdbID: "4",
      Title: "The Godfather",
      Year: "1972",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
    },
    {
      imdbID: "5",
      Title: "The Shawshank redemption",
      Year: "1994",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    },
  ];

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
