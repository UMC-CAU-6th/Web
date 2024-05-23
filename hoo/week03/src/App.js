import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavbarPage from "./pages/navbar";
import MainPage from "./pages/main";
import PopularPage from "./pages/movie/popular";
import NowPlayingPage from "./pages/movie/nowPlaying";
import TopRatedPage from "./pages/movie/topRated";
import UpcomingPage from "./pages/movie/upcoming";
import SignInPage from "./pages/sign/signIn";
import SignUpPage from "./pages/sign/signUp";
import FooterPage from "./pages/footer";
import MovieDetailPage from "./pages/movie/detail";
import ErrorPage from "./pages/error";
import "./global.css";

export default function App() {
  return (
    <BrowserRouter>
      <NavbarPage />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/popular" element={<PopularPage />} />
        <Route path="/now-playing" element={<NowPlayingPage />} />
        <Route path="/top-rated" element={<TopRatedPage />} />
        <Route path="/upcoming" element={<UpcomingPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/movie/detail/:movieTitle" element={<MovieDetailPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <FooterPage />
    </BrowserRouter>
  );
}
