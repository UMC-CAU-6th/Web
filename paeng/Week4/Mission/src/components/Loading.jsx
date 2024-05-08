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