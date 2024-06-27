import styled from "@emotion/styled";
import { css } from "@emotion/react";
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

const basicContainer = css`
  position: fixed;

  top: 0px;
  left: 0px;

  z-index: 11;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #000a7d;
`;

const responseContainer = css`
  @media (max-width: 1000px) {
    flex-direction: column;
    //display: none;

    width: 100%;
    height: 100%;
  }

  @media (min-width: 1001px) {
    flex-direction: row;

    width: 100%;
    height: 50px;
  }
`;

const Container = styled.div`
  ${basicContainer}
  ${responseContainer}
`;

const Button = styled.button`
  border: 0px;

  background-color: #000a7d;

  font-size: 20px;
  color: white;
`;

const MainButton = styled(Button)`
  font-size: 30px;

  @media (max-width: 1000px) {
    margin-top: 30px;
    margin-right: 0px;
  }

  @media (min-width: 1001px) {
    margin-right: 800px;
  }
`;

export default Navbar;
