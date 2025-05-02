import { Link } from "react-router-dom";

const MovieDetails = (props) => {
  return (
    <>
      <Link to="/">
        <button>Back</button>
      </Link>
      <div className="movie-details">
        <div className="movie-details-header">
          <div className="movie-poster">
            <img src={props.movie.Poster} alt={props.movie.Title} />
          </div>
          <h2>
            {props.movie.Title} - {props.movie.Year}
          </h2>
          <p>{props.movie.Director}</p>
        </div>
        <div className="movie-details-body">
          <p>
            <strong>Plot:</strong> {props.movie.Plot}
          </p>
          <p>
            <strong>Actors:</strong> {props.movie.Actors}
          </p>
          <p>
            <strong>Genre:</strong> {props.movie.Genre}
          </p>
          <p>
            <strong>Rated:</strong> {props.movie.Rated}
          </p>
          <p>
            <strong>imdb Rating:</strong> {props.movie.imdbRating}
          </p>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
