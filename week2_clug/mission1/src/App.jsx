import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('');
  const [num, setNum] = useState(0);

  const onChangeTodo = (e) => setTodo(e.target.value);
  const onAdd = () => {
    const newTodo = {
      id: num,
      text: todo,
      completed: false,
    };
    setNum(num+1);
    setTodos(todos.concat(newTodo));
    setTodo('');
  }
  const onKeyPress = (e) => {
    if(e.key === 'Enter'){
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
        if(todo.id === index){
          return {...todo, completed: !todo.completed}
        }
        else {
          return todo;
        }
      }
    );
    setTodos(nextTodos);
  }
  return (
    <div id="container">
        <h1>UMC Study Plan</h1>
        <hr width="60%"></hr>
        <input type="text" placeholder="스터디 계획을 작성해 보세요!" value={todo} onChange={onChangeTodo} onKeyPress={onKeyPress}/>
        <div id="wrapper">
            <div class="do">
                <span>해야 할 일</span>
                <ul>
                  {todos.filter(todo => !todo.completed).map((todo) => (
                    <li key={todo.id}>
                      {todo.text}
                      <button onClick={() => onComplete(todo.id)}>완료</button>
                    </li>
                  ))}
                </ul>
            </div>
            <div class="do">
              <span>해낸 일</span>
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
  );
}

export default App;
