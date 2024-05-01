import './MovieStyle.scss'
import useFetchMovies from '../hooks/useFetchMovies';
import Loading from './Loading';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const UpComing=()=>{

  const url='https://api.themoviedb.org/3/movie/upcoming?language=ko-US&page=1';
  
  const {movies,loading}=useFetchMovies(url);

  if (loading) {
    return <Loading/>;
  }
    
    return (
      <div className='wrap'>
        <ul>
          {movies.map((movie,index) => (
            <li key={movie.id}>
              <div className={`poster poster${index}`}>
              
              <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title}/>
              <div className='ov'>
              {movie.overview}
              </div>
              </div>
              <br/>
              <div className='name'>{movie.title}</div>
              </li>
          ))}
        </ul>
      </div>
    );
  
};

export default UpComing;
