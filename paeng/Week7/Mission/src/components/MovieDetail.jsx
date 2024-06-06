import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import Credits from "./Credits";

const DetailBox = styled.div`
  color: white;
  width: 100vw;
  height: 100vh;

  .backImage img {
    width: 100vw;
    height: auto;
    display: flex;
    justify-content: center;
    opacity: 15%;
  }

  .poster img {
    position: absolute;
    margin-top: -790px;
    margin-left: 120px;
    width: 23vw;
    height: auto;
  }

  .info {
    margin-top: -740px;
    margin-left: 550px;
    width: 50vw;
    font-size: 18px;
    line-height: 150%;
  }
`;
const isOv = (ov) => {
  return ov ? ov : "TMDB에서 제공하는 상세 줄거리가 없습니다.";
};

const MovieDetail = () => {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

  const { id } = useParams();
  const [movie,setMovie]=useState([]);
  const apiKey=import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: apiKey
      },
    };

    fetch(`https://api.themoviedb.org/3/movie/${id}?language=ko`, options)
      .then((response) => response.json())
      .then((response) => setMovie(response))
      .catch((err) => console.error(err));
  },[]);


  return (
    <>
    <DetailBox>
      <div className="backImage">
        <img
          src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
          alt={movie.title}
        />
      </div>
      <div className="poster">
        <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} />{" "}
      </div>
      <div className="info">
        <h1>{movie.title}</h1>
        <br></br>
        <h3>
          평점&nbsp;&nbsp;
          {Array.from({ length: Math.floor(movie.vote_average) }, () => "⭐")}
        </h3>
        <h3>개봉일 {movie.release_date}</h3>
        <h3>줄거리</h3>
        <p>{isOv(movie.overview)}</p>
      </div>
    </DetailBox>
    <Credits/>
    </>
  );
};

export default MovieDetail;

//프론트에서 아이콘쓸땐 mui쓰는게 좋음. 이런 아이콘을 디자인할때 스타일컴포넌트를 쓰면 좋다.
//jsx내부에서는 반복문은 map, 조건문은 삼항연산자.
//밖에서 props로 넘겨주는게편할것임.
