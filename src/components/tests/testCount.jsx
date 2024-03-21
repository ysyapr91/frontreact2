import React from 'react';
import TestCounter from 'components/tests/testCounter';
import TestCounterRedux from 'components/tests/testCounterRedux';

function Test() {

  return (
    <>
      <h3> COUNT TEST</h3>
      <TestCounter></TestCounter>
      <TestCounter></TestCounter>
      <TestCounterRedux></TestCounterRedux>
      <TestCounterRedux></TestCounterRedux>
    </>
  );
}

export default Test; 