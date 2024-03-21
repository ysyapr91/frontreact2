import React from 'react';
import * as Layout from 'components/pages';

import 'assets/css/common.css';

function Main() {
    return (
      <div className="container">
        <Layout.Header2></Layout.Header2>
        <Layout.Content2></Layout.Content2>
        <Layout.Footer></Layout.Footer>
      </div>
    );
  }

export default Main;