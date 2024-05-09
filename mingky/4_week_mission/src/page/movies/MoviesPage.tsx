import { useEffect, useState } from "react";
import "../../style/MoviesPageStyles.css";

import { Movies, Movie } from "../../types";
import MovicePoster from "../../component/MoviePoster";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_SERVER_URL,
  },
};

const MoviesPage = ({ url }: { url: string }) => {
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
        setMovies(response);
      })
      .catch((err) => console.error(err));
  }, [url]);

  return (
    <div className="poster-grid">
      {movies.results.map((movie: Movie) => (
        <MovicePoster key={movie.id} {...movie} />
      ))}
    </div>
  );
};

export default MoviesPage;
