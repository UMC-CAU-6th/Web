import styled from "@emotion/styled";
import { Link } from "react-router-dom";

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
