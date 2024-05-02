import React, { useEffect, useState } from "react";
import "../style/MovicePosterGridStyles.css";

import { getMovies } from "../service/MovicePosterService";
import { Movies, Movie } from "../types";
import MovicePoster from "../component/MovicePoster";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGY5OWM3NzM2M2Q4YmYwNjVjZjZlMjEzMDFhMGY1NyIsInN1YiI6IjY2MzFmMjRlYTFjNTlkMDEyM2U2NjNiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6Bd2YsnxY8tMS7uDFzsWxY3adZ7zGppD5ZlCabk0a6Q",
  },
};

const MovicePosterGrid = ({ url }: { url: string }) => {
  const [movies, setMovies] = useState<Movies>({
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  });

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        return response;
      })
      .then((response) => {
        setMovies(response);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="poster-grid">
      {movies.results.map((movie: Movie) => (
        <MovicePoster {...movie} />
      ))}
    </div>
  );
};

export default MovicePosterGrid;
