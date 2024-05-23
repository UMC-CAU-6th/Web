import styled from "@emotion/styled";

import { BarLoader } from "react-spinners";

const Loading = () => {
  return (
    <LoadingWrapper>
      <BarLoader
        color="rgb(12, 0, 238)"
        speedMultiplier={1}
        height={10}
        width={200}
      />
    </LoadingWrapper>
  );
};

export const LoadingWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Loading;
