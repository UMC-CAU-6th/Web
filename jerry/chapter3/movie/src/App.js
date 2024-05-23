import './App.css';

import { useState } from 'react';
import Navbar from './component/Navbar';
import Signin from './component/Signin';
import Home from './component/Home';
import Movies from './component/Movies';
import Detail from './component/Detail';

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [ isLogin , setLogin ] = useState(false);

  return (
    <BrowserRouter>
      <Navbar isLogin={isLogin} setLogin={setLogin}/>
      <div id="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/popular" element={<Movies type="popular" />} />
        <Route path="/nowplaying" element={<Movies type="now_playing" />} />
        <Route path="/toprated" element={<Movies type="top_rated" />} />
        <Route path="/detail/:movieId" element={<Detail />}/>
      </Routes>
      </div>
      
    </BrowserRouter>
    
  );
}

export default App;
