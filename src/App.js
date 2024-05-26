import { Outlet, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import MainPage from './page/MainPage';
import MovieDetailPage from './page/MovieDetailPage';
import NowPlayingPage from './page/NowPlayingPage';
import PopularPage from './page/PopularPage';
import TopRatedPage from './page/TopRatedPage';
import UpComing from './page/UpComing';


function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/popular" element={<PopularPage />} />
        <Route path="/now-playing" element={<NowPlayingPage />} />
        <Route path="/top-rated" element={<TopRatedPage />} />
        <Route path="/upcoming" element={<UpComing />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
