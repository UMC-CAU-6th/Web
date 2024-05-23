import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

const NavContainer = styled.div`
width:100%;
  background-color: #1e174e;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  margin: 0;
`;

const LogoLink = styled(Link)`
  background-color: #1e174e;
  color: white;
  flex-shrink: 0;
  display: inline;
  cursor: pointer;
  text-decoration: none;
`;

const NavBlock = styled.div`
  background-color: #1e174e;
  color: white;
  display: flex;
  padding: 1rem;
  margin: 0;
  justify-content: flex-end;
`;

const StyledLink = styled(Link)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  padding-bottom: 0.25rem;

  &:visited,
  &:link,
  &:active,
  &:hover {
    color: white;
    text-decoration: none;
  }

  &:hover {
    font-size: 1.2rem;
    font-weight: bold;
  }

  & + & {
    margin-left: 1rem;
  }
`;

const categories = [
  {
    name: "join",
    text: "회원가입",
    path: "/signup",
  },
  {
    name: "popular",
    text: "Popular",
    path: "/popular",
  },
  {
    name: "nowPlaying",
    text: "Now playing",
    path: "/now-playing",
  },
  {
    name: "topRated",
    text: "Top Rated",
    path: "/top-rated",
  },
  {
    name: "upcoming",
    text: "UpComing",
    path: "/upcoming",
  },
];

const Navbar = () => {


  return (
    <NavContainer>
      <LogoLink className="Logo" to="/">
        UMC MOVIE
      </LogoLink>

      <NavBlock>
        {categories.map((c) => (
          <StyledLink to={c.path} key={c.name}
          >
            {c.text}
          </StyledLink>
        ))}
      </NavBlock>
    </NavContainer>
  );
};

export default Navbar;

//노란색으로 바꾸는거는 NavLink?
