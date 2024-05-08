import { Suspense, lazy } from "react";
import { BrowserRouter as RootRouter, Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import Loading from "./component/Loading";

const MovicePosterGrid = lazy(() => import("./page/MovicePosterGrid"));
const Home = lazy(() => import("./page/HomePage"));

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <RootRouter>
        <Navbar />
        <Routes>
          <Route
            path={"/top_rated_movice"}
            element={
              <MovicePosterGrid url="https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1" />
            }
          />
          <Route
            path={"/popular_movice"}
            element={
              <MovicePosterGrid url="https://api.themoviedb.org/3/movie/popular?language=en-US&page=1" />
            }
          />
          <Route
            path={"/now_playing_movice"}
            element={
              <MovicePosterGrid url="https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1" />
            }
          />
          <Route
            path={"/upcoming_movice"}
            element={
              <MovicePosterGrid url="https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1" />
            }
          />
          <Route path={"/home"} element={<Home />} />
        </Routes>
      </RootRouter>
    </Suspense>
  );
};

export default App;
