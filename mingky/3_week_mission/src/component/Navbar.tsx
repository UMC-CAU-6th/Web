import styled from "@emotion/styled";

const Navbar = () => {
  return (
    <Container>
      <MainButton>UMC Movie</MainButton>
      <Button>Popular</Button>
      <Button>Now Playing</Button>
      <Button>Top Rated</Button>
      <Button>Up Coming</Button>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;

  top: 0px;
  left: 0px;

  z-index: 3;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 50px;

  background-color: #000a7d;
`;

const Button = styled.button`
  border: 0px;

  background-color: #000a7d;

  font-size: 20px;
  color: white;
`;

const MainButton = styled(Button)`
  font-size: 30px;

  margin-right: 800px;
`;

export default Navbar;
