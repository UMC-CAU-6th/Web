import { useState, useEffect } from "react";

const useFetchMovies = (url) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzZlNDU5NTI3YWU4ZjUxMjRmMTcyYWRlYTFiMDk1NiIsInN1YiI6IjY2MmY0OTRkNTExZDA5MDEyYWM1NzkxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nunLNSGQJEoMZJzIaTq7Mq0EG8y-JjwwEsp5r9tZl14'
          
        }
      };

      fetch(url,options)
      .then(response=>response.json())
      .then(data=>{
        setMovies(data.results);
        setLoading(false);
      })
  }, []); 

  return { movies, loading };
};

export default useFetchMovies;
