import { useState } from "react";

export default function counterPage() {
  const [num, setNum] = useState(0);
  const onClickPlus = () => {
    setNum(num + 1);
  };
  const onClickMinus = () => {
    setNum(num - 1);
  };

  return (
    <>
      <p>{num}</p>
      <button onClick={onClickPlus}>PLUS</button>
      <button onClick={onClickMinus}>Minus</button>
    </>
  );
}
