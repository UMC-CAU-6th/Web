import { useState } from "react";
import { movieUrl, movieOptions } from "./movieDB";
const fetch = require("node-fetch");

export default function UpcomingPage() {
  const [movieList, setMovieList] = useState([]);
  fetch(movieUrl("upcoming"), movieOptions)
    .then((response) => response.json())
    .then((response) => setMovieList(response.results))
    .catch((err) => console.error(err));
  return (
    <div>
      {movieList.map((el, index) => {
        return (
          <div key={index}>
            <p>{el.title}</p>
            <img src={`https://image.tmdb.org/t/p/w300/${el.backdrop_path}`} />
          </div>
        );
      })}
    </div>
  );
}
