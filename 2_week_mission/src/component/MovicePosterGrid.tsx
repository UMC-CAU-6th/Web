import React, { useEffect } from "react";
import "../style/MovicePosterGridStyles.css";

import { getMovies } from "../service/MovicePosterService";
import { Movies } from "../types";

const MovicePosterGrid = () => {
  let movies: Movies;
  useEffect(() => {
    movies = getMovies();
  }, []);

  return <></>;
};

export default MovicePosterGrid;
