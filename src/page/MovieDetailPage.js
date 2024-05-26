import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const MovieDetailPage = () => {
  const { movieName } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    // 영화 상세 정보를 가져오는 API 호출 로직
    const fetchMovieData = async () => {
      try {
        const response = await fetch(`/api/movies/${movieName}`);
        const data = await response.json();
        setMovieData(data);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchMovieData();
  }, [movieName]);

  // 페이지 이동 기능
  const handleNavigate = (path) => {
    navigate(path);
  };

  // URL 정보 활용
  const currentPath = location.pathname;

  if (!movieData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Movie Detail Page</h2>
      <p>Movie Name: {movieData.title}</p>
      <p>Release Year: {movieData.releaseYear}</p>
      <p>Director: {movieData.director}</p>
      <p>Cast: {movieData.cast.join(', ')}</p>
      <button onClick={() => handleNavigate('/movies')}>Go to Movies List</button>
      <p>Current Path: {currentPath}</p>
    </div>
  );
};

export default MovieDetailPage;