import styled from "styled-components";
import { useLocation } from "react-router-dom";
import NotFound from "./NotFound";

const DetailBox = styled.div`
  color: black;
  width: 100vw;
  height: 100vh;

  .bgImg img {
    width: 100vw;
    height: auto;
    display: flex;
    justify-content: center;
    opacity: 60%;

  }

  .poster img{
    position: absolute;
    margin-top:-460px;
    margin-left:120px;
    width: 23vw;
    height: auto;
  }

  .info{
    margin-top: -470px;
    margin-left: 350px;
    width: 50vw;
    font-size: 12px;
    line-height: 150%;
  }
`;

function MoviePage() {
    const { state } = useLocation();
    console.log(state.movie);
    const movie = state.movie;
    
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

    const isOv=(ov)=>{
        return (ov ? ov:'TMDB에서 제공하는 상세 줄거리가 없습니다.');
    }
    return (
        <DetailBox>
            <div className="bgImg">
                <img src={`${IMAGE_BASE_URL}${movie.backdrop_path}`} alt={movie.title}/>
            </div>
            <div className="poster">
                <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title}/>
            </div>
            <div className="info">
                <h1>{movie.title}</h1>
                <br/>
                <h3>
                    평점&nbsp;&nbsp;
                    {Array.from({length:Math.floor(movie.vote_average)},()=>'⭐')}
                </h3>
                <h3>개봉일 {movie.release_data}</h3>
                <h3>줄거리</h3>
                <p>{isOv(movie.overview)}</p>
            </div>
        </DetailBox>
    )
}

export default MoviePage;