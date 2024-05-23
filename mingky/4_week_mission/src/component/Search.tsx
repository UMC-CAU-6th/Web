import { useRef, useState } from "react";
import styled from "@emotion/styled";
import StarIcon from "@mui/icons-material/Star";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_SERVER_URL,
  },
};

function debounce(func: (input: string) => void, wait: number) {
  let timeout: number;
  return function (input: string) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, [input]), wait);
  };
}

const Search = () => {
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

  return (
    <>
      <Input></Input>
      {movieState.id !== 0 ? (
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
      ) : null}
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  position: absolute;
  top: 460px;
  left: 50%;
  transform: translate(-50%);

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

const Input = styled.input`
  position: absolute;
  top: 400px;
  left: 50%;
  transform: translate(-50%);

  width: 400px;
  height: 40px;

  border-radius: 30px;
`;

export default Search;
