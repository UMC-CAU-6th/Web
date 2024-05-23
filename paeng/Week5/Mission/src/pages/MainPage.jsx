import styled from "styled-components";
import Search from "../components/Search";
import { useState } from "react";

const MainBlock = styled.div`

margin-bottom: 120px;
margin-right: 0px;
margin-left: 0px;

width:100%;

  .welcome {
    background-color: black;
    color: white;
    font-size: 24px;
    text-align: center;
    justify-content: center;
    align-items: center;
    height: 220px;
    display: flex;
    width: 100%;
  }

  background-color: #1e174e;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  font-size: 30px;
  line-height: 80px;
  font-weight: bold;

  input {
    width: 300px;
    height: 30px;
    border-radius: 36px;
    padding-left: 20px;
  }

  button {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #ffe731;
    border: none;
    cursor: pointer;
  }
`;

const MainPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(inputValue);
  };

  return (
    <MainBlock>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="welcome">환영합니다</div>
          📽️ Find your movies !
          <br />
          <input onChange={handleInputChange} />
          <button type="submit">🔍</button>
        </div>
      </form>
      {searchTerm && <Search search={searchTerm} />}
    </MainBlock>
  );
};

export default MainPage;
