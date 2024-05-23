import { useState } from "react";
import Loading from "../common/Loading";
import React from "react";
import styled from "styled-components";

const SearchBlock=styled.div`

display: inline-block;


.wrap{
  width:60vw;
  height: 60vh;
  overflow-y: scroll;
}

.wrap::-webkit-scrollbar{
  width:8px;
}

.wrap::-webkit-scrollbar-thumb{
  background-color: #f1ce08;
  border-radius:10px;
}
  

img {
  width: 150px;
  height: 220px;
}

.name{
  font-size:12px;
  width:150px;
  line-height: 1.3;
  font-weight: normal;
}

.ov{
  display: none;
}

ul{
  margin-right:5px;
}


`;



const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const Search = ({ search }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiKey=import.meta.env.VITE_API_KEY;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: apiKey
    },
  };

  fetch(
    `https://api.themoviedb.org/3/search/movie?query=${search}&language=ko&page=1`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      setMovies(response.results);
      setLoading(false);
    })
    .catch((err) => console.error(err));

  if (loading) {
    return <Loading />;
  }

  

  return (

    <SearchBlock>
    <div className="wrap">
      <ul>
        {movies.map((movie, index) => (
          <li key={movie.id}>
            <div className={`poster poster${index}`}>
              <img
                src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                alt={movie.title}
              />
              
            </div>
            <br />
            <div className="name">
              <div>{movie.title}</div>
            
            <div>⭐{movie.vote_average.toFixed(1)}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </SearchBlock>

  );
};

export default Search;
