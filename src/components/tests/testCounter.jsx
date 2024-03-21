import React, { useState } from 'react';

function TestCounter() {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber(n => n + 1);
  }

  const onDecrease = () => {
    setNumber(n => n - 1);
  }

  return (
    <div>
      <h4>[testCounter useState] {number}</h4>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default TestCounter;