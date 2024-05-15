import React, { useState } from "react";
import Card from "./Card";

const options = {
    method:"GET",
    headers: {
        accept: "application/json",
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGY5OWM3NzM2M2Q4YmYwNjVjZjZlMjEzMDFhMGY1NyIsInN1YiI6IjY2MzFmMjRlYTFjNTlkMDEyM2U2NjNiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6Bd2YsnxY8tMS7uDFzsWxY3adZ7zGppD5ZlCabk0a6Q',
    }
};


function NowPlayingPage(){
    const [movies, setMovies] = useState([]);
    fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        options
    )
    .then((response) => response.json())
    .then((response) => setMovies(response.results))
    .catch((err) => console.error(err));

    return (
        <div>{movies.map((moviedata, index) => {
            return <Card key={index} title={moviedata.title}/>
        })}
        </div>
    )
}

export default NowPlayingPage;