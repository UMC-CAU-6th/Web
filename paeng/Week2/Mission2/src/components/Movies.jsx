import './Movies.scss'
import { moviesData } from './Api';


const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const Movies = () => {

  return (
    <div className='wrap'>
      <ul>
        {moviesData.results.map((movie,index) => (
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


export default Movies;