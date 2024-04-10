import React, { useState } from "react";
import "./style.css";

import Modal from "./component/Modal";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1 id="number">{count}</h1>
      <div>
        <button id="increase" onClick={increase}>
          +1
        </button>
        <button id="decrease" onClick={decrease}>
          -1
        </button>
      </div>
    </>
  );
};

const App = () => {
  return (
    <>
      <Counter />
      <Modal />
    </>
  );
};

export default App;
