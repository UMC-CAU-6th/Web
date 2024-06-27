
import './App.css';
import { useState } from 'react';
import Modal from './components/Modal'

function App() {
  const [open, setOpen] = useState(0)
  return (
    <div>
      <h1>안녕하세요!</h1>
      <p>내용내용내용</p>
      <button onClick={() => setOpen((open) => true)}>
        버튼 열기
      </button>
      {open &&<Modal setOpen={setOpen}/>}
    </div>
  );
}

export default App;
