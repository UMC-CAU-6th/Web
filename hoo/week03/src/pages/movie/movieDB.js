import { useState, useEffect } from "react";

export default function FetchMovie(url) {
  const movieUrl = (url) => {
    return `https://api.themoviedb.org/3/movie/${url}?language=en-US&page=1`;
  };

  const movieOptions = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZGIzNzY1M2NmZjJkOTFmNThkNjViNjk3MzAzOTk5OCIsInN1YiI6IjY2MzMxYTU0YWQ1OWI1MDEyODZkMGY5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UBdKoDgWz37I8c1_yQ3ucp-Cx7kHbRXo6Y4QvtTDgUU",
    },
  };

  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(movieUrl(url), movieOptions)
      .then((response) => response.json())
      .then((response) => {
        setMovieList(response.results);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return { movieList, loading };
}
