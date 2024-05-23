import { useState } from "react";
import * as S from "./style";

export default function todoListPage() {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [doList, setDoList] = useState([]);

  const onChangeInput = (event) => {
    setInputText(event.target.value);
  };

  const onKeyInput = (event) => {
    if (event.keyCode == "13" && inputText !== "") {
      setTodoList([...todoList, inputText]);
      setInputText("");
    }
  };

  const onClickCheck = (check) => {
    setTodoList(todoList.filter((el) => el !== check));
    setDoList([...doList, check]);
  };
  const onClickDelete = (del) => {
    setDoList(doList.filter((el) => el !== del));
  };

  return (
    <>
      <S.Container>
        <S.Title>STUDY PLANNER</S.Title>
      </S.Container>
      <hr style={{ width: "80%" }} />
      <S.Container>
        <S.Input
          value={inputText}
          onKeyDown={onKeyInput}
          onChange={onChangeInput}
        ></S.Input>
      </S.Container>

      <S.Container>
        <S.Container2>
          <S.Title2>TO-DO LIST</S.Title2>
          <div class="list-container">
            {todoList.map((el, index) => (
              <S.Text key={index}>
                {el} <S.Button onClick={() => onClickCheck(el)}>CHECK</S.Button>
              </S.Text>
            ))}
          </div>
        </S.Container2>
        <S.Container2>
          <S.Title2>DO LIST</S.Title2>
          <div class="list-container">
            {doList.map((el, index) => (
              <S.Text key={index}>
                {el}{" "}
                <S.Button onClick={() => onClickDelete(el)}>DELETE</S.Button>
              </S.Text>
            ))}
          </div>
        </S.Container2>
      </S.Container>
    </>
  );
}
