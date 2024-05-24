import Navbar from "./Components/Navbar";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { MoviePage } from "./Components/MoviePage";
import { Footer } from "./Components/Footer";
import { MovieDetail } from "./Components/MovieDetail";
import { Signup } from "./Components/Signup";
import { MainPage } from "./Components/MainPage";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="bg-purple-800">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/popular"
            element={<MoviePage category={"/popular"} />}
          />
          <Route
            path="/now"
            element={<MoviePage category={"/now_playing"} />}
          />
          <Route path="/top" element={<MoviePage category={"/top_rated"} />} />
          <Route
            path="/upcoming"
            element={<MoviePage category={"/upcoming"} />}
          />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="*" element={<Link to="/">to Home</Link>} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
