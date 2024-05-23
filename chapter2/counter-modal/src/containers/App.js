import React, { useRef} from "react";
import "./App.css"
import Counter from "../components/counter.js"
import Modal from "../components/modal.js"

function App() {
  const modalRef = useRef({});
  function closeModal() {
    modalRef.current.toggleModal();
  }

  return (
    <>
      <Counter />
      <button onClick={closeModal}>모달 열기</button>
      <Modal ref={modalRef}/>
    </>
    
  );
}

export default App;
