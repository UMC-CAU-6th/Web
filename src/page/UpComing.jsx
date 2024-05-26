import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UpComing = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=YOUR_API_KEY');
        setUpcomingMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching upcoming movies:', error);
      }
    };
    fetchUpcomingMovies();
  }, []);

  return (
    <div>
      <h1>Upcoming Movies</h1>
      <div>
        {upcomingMovies.map((movie) => (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpComing;
