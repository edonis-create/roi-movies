import axios from "axios";
import { useEffect, useState } from "react";

const useMovie = (id) => {
  const [movie, setMovie] = useState({});

  const getMovie = () => {
    axios
      .get(`http://www.omdbapi.com/?apikey=9e286438&i=${id}`) //100ms
      .then((res) => setMovie(res.data));
  };

  useEffect(() => {
    getMovie();
  }, [id]);

  return movie;
};
export default useMovie;
