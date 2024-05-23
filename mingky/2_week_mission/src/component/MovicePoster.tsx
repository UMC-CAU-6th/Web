import React, { useState } from "react";
import "../style/MovicePosterStyles.css";
import { Movie } from "../types";

const MovicePoster = ({
  title,
  poster_path,
  overview,
  vote_average,
}: Movie) => {
  const baseURL = "https://image.tmdb.org/t/p/w200";

  const [overState, setOverState] = useState(false);

  return (
    <div
      className="poster-container"
      onMouseEnter={() => {
        setOverState(true);
      }}
      onMouseLeave={() => {
        setOverState(false);
      }}
    >
      <img src={baseURL + poster_path}></img>
      <div className="poster-title">{title}</div>
      <div className="poster-voteAverage">{vote_average}</div>
      {overState ? (
        <div className="poster-detail-container">
          <div className="poster-title">{title}</div>
          <div className="poster-overview">{overview}</div>
        </div>
      ) : null}
    </div>
  );
};

export default MovicePoster;
