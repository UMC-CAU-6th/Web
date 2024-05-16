import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const MovieList = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-evenly;
  margin: 10px 10vw;
`;

export const MovieCard = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: black;
  width: 270px;
  margin: 15px 5px;
  border-radius: 5px;
  background-color: rgb(245, 245, 245);

  img {
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }

  &:hover {
    opacity: 0.5;
    transition: 0.25s;
    cursor: pointer;
  }
`;

export const MovieFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 7px 10px;
`;
