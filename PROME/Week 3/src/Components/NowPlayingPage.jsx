import React, { useState } from "react";
import Card from "./Card";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: process.env.KEY,
  },
};

const NowPlayingPage = () => {
  const [movies, setMovies] = useState([]);
  fetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    options
  )
    .then((response) => response.json())
    .then((response) => setMovies(response.results))
    .catch((err) => console.error(err));

  return (
    <div className="bg-purple-800 w-full flex flex-wrap gap-3">
      {movies.map((moviedata, index) => {
        return <Card key={index} title={moviedata.title} />;
      })}
    </div>
  );
};
export default NowPlayingPage;
