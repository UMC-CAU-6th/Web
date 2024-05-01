import {useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>{count}</h1>
      <div className="plus">
        <button onClick={() => setCount((count) => count + 1)}>
          +1
        </button>

        <button onClick={() => setCount((count) => count - 1)}>
          -1
        </button>
      </div>
    </div>
  )
}

export default App;
