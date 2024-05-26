import axios from 'axios';
import React, { useEffect, useState } from 'react';

const NowPlaying = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  useEffect(() => {
    const fetchNowPlayingMovies = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=YOUR_API_KEY');
        setNowPlayingMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching now playing movies:', error);
      }
    };
    fetchNowPlayingMovies();
  }, []);

  return (
    <div>
      <h1>Now Playing Movies</h1>
      <div>
        {nowPlayingMovies.map((movie) => (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NowPlaying;
