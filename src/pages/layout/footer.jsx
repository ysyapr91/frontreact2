import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPage } from 'reducers/module/viewReducer';

function Footer() {
  const dispatch = useDispatch();
  const view = useSelector(state => state.view);
  const items = view.pageList.mainTab;
  const [tabIdx, setTabIdx] = useState(0);

  const switchTab = (idx) => {
    setTabIdx(idx);
    dispatch(setPage('main', items[idx].component));
  };

  return (
    <div className="footer">
      {items.map((tab, idx) => (
        <div className={`tab ${idx === tabIdx ? 'active' : ''}`} onClick={() => switchTab(idx)}>{tab.page}</div>
      ))}
    </div>
  );
}

export default Footer;