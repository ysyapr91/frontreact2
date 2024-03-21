/**
 * content.jsx
 * useState 사용 기본형
 */

import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'assets/css/common.css';
import 'assets/css/slideTab.css';
import * as Common from 'components/common';
import * as Pages from 'components/pages';
import * as Tests from 'components/tests';

function Content() {
  const [activetab, setActiveTab] = useState(0);
  const content = useSelector(state => state.content);
  const tabbarRef = useRef(null);
  const tconRef = useRef(null);
  const tabWidth = 100;
  const items = ['1', '2', '3', '4'];

  const switchTab = (index) => {
    setActiveTab(index);
  };

  useEffect(() => {
    if(tabbarRef.current) {
      tabbarRef.current.style.setProperty('--tabwidth', `${tabWidth}px`);
    }
  }, [tabbarRef]);

  const whichStep = items[activetab];

  return (
    <>
      <div className="content">
        <div className="tabs" ref={tabbarRef}>
          {items.map((tab, index) => (
            <div
              key={index}
              className={`tabitem ${index === activetab ? 'active' : ''}`}
              onClick={() => switchTab(index)}
            >
              {tab}
            </div>
          ))}
          <div
            className="slider"
            style={{ transform: `translateX(${activetab * tabWidth}px)` }}
          ></div>
        </div>
        <div className="tabcontainer" ref={tconRef}>
          {whichStep === '1' && <Tests.Test />}
          {whichStep === '2' && <Tests.TestCounter />}
          {whichStep === '3' && <Tests.TestCounterRedux />}
          {whichStep === '4' && <Tests.TestReduxData />}
        </div>
      </div> 
    </>
  );
}

export default Content;