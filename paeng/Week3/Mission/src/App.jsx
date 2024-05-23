import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NowPlayingPage from "./components/NowPlayingPage";
import MainPage from "./components/MainPage";
import PopularPage from "./components/PopularPage";
import UpComing from "./components/UpComing";
import TopRatedPage from "./components/TopRatedPage";


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
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
};

export default App;