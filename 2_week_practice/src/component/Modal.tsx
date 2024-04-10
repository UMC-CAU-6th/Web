import React, { useState } from "react";
import "../style.css";

const Modal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <h1>밍키</h1>
      <p>UMC Front 밍키 입니다.</p>
      <button id="open" onClick={openModal}>
        열기
      </button>
      <div
        className="modal-wrapper"
        style={{ display: modalOpen ? "flex" : "none" }}
      >
        <div className="modal">
          <div className="modal-title">왜 밍키인가?</div>
          <p>고등학교 별명이 밍키입니다.</p>
          <div className="close-wrapper">
            <button id="close" onClick={closeModal}>
              닫기
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
