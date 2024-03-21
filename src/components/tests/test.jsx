import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Testsss() {
  const content = useSelector(state => state.content);
  const dispatch = useDispatch(); 

  return (
    <>
      {content.tabIdx}
      <br/>
      {content.tabList[content.tabIdx].page}
    </>
  );
};

export default Testsss;