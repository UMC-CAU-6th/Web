import React, { useState, forwardRef, useImperativeHandle } from "react";
import "./modal.css";

const Modal = forwardRef((props, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => {
        setIsOpen(!isOpen);
    }

    useImperativeHandle(ref, () => ({
        toggleModal,
    }));

    return (
        <>
        {isOpen ? 
            <div class="modal">
            <div class="modal-body">
                <h2>모달</h2>
                <div>이것은 모달입니다.
                    사용자에게 알림을 하거나 
                    특정 내용을 강조할 때 사용할 수 있습니다.
                </div>
                <button onClick={toggleModal}>모달 닫기</button>
            </div>
            </div>
            : null}
        </>
    );
});

export default Modal;