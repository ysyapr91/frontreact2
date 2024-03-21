import React, { useEffect, useState } from 'react';
import 'assets/css/modal.css';

import { useSelector, useDispatch } from 'react-redux';
import { initList } from 'reducers/module/modalReducer';

const Modal = ({ children, is }) => {

  const modal = useSelector(state => state.modal);
  const dispatch = useDispatch();

  const mStyle = { display: "none" };

  const onClose = () => {
    dispatch(initList());
  };

  return (
    <div className="modal" id={is} style={mStyle}>
      <div className="modal-content">
        <span className="close" onClick={() => onClose()}>&times;</span>
        <div className="modal-content-text">{children}</div>
      </div>
    </div>
  );
};

export default Modal; 