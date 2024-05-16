import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { movieUrl, movieOptions } from "./movieDB";
import { MovieList, MovieCard, MovieFooter } from "./style";
const fetch = require("node-fetch");

export default function PopularPage() {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    fetch(movieUrl("popular"), movieOptions)
      .then((response) => response.json())
      .then((response) => setMovieList(response.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <MovieList>
      {movieList.map((el, index) => {
        return (
          <MovieCard key={index} to={`/movie/detail/${el.title}`}>
            <img
              src={`https://image.tmdb.org/t/p/original/${el.poster_path}`}
            />
            <MovieFooter>
              <p>{el.title}</p>
              <p>{el.vote_average.toFixed(1)}</p>
            </MovieFooter>
          </MovieCard>
        );
      })}
    </MovieList>
  );
}
