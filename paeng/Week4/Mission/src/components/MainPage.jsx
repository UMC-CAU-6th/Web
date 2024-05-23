import styled from "styled-components";

const MainBlock = styled.div`
  .welcome {
    background-color: black;
    color: white;
    font-size: 24px;
    text-align: center;
    justify-content: center;
    align-items: center;
    height:220px;
    display: flex;
    width: 100vw;
  }

  background-color: #1e174e;
  height:100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  font-size: 30px;
  line-height: 80px;
  font-weight : bold;

  input{
    width: 300px;
    height: 30px;
    border-radius: 36px;
  }

  button{
    width:30px;
    height:30px;
    border-radius: 50%;
    background-color: #ffe731;
    border: none;
    cursor: pointer;
  }
`;

const MainPage = () => {
  return (
    <MainBlock>
      <div>
        <div className="welcome">환영합니다</div>
        📽️ Find your movies !
        <br />
        <input />
        <button>🔍</button>
      </div>
    </MainBlock>
  );
};

export default MainPage;
