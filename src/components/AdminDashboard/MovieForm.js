import React, { useState, useEffect } from "react";
import "./MovieForm.css";

const MovieForm = ({ movie, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    id: "",
    Title: "",
    Year: "",
    Poster: "",
    Genre: "",
    Director: "",
    Actors: "",
    Plot: "",
    imdbRating: "",
    Runtime: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (movie) {
      setFormData({
        id: movie.imdbID || movie.id || "",
        Title: movie.Title || "",
        Year: movie.Year || "",
        Poster: movie.Poster || "",
        Genre: movie.Genre || "",
        Director: movie.Director || "",
        Actors: movie.Actors || "",
        Plot: movie.Plot || "",
        imdbRating: movie.imdbRating || "",
        Runtime: movie.Runtime || "",
      });
    }
  }, [movie]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.Title.trim()) {
      newErrors.Title = "Title is required";
    }

    if (!formData.Year.trim()) {
      newErrors.Year = "Year is required";
    } else if (!/^\d{4}$/.test(formData.Year)) {
      newErrors.Year = "Year must be a 4-digit number";
    }

    if (
      formData.imdbRating &&
      (parseFloat(formData.imdbRating) < 0 ||
        parseFloat(formData.imdbRating) > 10)
    ) {
      newErrors.imdbRating = "Rating must be between 0 and 10";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      onSave(formData);
    }
  };

  return (
    <div className="movie-form-container">
      <h2>{movie ? "Edit Movie" : "Add New Movie"}</h2>
      <form onSubmit={handleSubmit} className="movie-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="Title">Title*</label>
            <input
              type="text"
              id="Title"
              name="Title"
              value={formData.Title}
              onChange={handleChange}
              className={errors.Title ? "error" : ""}
            />
            {errors.Title && (
              <div className="error-message">{errors.Title}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="Year">Year*</label>
            <input
              type="text"
              id="Year"
              name="Year"
              value={formData.Year}
              onChange={handleChange}
              className={errors.Year ? "error" : ""}
            />
            {errors.Year && <div className="error-message">{errors.Year}</div>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="Poster">Poster URL</label>
            <input
              type="text"
              id="Poster"
              name="Poster"
              value={formData.Poster}
              onChange={handleChange}
            />
            {formData.Poster && (
              <div className="poster-preview">
                <img src={formData.Poster} alt="Movie poster preview" />
              </div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="Genre">Genre</label>
            <input
              type="text"
              id="Genre"
              name="Genre"
              value={formData.Genre}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="Director">Director</label>
            <input
              type="text"
              id="Director"
              name="Director"
              value={formData.Director}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="imdbRating">Rating (0-10)</label>
            <input
              type="text"
              id="imdbRating"
              name="imdbRating"
              value={formData.imdbRating}
              onChange={handleChange}
              className={errors.imdbRating ? "error" : ""}
            />
            {errors.imdbRating && (
              <div className="error-message">{errors.imdbRating}</div>
            )}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="Actors">Actors</label>
            <input
              type="text"
              id="Actors"
              name="Actors"
              value={formData.Actors}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="Runtime">Runtime</label>
            <input
              type="text"
              id="Runtime"
              name="Runtime"
              value={formData.Runtime}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="Plot">Plot</label>
          <textarea
            id="Plot"
            name="Plot"
            value={formData.Plot}
            onChange={handleChange}
            rows="4"
          ></textarea>
        </div>

        <div className="form-actions">
          <button type="button" className="cancel-button" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" className="save-button">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default MovieForm;
