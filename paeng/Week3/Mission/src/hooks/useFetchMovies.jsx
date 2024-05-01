import { useState, useEffect } from "react";

const useFetchMovies = (url) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Api key'

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