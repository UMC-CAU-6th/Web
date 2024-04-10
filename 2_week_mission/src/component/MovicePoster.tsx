import React, { useState } from "react";
import "../style/MovicePosterGridStyles.css";

const MovicePoster = ({
  title,
  posterPath,
  overview,
  voteAverage,
}: {
  title: string;
  posterPath: string;
  overview: string;
  voteAverage: string;
}) => {
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
      <img src={baseURL + posterPath}></img>
      <div className="poster-title">{title}</div>
      <div className="poster-voteAverage">{voteAverage}</div>
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
