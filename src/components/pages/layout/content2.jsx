/**
 * content2.jsx
 * useSelector, Suspense 사용
 * Tab - header부에 설정 contentReducer를 통해 연결 
 */

import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
function Content() {
  const content = useSelector(state => state.content);
  const getComponent = () => {
    return content.page;
  };

  return (
    <>
      <div className="content">
        <div className="tabcontainer">
          <Suspense fallback={<div>Loading...</div>}>
            {getComponent()}
          </Suspense>
        </div>
      </div> 
    </>
  );
}

export default Content;