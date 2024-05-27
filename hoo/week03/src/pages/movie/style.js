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

export const DetailContainer = styled.div`
  margin: 3vh 5vw;
  height: 85vh;
  background-color: rgb(0, 0, 0, 0.75);
`;

export const DetailImage = styled.img`
  width: 89vw;
  height: 85vh;
  z-index: -1;
  position: absolute;
`;

export const DetailContent = styled.div`
  height: 85vh;
  margin: 0 15vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: white;
  font-size: 1.25rem;
  img {
    width: 200px;
  }

  div {
    width: 40vw;
  }
`;
