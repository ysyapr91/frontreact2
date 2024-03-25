import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';

function Content() {
  const view = useSelector(state => state.view);

  const getComponent = () => {
    return view.page.main;
  };

  return (
    <div className='content'>
      <Suspense fallback={<div>Loading...</div>}>
        {getComponent()}
      </Suspense>
    </div>
  );
}

export default Content;