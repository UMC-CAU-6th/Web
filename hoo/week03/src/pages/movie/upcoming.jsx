import FetchMovie from "./movieDB";
import { MovieList, MovieCard, MovieFooter } from "./style";
import LoadingPage from "../loading";

export default function UpcomingPage() {
  const { movieList, loading } = FetchMovie("upcoming");

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <MovieList>
      {movieList.map((el, index) => {
        return (
          <MovieCard
            key={index}
            to={`/movie/detail/${el.title}`}
            state={{ movie: el }}
          >
            <img
              src={`https://image.tmdb.org/t/p/original/${el.poster_path}`}
            />
            <MovieFooter>
              <p>{el.title}</p>
              <p>{el.vote_average.toFixed(1)}</p>
            </MovieFooter>
          </MovieCard>
        );
      })}
    </MovieList>
  );
}
