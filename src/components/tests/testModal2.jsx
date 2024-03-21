import React, { useState } from 'react';
import * as Common from 'components/common';
import * as Tests from 'components/tests';

import { useSelector, useDispatch } from 'react-redux';
import { pushList } from 'reducers/module/modalReducer';

const TestModal = () => {

  const modal = useSelector(state => state.modal);
  const dispatch = useDispatch();

  const onPush = (e) => {
    dispatch(pushList(e));
  }

  return (
    <>
      <div>Modal Test 2</div>

      {modal.list}<br/>
      <button onClick={() => onPush('test')}>Open Test1</button>
      <Common.Modal2 is="test">
        <Tests.Test></Tests.Test>
      </Common.Modal2>
      <br/>
      <button onClick={() => onPush('testCounter')}>Open Test2</button>
      <Common.Modal2 is="testCounter">
        <Tests.TestCounter></Tests.TestCounter>
      </Common.Modal2>
    </>
  );
};

export default TestModal;