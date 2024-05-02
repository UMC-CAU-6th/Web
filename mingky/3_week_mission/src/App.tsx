import { Suspense, lazy } from "react";
import { BrowserRouter as RootRouter, Routes, Route } from "react-router-dom";

import Loading from "./component/Loading";

const MovicePosterGrid = lazy(() => import("./component/MovicePosterGrid"));

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <RootRouter>
        <Routes>
          <Route path={"/movices"} element={<MovicePosterGrid />} />
        </Routes>
      </RootRouter>
    </Suspense>
  );
};

export default App;
