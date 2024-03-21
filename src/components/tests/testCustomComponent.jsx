import React from 'react';

import * as Common from 'components/common';
import * as Pages from 'components/pages';
import * as Tests from 'components/tests';

import { useSelector } from 'react-redux';

function Content() {
  const content = useSelector(state => state.content);

  const CustomTag = 'h3';
  content.page = Pages.Home;

  return (
    <>
      <CustomTag>CustomTag</CustomTag>
      <br/>
    </>
  );
}

export default Content;