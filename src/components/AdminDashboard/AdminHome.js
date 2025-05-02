import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminHome.css";

const AdminHome = () => {
  const [stats, setStats] = useState({
    totalMovies: 0,
    recentMovies: [],
  });

  useEffect(() => {
    // Get movies from local storage
    const storedMovies = JSON.parse(
      localStorage.getItem("adminMovies") || "[]"
    );
    setStats({
      totalMovies: storedMovies.length,
      recentMovies: storedMovies.slice(-5).reverse(), // Get last 5 movies
    });
  }, []);

  return (
    <div className="admin-home">
      <div className="stats-cards">
        <div className="stat-card">
          <h3>Total Movies</h3>
          <div className="stat-value">{stats.totalMovies}</div>
        </div>
      </div>

      <div className="recent-section">
        <h2>Recently Added Movies</h2>
        {stats.recentMovies.length === 0 ? (
          <p className="no-data">No movies added yet</p>
        ) : (
          <div className="recent-movies">
            {stats.recentMovies.map((movie) => (
              <div className="recent-movie-card" key={movie.imdbID || movie.id}>
                <img
                  src={
                    movie.Poster ||
                    movie.poster ||
                    "https://via.placeholder.com/150x225?text=No+Image"
                  }
                  alt={movie.Title || movie.title}
                  className="recent-movie-poster"
                />
                <div className="recent-movie-info">
                  <h3>{movie.Title || movie.title}</h3>
                  <p>{movie.Year || movie.year}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminHome;
