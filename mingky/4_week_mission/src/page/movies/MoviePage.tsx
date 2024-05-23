import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import StarIcon from "@mui/icons-material/Star";

import { Movie } from "../../types";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_SERVER_URL,
  },
};

const MoviePage = () => {
  const [movieState, setMovieState] = useState<Movie>({
    adult: false,
    backdrop_path: null,
    genre_ids: [],
    id: 0,
    original_language: "",
    original_title: "",
    overview: "",
    popularity: 0,
    poster_path: null,
    release_date: "",
    title: "",
    video: false,
    vote_average: 0,
    vote_count: 0,
  });
  const baseURL = "https://image.tmdb.org/t/p/w200";

  const params = useParams();

  console.log(params.name);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${params.name}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setMovieState(response.results[0]))
      .catch((err) => console.error(err));
  }, [params.name]);

  return (
    <Container>
      <img src={baseURL + movieState.poster_path}></img>
      <InfoContainer>
        <Title>{movieState.title}</Title>
        <div>
          {[...Array(Math.floor(movieState.vote_average))].map(() => (
            <StarIcon />
          ))}
        </div>
        <div>{movieState.release_date}</div>
        <div>
          {movieState.overview == "" ? "no overview" : movieState.overview}
        </div>
      </InfoContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  position: absolute;
  top: 0px;
  left: 0px;

  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 400px;

  margin-left: 30px;
`;

export default MoviePage;
