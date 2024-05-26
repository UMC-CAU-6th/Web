import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TopRated = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=YOUR_API_KEY');
        setTopRatedMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching top rated movies:', error);
      }
    };
    fetchTopRatedMovies();
  }, []);

  return (
    <div>
      <h1>Top Rated Movies</h1>
      <div>
        {topRatedMovies.map((movie) => (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRated;
