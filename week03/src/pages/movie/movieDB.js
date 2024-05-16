export const movieUrl = (url) => {
  return `https://api.themoviedb.org/3/movie/${url}?language=en-US&page=1`;
};

export const movieOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZGIzNzY1M2NmZjJkOTFmNThkNjViNjk3MzAzOTk5OCIsInN1YiI6IjY2MzMxYTU0YWQ1OWI1MDEyODZkMGY5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UBdKoDgWz37I8c1_yQ3ucp-Cx7kHbRXo6Y4QvtTDgUU",
  },
};
