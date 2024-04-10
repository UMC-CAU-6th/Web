// App.tsx

import React, { useState } from "react";
import "./styles.css";

const App: React.FC = () => {
  const [todoInput, setTodoInput] = useState<string>("");
  const [todoList, setTodoList] = useState<string[]>([]);
  const [accomplishedList, setAccomplishedList] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoInput(event.target.value);
  };

  const handleEnterKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      addToDo();
    }
  };

  const addToDo = () => {
    if (todoInput.trim() !== "") {
      setTodoList([...todoList, todoInput.trim()]);
      setTodoInput("");
    }
  };

  const moveToAccomplished = (index: number) => {
    const itemToMove = todoList[index];
    const updatedTodoList = todoList.filter((_, i) => i !== index);
    setTodoList(updatedTodoList);
    setAccomplishedList([...accomplishedList, itemToMove]);
  };

  const deleteToDoItem = (index: number) => {
    const updatedAccomplishedList = accomplishedList.filter(
      (_, i) => i !== index
    );
    setAccomplishedList(updatedAccomplishedList);
  };

  return (
    <div className="container">
      <input
        type="text"
        id="todoInput"
        placeholder="Enter a to-do"
        value={todoInput}
        onChange={handleInputChange}
        onKeyPress={handleEnterKeyPress}
      />
      <div className="list-container">
        <div className="list-item">
          <h2>To-Do List</h2>
          <ul className="todo-list">
            {todoList.map((todo, index) => (
              <li key={index} className="todo-item">
                {todo}
                <button onClick={() => moveToAccomplished(index)}>
                  Complete
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="list-item">
          <h2>Accomplished List</h2>
          <ul className="todo-list">
            {accomplishedList.map((todo, index) => (
              <li key={index} className="todo-item">
                {todo}
                <button
                  className="delete-btn"
                  onClick={() => deleteToDoItem(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
