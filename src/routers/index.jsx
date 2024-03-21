import React from 'react';
import { Route, Routes } from 'react-router-dom';
import * as Pages from 'components/pages';
import * as Tests from 'components/tests';

const Router = () => {
  return (   
    <Routes>
      <Route path="/" element={<Pages.Home/>}/>
    </Routes>
  )
}

export default Router; 