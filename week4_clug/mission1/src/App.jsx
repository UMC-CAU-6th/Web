//import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar"
import MoviePage from './component/MoviePage';
import MainPage from "./component/MainPage"
import PopularPage from "./component/PopularPage"
import NowPlayingPage from './component/NowPlayingPage'
import TopRatedPage from './component/TopRatedPage'
import Upcoming from './component/UpComing'
import NotFound from './component/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/signup" element={<div>회원가입</div>}/>
          <Route path="/popular" element={<PopularPage/>}/>
          <Route path="/now" element={<NowPlayingPage/>}/>
          <Route path="/top" element={<TopRatedPage/>}/>
          <Route path="/upcoming" element={<Upcoming/>}/>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/movie/:original_title" element={<MoviePage/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
