import React from 'react';
import 'assets/css/modal.css';

const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  const mStyle = { display: "none" };
  const mClassName = isOpen ? "modal" : "modal closed";
  mStyle.display = isOpen ? "display" : "none";

  return (
    <div className={mClassName} style={mStyle}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <div className="modal-content-text">{children}</div>
      </div>
    </div>
  );
};

export default Modal;