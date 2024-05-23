import { useState } from 'react'
import './modal.css'

function Modal({setOpen}) {
 // const [count, setCount] = useState(0)

  return (
    <>
      <div className="modal-back">
        <div className="modal">
          <h2>안녕하세요</h2>
            <p>모달 내용은 어쩌고 저쩌고</p>
            <div className="modal-close">
              <button onClick={()=>setOpen((open)=>false)}>닫기</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
