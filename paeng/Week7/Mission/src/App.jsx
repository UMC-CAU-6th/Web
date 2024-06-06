import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import NowPlayingPage from "./pages/NowPlayingPage";
import MainPage from "./pages/MainPage";
import PopularPage from "./pages/PopularPage";
import UpComing from "./pages/UpComing";
import TopRatedPage from "./pages/TopRatedPage";
import MovieDetail from "./components/MovieDetail";
import NotFound from "./pages/NotFound";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";

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
        <Route path="/signup" element={<SignupPage />}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/logout" element={<LogoutPage/>}/>
        <Route path="/movie/detail/:id" element={<MovieDetail/>}/>
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