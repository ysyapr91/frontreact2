import React from 'react';
import Header from 'pages/layout/header';
import Content from 'pages/layout/content';
import Footer from 'pages/layout/footer';

import 'assets/css/common.css';

function Main() {
    return (
      <div className="container">
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </div>
    );
  }

export default Main;