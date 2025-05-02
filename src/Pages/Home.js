import { useState } from "react";
import MovieList from "../components/MovieList/MovieList";
import SearchBar from "../components/SearchBar/SearchBar";
import useMovies from "../hooks/useMovies";

const Home = () => {
  const [searchTitle, setSearchTitle] = useState("batman");
  const { movies, error } = useMovies(searchTitle);
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const addFavoriteMovies = (movie) => {
    setFavoriteMovies((prevState) => {
      return [...prevState, movie.imdbID];
    });
  };

  if (error) {
    return (
      <div className="App">
        <div className="home">
          <h2>Ooops 😅, an error occured please try again later...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="home">
      <h1>Movie Database</h1>
      <SearchBar setSearchTitle={setSearchTitle} />
      <MovieList
        movies={movies}
        addFavoriteMovies={addFavoriteMovies}
        favoriteMovies={favoriteMovies}
      />
    </div>
  );
};

export default Home;
