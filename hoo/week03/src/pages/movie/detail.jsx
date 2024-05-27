import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { DetailContainer, DetailImage, DetailContent } from "./style";

export default function MovieDetailPage() {
  const { movieTitle } = useParams();
  const location = useLocation();
  const { movie } = location.state || {};

  console.log(movie);
  if (!movie) {
    return <div>Movie data is not available</div>;
  }

  return (
    <DetailContainer>
      <DetailImage
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
      />
      <DetailContent>
        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
        <div>
          <h1>{movieTitle}</h1>
          <p>Score: {movie.vote_average.toFixed(1)}</p>
          <p>Date: {movie.release_date}</p>
          <p>{movie.overview}</p>
        </div>
      </DetailContent>
    </DetailContainer>
  );
}
