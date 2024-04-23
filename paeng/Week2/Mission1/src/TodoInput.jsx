import  { useState } from "react";
import './App.css';

const TodoInput = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [numForId, setNumForID]=useState(0);

  const onChangeTodo = (e) => setTodo(e.target.value);

  const onAdd = () => {
    const newTodo = {
      id: numForId,
      text: todo,
      completed: false, 
    };
    setNumForID(numForId+1);
    setTodos(todos.concat(newTodo));
    setTodo('');
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onAdd();
    }
  };

  const onDelete = (index) => {
    const nextTodos = todos.filter(todo => todo.id !== index);
    setTodos(nextTodos);
  };

  const onComplete = (index) => {
    const nextTodos = todos.map(
      todo=>{
      if(todo.id===index){
        return { ...todo, completed: !todo.completed }
      }
      else{
        return todo
      }
    }
    );
    setTodos(nextTodos);
  };

  return (
    <>
      <br />
      <h1>UMC Study Plan</h1>
      <br /><br /><hr />
      <input
        className="ip"
        type="text"
        placeholder="스터디 계획을 작성해보세요!"
        value={todo}
        onChange={onChangeTodo}
        onKeyPress={onKeyPress}
      />
      <br /><br />

      <div className="flex-container">
        <div className="flex-item">
          해야할 일
          <hr />
          <div className="list-area">
            <ul>
              {todos.filter(todo => !todo.completed).map((todo) => (
                <li key={todo.id}>
                  {todo.text}
                  <button onClick={() => onComplete(todo.id)}>완료</button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex-item">
          해낸 일
          <hr />
          <div className="list-area">
            <ul>
              {todos.filter(todo => todo.completed).map((todo) => (
                <li key={todo.id}>
                  {todo.text}
                  <button onClick={() => onDelete(todo.id)}>삭제</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoInput;

//https://velog.io/@hamham/%EB%A6%AC%EC%95%A1%ED%8A%B8%EB%A1%9C-ToDo%EC%95%B1-%EB%A7%8C%EB%93%A4%EA%B8%B03-%EC%99%84%EB%A3%8C-%ED%91%9C%EC%8B%9C-%EC%82%AD%EC%A0%9C-%ED%8E%B8 참고