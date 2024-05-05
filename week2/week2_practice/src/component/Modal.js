import React, { useState, useEffect, useRef } from "react";

const Modal = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const modalBackground = useRef();

    useEffect(() => {
  if (modalOpen) {
    console.log("모달이 열렸습니다.");
  } else {
    console.log("모달이 닫혔습니다.");
  }
}, [modalOpen]);
  
    return (
      <>
        <div className="title">
            <h1>안녕하세요!</h1>
            <h3>내용내용내용</h3>
        </div>
        <div className={'btn-wrapper'}>
          <button className={'modal-open-btn'} onClick={() => setModalOpen(true)}>
            버튼 열기
          </button>
        </div>
        {
          modalOpen &&
          <div className={'modal-container'} ref={modalBackground} onClick={e => {
            if (e.target === modalBackground.current) {
              setModalOpen(false);
            }
          }}>
            <div className={'modal-content'}>
              <h1>안녕하세요!</h1>
              <h5>모달 내용은 사용자에게 정보를 제공하거나 특정 작업을 수행하기 위해 화면에 팝업 창을 표시하는 방법</h5>
              <button className={'modal-close-btn'} onClick={() => setModalOpen(false)}>
                닫기
              </button>
            </div>
          </div>
        }
      </>
    );
  };
  
  export default Modal;