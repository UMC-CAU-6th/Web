import styled from "@emotion/styled";
import Search from "../../component/Search";

const Home = () => {
  return (
    <>
      <HomeText>
        <div>환영합니다!!</div>
      </HomeText>
      <Search />
    </>
  );
};

const HomeText = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;

  width: 100%;
  height: 700px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  font-size: 30px;
  font-weight: bolder;
`;

export default Home;
