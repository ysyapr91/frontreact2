/**
 * content2.jsx backup
 */

import React, { useState, Suspense, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'assets/css/common.css';
import 'assets/css/slideTab.css';
import * as Common from 'components/common';
import * as Pages from 'components/pages';
import * as Tests from 'components/tests';

function Content() {
  const content = useSelector(state => state.content);
  const tabbarRef = useRef(null);
  const tabWidth = 100;
  const items = [
    {page: "HOME", component: <Pages.Home />},
    {page: "Request", component: <Tests.TestRequest />},
  ];

  const [activetab, setActiveTab] = useState({...items[0], idx: 0});

  const switchTab = (page) => {
    let idx = items.findIndex((e) => { return e.page == page; })
    setActiveTab({
      ...items[idx],
      idx: idx
    })
  };

  const getComponent = () => {
    return items[activetab.idx].component;
  };

  useEffect(() => {
    if(tabbarRef.current) {
      tabbarRef.current.style.setProperty('--tabwidth', `${tabWidth}px`);
    }
  }, [tabbarRef]);

  return (
    <>
      <div className="content">
        <div className="tabs" ref={tabbarRef}>
          {items.map((tab, index) => (
            <div
              key={index}
              className={`tabitem ${tab.page === activetab.page ? 'active' : ''}`}
              onClick={() => switchTab(tab.page)}
            >
              {tab.page}
            </div>
          ))}
          <div
            className="slider"
            style={{ transform: `translateX(${activetab.idx * tabWidth}px)` }}
          ></div>
        </div>
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