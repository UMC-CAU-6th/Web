import "../App.css"; 
import { useNavigate } from "react-router-dom";

const url = "https://image.tmdb.org/t/p/w200";

const Card = ( props ) => {
    let navigate = useNavigate();
    const movie = props.movie;
    return (
        <div onClick={() => {
            console.log(movie.id);
            navigate("/detail/" + movie.id);
        }} className="block">
            <div className="img-container">
                <img className="poster" src={url + movie.poster_path}></img>
            </div>
            <div className="title">
                <div>{movie.title}</div>
                <div>⭐{movie.vote_average}</div>
            </div>
        </div>
    )
}

export default Card;