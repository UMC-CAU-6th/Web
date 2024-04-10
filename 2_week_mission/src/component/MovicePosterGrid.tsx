import React, { useEffect, useState } from "react";
import "../style/MovicePosterGridStyles.css";

import { getMovies } from "../service/MovicePosterService";
import { Movies, Movie } from "../types";
import MovicePoster from "./MovicePoster";

const MovicePosterGrid = () => {
  const [movies, setMovies] = useState<Movies>({
    dates: {
      maximum: "",
      minimum: "",
    },
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  });

  useEffect(() => {
    setMovies(getMovies());
  }, []);

  return (
    <>
      {movies.results.map((movie: Movie) => (
        <MovicePoster {...movie} />
      ))}
    </>
  );
};

export default MovicePosterGrid;
