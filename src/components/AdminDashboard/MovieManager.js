import React, { useState } from "react";
import "./MovieManager.css";
import MovieForm from "./MovieForm";
import useMovies from "../../hooks/useMovies";
import axios from "axios";

const MovieManager = () => {
  const { movies, error } = useMovies("");
  const [showForm, setShowForm] = useState(false);
  const [currentMovie, setCurrentMovie] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddMovie = () => {
    setCurrentMovie(null);
    setShowForm(true);
  };

  const handleEditMovie = (movie) => {
    setCurrentMovie(movie);
    setShowForm(true);
  };

  const handleDeleteMovie = (id) => {
    if (window.confirm("Are you sure you want to delete this movie?")) {
      axios.delete(`http://localhost:3030/api/v1/movies/${id}`).then(() => {
        window.location.reload();
      });
    }
  };

  const handleSaveMovie = (movie) => {
    if (currentMovie) {
      // Edit existing movie
    } else {
      // Add new movie
      axios.post("http://localhost:3030/api/v1/movies", movie).then(() => {
        setShowForm(false);
        window.location.reload();
      });
    }
  };

  const handleCancelForm = () => {
    setShowForm(false);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      (movie.Title?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
      (movie.Year?.toString() || "").includes(searchTerm)
  );

  if (error) {
    return (
      <div className="movie-manager">
        <div className="error-message">
          <p>
            Error loading movies from server. Please check if your backend is
            running.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="movie-manager">
      {showForm ? (
        <MovieForm
          movie={currentMovie}
          onSave={handleSaveMovie}
          onCancel={handleCancelForm}
        />
      ) : (
        <>
          <div className="manager-header">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search movies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            <button onClick={handleAddMovie} className="add-button">
              Add New Movie
            </button>
          </div>

          {filteredMovies.length === 0 ? (
            <div className="no-movies">
              <p>No movies found. Add your first movie!</p>
            </div>
          ) : (
            <div className="movie-table-container">
              <table className="movie-table">
                <thead>
                  <tr>
                    <th>Poster</th>
                    <th>Title</th>
                    <th>Year</th>
                    <th>Genre</th>
                    <th>Rating</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredMovies.map((movie) => (
                    <tr key={movie.imdbID || movie.id}>
                      <td>
                        <img
                          src={
                            movie.Poster ||
                            "https://via.placeholder.com/60x90?text=No+Image"
                          }
                          alt={movie.Title}
                          className="movie-thumbnail"
                        />
                      </td>
                      <td>{movie.Title}</td>
                      <td>{movie.Year}</td>
                      <td>{movie.Genre}</td>
                      <td>{movie.imdbRating}</td>
                      <td>
                        <div className="action-buttons">
                          <button
                            onClick={() => handleEditMovie(movie)}
                            className="edit-button"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() =>
                              handleDeleteMovie(movie.imdbID || movie.id)
                            }
                            className="delete-button"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MovieManager;
