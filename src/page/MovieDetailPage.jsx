// MovieDetailPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetailPage = () => {
  const { movieId } = useParams();

  // 영화 상세 정보 가져오기 및 렌더링
  return (
    <div>
      <h1>Movie Detail Page</h1>
      <p>Movie ID: {movieId}</p>
      {/* 영화 상세 정보 표시 */}
    </div>
  );
};

export default MovieDetailPage;
