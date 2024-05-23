import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Container2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 10px;
  padding: 5px;
`;

export const Container3 = styled.div`
  /* display: flex; */
  opacity: 0;
  flex-direction: column;
  position: absolute;
  background-color: rgb(0, 0, 0, 0.75);
  padding: 1vw;
  width: 18vw;
  height: 30vw;

  > p {
    color: white;
    font-family: gsL;
    font-size: 0.9em;
  }

  &:hover {
    opacity: 100;
  }
`;
