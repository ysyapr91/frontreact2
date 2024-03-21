import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Popup, PopupList } from 'components/common';
import * as Tests from 'components/tests';

const TestPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const [popList, setPopList] = useState({
    isOpen: false,
    idx: 0,
    list: [<Tests.TestReduxData />, <Tests.Test />, <Tests.TestRequest />, <Tests.TestCount />]
  });

  const togglePopList = () => {
    setPopList(prev => ({
      ...prev,
      isOpen: !prev.isOpen
    }));
  };

  const [popList2, setPopList2] = useState({
    isOpen: false,
    idx: 0,
    list: [<Tests.TestReduxData />, <Tests.TestReduxData />, <Tests.TestReduxData />, <Tests.TestReduxData />, <Tests.TestReduxData />]
  });

  const togglePopList2 = () => {
    setPopList2(prev => ({
      ...prev,
      isOpen: !prev.isOpen
    }));
  };

  let onData = {
    count: 0
  }

  return (
    <>
      <button onClick={togglePopup}>팝업 열기</button> 
      {isOpen && (
        <Popup isOpen={isOpen} setIsOpen={setIsOpen}>
          Popup
        </Popup>
      )}
      <br/><br/>
      <button onClick={togglePopList}>리스트 팝업 열기</button> 
      {popList.isOpen && (
        <PopupList state={popList} set={setPopList} data={onData}/>
      )}
      <br/><br/>
      <button onClick={togglePopList2}>리스트2 팝업 열기</button> 
      {popList2.isOpen && (
        <PopupList state={popList2} set={setPopList2} data={onData}/>
      )}
    </>
  );
};

export default TestPopup;