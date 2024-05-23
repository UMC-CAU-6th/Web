import styled from "@emotion/styled";

const NotFoundPage = () => {
  return (
    <Container>
      <div>404</div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  position: absolute;
  top: 0px;
  left: 0px;

  width: 100%;
  height: 100%;
`;

export default NotFoundPage;
