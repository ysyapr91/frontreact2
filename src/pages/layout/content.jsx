import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';

function Content() {
  const content = useSelector(state => state.content);
  const getComponent = () => {
    return content.page;
  };

  return (
    <div className='content'>

    </div>
  );
}

export default Content;