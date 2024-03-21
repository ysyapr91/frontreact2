import React from 'react';

function Content() {
  const title = 'testPage1';
  const pageNum = 0;

  return (
    <>
        <div>page : { pageNum}</div>
        <div>title : { title }</div>
    </>
  );
}

export default Content; 