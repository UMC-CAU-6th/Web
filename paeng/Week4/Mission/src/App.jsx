import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NowPlayingPage from "./components/NowPlayingPage";
import MainPage from "./components/MainPage";
import PopularPage from "./components/PopularPage";
import UpComing from "./components/UpComing";
import TopRatedPage from "./components/TopRatedPage";
import JoinPage from "./components/JoinPage";
import MovieDetail from "./components/MovieDetail";
import NotFound from "./components/NotFound";


const App = () => {
  return (
    <BrowserRouter> 
      <Navbar />
      <Routes>
        <Route path="/top-rated" element={<TopRatedPage/>}/>
        <Route path="/now-playing" element={<NowPlayingPage/>}/>
        <Route path="/popular" element={<PopularPage/>}/>
        <Route path="/upcoming" element={<UpComing/>}/>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/join" element={<JoinPage />}/>
        <Route path="/movie/detail/:original_title" element={<MovieDetail/>}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
};

export default App;

//브라우저 라우터는 라우트를 쓰는 모든곳을 커버
//Routes를 쓰면 ... 그 안에껏만 바뀜
//Route