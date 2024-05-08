import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isSignIn, setIsSignin] = useState<boolean>(false);

  return (
    <Container>
      <Link to="/home">
        <MainButton>UMC Movie</MainButton>
      </Link>

      <Button
        onClick={() => {
          setIsSignin(!isSignIn);
        }}
      >
        {isSignIn ? "Sign In" : "Sign Out"}
      </Button>

      <Link to="/popular_movice">
        <Button>Popular</Button>
      </Link>
      <Link to="/now_playing_movice">
        <Button>Now Playing</Button>
      </Link>
      <Link to="/top_rated_movice">
        <Button>Top Rated</Button>
      </Link>
      <Link to="/upcoming_movice">
        <Button>Up Coming</Button>
      </Link>
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
