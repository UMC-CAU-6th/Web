import "../style/MovieStyle.scss";
import useFetchMovies from "../hooks/useFetchMovies";
import Loading from "../common/Loading";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Pagination from "../common/Pagenation";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const PopularPage = () => {
  const navigate = useNavigate();
  const [page,setPage]=useState(1);
  const [url,setUrl]=useState(`https://api.themoviedb.org/3/movie/popular?language=ko-US&page=${page}`)
  const { movies, loading } = useFetchMovies(url);

  useEffect(()=>{
    setUrl(`https://api.themoviedb.org/3/movie/popular?language=ko-US&page=${page}`)
  },[page]);

  if (loading) {
    return <Loading />;
  }

  const goToDetail = (movie) => {
    navigate(`/movie/detail/${movie.id}`, { state: { movie } });
  };

  return (
    <div className="wrap">
      <ul>
        {movies.map((movie, index) => (
          <li key={movie.id} onClick={() => goToDetail(movie)}>
            <div className={`poster poster${index}`}>
              <img
                src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="ov">{movie.overview}</div>
            </div>
            <br />
            <div className="name">{movie.title}</div>
          </li>
        ))}
      </ul>
      <Pagination
      page={page}
      setPage={setPage}
      />
    </div>
  );
};

export default PopularPage;
