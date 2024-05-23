import "../App.css";
import { useEffect, useState } from "react";
import Card from './Card';
import Loading from "./Loading";

const html = document.getElementsByTagName('html')[0];

const Movies = (props) => {
    const [data, setData] = useState(null);
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: process.env.REACT_APP_MOVIE_API_KEY
        }
    };

    useEffect (() => {
        html.style.backgroundImage = null;
    });

    fetch(`https://api.themoviedb.org/3/movie/${props.type}?language=en-US&page=1`, options)
        .then(response => response.json())
        .then(response => setData(response.results))
        .catch(err => console.error(err));

    return ( 
        (data === null) ? 
        (<Loading />) : 
        (<div className="main"><div className="movies-wrapper">
        {data.map((element, index) => <Card key={index} movie={element}/>)}
        </div></div>)
    );
}

export default Movies;