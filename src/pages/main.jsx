import React from 'react';
import Header from 'pages/layout/header';
import Content from 'pages/layout/content';
import Footer from 'pages/layout/footer';
import * as Pages from 'pages';

import { useSelector, useDispatch } from 'react-redux';
import { setPage, setPageList } from 'reducers/module/viewReducer';

import 'assets/css/common.css';

function Main() {
  const dispatch = useDispatch();

  const init = () => {
    dispatch(setPageList('mainTab',
      [
        { page: "List", component: <Pages.ChatList /> },
        { page: "T1", component: <Pages.Test1 /> },
        { page: "T2", component: <Pages.Test2 /> }
      ]
    ))
  }

  init();

  return (
    <div className="container">
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default Main;