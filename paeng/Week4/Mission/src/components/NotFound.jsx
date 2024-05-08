import styled from "styled-components";
import { Link } from "react-router-dom";

const NotFoundBox=styled.div`
  width: 100vw;
  height: 100vh;
  color:white;
  text-align: center;
  margin-top: 120px;
`;

const GoToMain=styled(Link)`
  color:white;
  text-align: center;
  text-decoration: none;
`;

const NotFound = () => {
  return (
    <NotFoundBox>
      <h1>NOT FOUND</h1>
      <h2>잘못된 경로입니다</h2>
      <GoToMain to='/'>
      <h4>메인으로 이동하기</h4></GoToMain>
    </NotFoundBox>
  );
};

export default NotFound;
