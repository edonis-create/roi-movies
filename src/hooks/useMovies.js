import axios from "axios";
import { useEffect, useState } from "react";

const useMovies = (searchTitle) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  const getMovies = () => {
    axios
      .get(`http://www.omdbapi.com/?apikey=9e286438&s=${searchTitle}`)
      .then((res) => setMovies(res.data.Search))
      .catch(() => {
        setError(true);
      });
  };

  useEffect(() => {
    getMovies();
  }, [searchTitle]);

  return {
    movies,
    error,
    setMovies,
  };
};

export default useMovies;
