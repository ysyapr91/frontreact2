import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from 'reducers/test/count';

function TestCounterRedux() {

  const count = useSelector(state => state.testCount);
  const dispatch = useDispatch();

  const onIncrease = (i) => {
    dispatch(increase(i));
  }

  const onDecrease = (i) => {
    dispatch(decrease(i));
  }

  return (
    <div>
      <h4>[testCounter redux] {count.number}</h4>
      <button onClick={onIncrease}>+1</button>
      <button  onClick={onDecrease}>-1</button>
    </div>
  );
}

export default TestCounterRedux;