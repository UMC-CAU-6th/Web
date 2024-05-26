import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Popular = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY');
        setPopularMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
    };
    fetchPopularMovies();
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      <div>
        {popularMovies.map((movie) => (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;