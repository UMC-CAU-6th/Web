import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { keyframes } from "@emotion/react";

// navbar
export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 5vw;
`;

export const Navigation = styled.div`
  display: flex;
  width: 40vw;
  justify-content: space-between;
`;

export const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    transition: 0.25s;
    color: rgb(200, 200, 200);
  }
`;

// error & loading
export const BasicContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const colorChange = keyframes`
  0% {
    color: black;
  }
  50% {
    color: white;
  }
  100% {
    color: black;
  }
`;

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.span`
  width: 48px;
  height: 48px;
  border: 5px solid rgb(200, 200, 200);
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${rotation} 1s linear infinite;
`;

export const LoaderText = styled.p`
  color: black;
  margin: 20px;
  font-size: 1.25rem;
  animation: ${colorChange} 2.5s infinite;
`;
