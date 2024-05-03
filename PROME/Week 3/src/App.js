import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NowPlayingPage from "./Components/NowPlayingPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<div>회원가입</div>} />
        <Route path="/popular" element={<div>popular</div>} />
        <Route path="/now" element={<NowPlayingPage />} />
        <Route path="/top" element={<div>top</div>} />
        <Route path="/upcoming" element={<div>upcoming</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
