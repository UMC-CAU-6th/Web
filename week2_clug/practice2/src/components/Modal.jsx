import './Modal.css';

function Modal({setOpen}) {
  return (
    <div className="modal-container">
        <div className="modal">
            <h2>안녕하세요</h2>
            <p>모달 내용은 어쩌고 저쩌고</p>
            <div className="close">
                <button onClick={() => setOpen((open) => false)}>닫기</button>
            </div>
        </div>
    </div>
  );
}


export default Modal;