import { useState } from 'react'
import './App.css'
import Modal from './component/modal'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <h1>안녕하세요!</h1>
  <p>내용내용내용</p>
    <button onClick={()=>setOpen((open)=>true)}>
    버튼 열기
    </button>
    {open && <Modal setOpen={setOpen}/>}
    </>
  )
}


export default App
