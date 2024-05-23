import { useRef } from "react";
import styled from "@emotion/styled";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_SERVER_URL,
  },
};

const Search = () => {
  return (
    <>
      <Input></Input>
    </>
  );
};

function debounce(func: (input: string) => void, wait: number) {
  let timeout: number;
  return function (input: string) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, [input]), wait);
  };
}

const Input = styled.input`
  position: absolute;
  top: 400px;
  left: 50%;
  transform: translate(-50%);

  width: 400px;
  height: 40px;

  border-radius: 30px;
`;

export default Search;
