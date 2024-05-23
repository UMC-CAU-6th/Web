import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const options = {
    method:"GET",
    headers: {
        accept: "application/json",
        Authorization: process.env.REACT_APP_API_KEY,
    },
};

function PopularPage({category}){
    console.log(process.env.REACT_APP_API_KEY);
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
      fetch(
        "https://api.themoviedb.org/3/movie/popular?language=ko-US&page=1",
        options
    )
    .then((response) => response.json())
    .then((response) => setMovies(response.results))
    .catch((err) => console.error(err));
    }, [category]);
    const goToMoviePage=(movie)=>{
      navigate(`/movie/${movie.original_title}`, {state:{movie}});
    }

    return (
        <div className='wrap'>
        <ul>
          {movies.map((movie,index) => (
            <li key={movie.id} onClick={() => goToMoviePage(movie)}>
              <div
                className={`poster poster${index}`}
              >
                <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title}/>
                <div className='ov'>
                  {movie.overview}
                </div>
              </div>
              <br/>
              <div className='name'>{movie.title}</div>
            </li>
          ))}
        </ul>
      </div>
    )
}

export default PopularPage;