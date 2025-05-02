import React from "react";
import "./MovieList.css";
import { Link } from "react-router-dom";
import { ReactComponent as HeartIcon } from "../../assets/icons/heart.svg";

const MovieList = ({ movies, addFavoriteMovies, favoriteMovies }) => {
  return (
    <div className="movie-list">
      {movies.length === 0 ? (
        <p>No movies found. Please search for a movie.</p>
      ) : (
        movies.map((movie) => (
          <Link key={movie.imdbID} to={`/movies/${movie.imdbID}`}>
            <div className="movie-item">
              <img src={movie.Poster} alt={movie.Title} />
              <div className="movie-info">
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    addFavoriteMovies(movie);
                  }}
                  className={`movie-heart ${
                    favoriteMovies.includes(movie.imdbID) ? "red-heart" : ""
                  }`}
                >
                  <HeartIcon />
                </div>
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default MovieList;
