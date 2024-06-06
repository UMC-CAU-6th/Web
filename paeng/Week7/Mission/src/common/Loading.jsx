import Spinner from "../assets/Rolling.gif";
import styled from "styled-components";

const LoadingBlock=styled.div`
align-items: center;
justify-content: center;
display: flex;
height: 100vh;
`

const Loading = () => {
  return (
    <LoadingBlock>
      <img src={Spinner} alt="로딩" width="10%" />
    </LoadingBlock>
  );
};

export default Loading;

//로딩: 서스펜스가 다 감싸고 있음. 그 이하에서 오래걸리는 애들은 fallback으로 로딩처리
//lazy처리를 하면 얘가 호출될때 처리를 하게됨. 페이지들을 lazy로 임포트.
//const Home=lazy(()=>import("./home"));    이런식.