import React, { useState } from "react";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const options = {
    method:"GET",
    headers: {
        accept: "application/json",
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGY5OWM3NzM2M2Q4YmYwNjVjZjZlMjEzMDFhMGY1NyIsInN1YiI6IjY2MzFmMjRlYTFjNTlkMDEyM2U2NjNiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6Bd2YsnxY8tMS7uDFzsWxY3adZ7zGppD5ZlCabk0a6Q',
    }
};

function TopRatedPage(){
    const [movies, setMovies] = useState([]);
    fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=ko-US&page=1",
        options
    )
    .then((response) => response.json())
    .then((response) => setMovies(response.results))
    .catch((err) => console.error(err));


    return (
        <div className="wrap">
      <ul>
        {movies.map((movie, index) => (
          <li key={movie.id}>
            <div className={`poster poster${index}`}>
              <img
                src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="ov">{movie.overview}</div>
            </div>
            <br />
            <div className="name">{movie.title}</div>
          </li>
        ))}
      </ul>
    </div>
    )
}

export default TopRatedPage;