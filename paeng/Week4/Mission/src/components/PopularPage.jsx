import './MovieStyle.scss'
import useFetchMovies from "../hooks/useFetchMovies";
import Loading from './Loading';
import { useNavigate } from 'react-router-dom';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const PopularPage=()=>{

  const url='https://api.themoviedb.org/3/movie/popular?language=ko-US&page=1';
  
  const { movies, loading } = useFetchMovies(url);
  const navigate=useNavigate();

  if (loading) {
    return <Loading />;
  }

  const goToDetail=(movie)=>{
    navigate(`/movie/detail/${movie.original_title}`, {state:{movie}});
  }

  return (
    <div className="wrap">
      <ul>
        {movies.map((movie, index) => (
          <li key={movie.id} onClick={()=> goToDetail(movie)}>
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
    </div>
  );
};

export default PopularPage;
