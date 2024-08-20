import React from "react";
import "./MovieList.css";

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.length === 0 ? (
        <p>No movies found. Please search for a movie.</p>
      ) : (
        movies.map((movie) => (
          <div key={movie.imdbID} className="movie-item">
            <img src={movie.Poster} alt={movie.Title} />
            <div className="movie-info">
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MovieList;
