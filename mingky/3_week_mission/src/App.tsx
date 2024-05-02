import { Suspense, lazy } from "react";
import { BrowserRouter as RootRouter, Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import Loading from "./component/Loading";

const MovicePosterGrid = lazy(() => import("./component/MovicePosterGrid"));
const Home = lazy(() => import("./page/home"));

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Navbar />
      <RootRouter>
        <Routes>
          <Route path={"/movices"} element={<MovicePosterGrid />} />
          <Route path={"/home"} element={<Home />} />
        </Routes>
      </RootRouter>
    </Suspense>
  );
};

export default App;
