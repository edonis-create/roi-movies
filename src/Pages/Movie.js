import { useParams } from "react-router-dom";
import useMovie from "../hooks/useMovie";
import MovieDetails from "../components/MovieDetails/MovieDetails";

const Movie = () => {
  const { id } = useParams();
  const movie = useMovie(id);

  return <MovieDetails movie={movie} />;
};

export default Movie;
