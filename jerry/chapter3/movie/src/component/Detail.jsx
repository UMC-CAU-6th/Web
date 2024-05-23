import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Detail.css";
import Loading from "./Loading";

const url = "https://image.tmdb.org/t/p/original";
const html = document.getElementsByTagName('html')[0];

const Detail = () => {
    const params = useParams();
    const movieId = params.movieId;
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: process.env.REACT_APP_MOVIE_API_KEY
        }
    };
    const [data, setData] = useState(null);
    useEffect (() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options)
        .then(response => response.json())
        .then(response => {setData(response); console.log(response);})
        .catch(err => console.error(err));
    }, []);
    
    useEffect (() => {
        if (data) { html.style.backgroundImage = `url(${url + data.backdrop_path})`;}
    }, [data]);

    return (
        (data === null) ? 
        (<Loading />) : 
        (
            <div id="detail-main">
            <div id="detail-container">
                <img id="detail-poster" src={url + data.poster_path}></img>
                <div id="detail-wrapper">
                    <h2>{data.title}</h2>
                    <div>{data.vote_average}</div>
                    <div>{data.release_date}</div>
                    <hr></hr>
                    <div id="detail-overview">{data.overview}</div>    
                </div>
            </div>
            <div>
            </div>
            </div>
        )   
    )
}

export default Detail;