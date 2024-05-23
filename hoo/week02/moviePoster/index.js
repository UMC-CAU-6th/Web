import { useState } from "react";
import { movies } from "./movieData";
import { Container, Container2, Container3 } from "./style";

export default function moviePosterPage() {
  return (
    <>
      <Container>
        {movies.results.slice(0, 5).map((el, index) => (
          <div>
            <Container3>
              <p>{el.title}</p>
              <p>{el.overview}</p>
            </Container3>
            <img
              key={index}
              src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`}
              style={{ width: "18vw", height: "30vw;" }}
            />
            <Container2>
              <p>{el.title}</p>
              <p>{el.vote_average}</p>
            </Container2>
          </div>
        ))}
      </Container>

      <Container>
        {movies.results.slice(5, 10).map((el, index) => (
          <div>
            <Container3>
              <p>{el.title}</p>
              <p>{el.overview}</p>
            </Container3>
            <img
              key={index}
              src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`}
              style={{ width: "18vw", height: "30vw;" }}
            />
            <Container2>
              <p>{el.title}</p>
              <p>{el.vote_average}</p>
            </Container2>
          </div>
        ))}
      </Container>

      <Container>
        {movies.results.slice(10, 15).map((el, index) => (
          <div>
            <Container3>
              <p>{el.title}</p>
              <p>{el.overview}</p>
            </Container3>
            <img
              key={index}
              src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`}
              style={{ width: "18vw", height: "30vw;" }}
            />
            <Container2>
              <p>{el.title}</p>
              <p>{el.vote_average}</p>
            </Container2>
          </div>
        ))}
      </Container>

      <Container>
        {movies.results.slice(15, 20).map((el, index) => (
          <div>
            <Container3>
              <p>{el.title}</p>
              <p>{el.overview}</p>
            </Container3>
            <img
              key={index}
              src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`}
              style={{ width: "18vw", height: "30vw;" }}
            />
            <Container2>
              <p>{el.title}</p>
              <p>{el.vote_average}</p>
            </Container2>
          </div>
        ))}
      </Container>
    </>
  );
}
