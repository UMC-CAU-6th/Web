import { Suspense, lazy } from "react";
import { BrowserRouter as RootRouter, Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import Loading from "./component/Loading";

const MoviesPage = lazy(() => import("./page/movies/MoviesPage"));
const Movie = lazy(() => import("./page/movies/MoviePage"));
const Home = lazy(() => import("./page/home/HomePage"));

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <RootRouter>
        <Navbar />
        <Routes>
          <Route path={"/home"} element={<Home />} />
          <Route path={"/movie/:name"} element={<Movie />} />
          <Route
            path={"/top_rated_movice"}
            element={
              <MoviesPage url="https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1" />
            }
          />
          <Route
            path={"/popular_movice"}
            element={
              <MoviesPage url="https://api.themoviedb.org/3/movie/popular?language=en-US&page=1" />
            }
          />
          <Route
            path={"/now_playing_movice"}
            element={
              <MoviesPage url="https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1" />
            }
          />
          <Route
            path={"/upcoming_movice"}
            element={
              <MoviesPage url="https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1" />
            }
          />
        </Routes>
      </RootRouter>
    </Suspense>
  );
};

export default App;
