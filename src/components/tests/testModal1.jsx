import React, { useState } from 'react';
import * as Common from 'components/common';
import * as Tests from 'components/tests';

const TestModal = () => {
  const [modalState, setModalState] = useState({
    test: false,
    testCounter: false
  });

  const toggleModal = (modalName) => {
    setModalState(prevState => ({
      ...prevState,
      [modalName]: !prevState[modalName]
    }));
  };

  return (
    <>
      <div>Modal Test</div>
      <button onClick={() => toggleModal('test')}>Open Test1</button>
      <Common.Modal isOpen={modalState.test} onClose={() => toggleModal('test')}>
        <Tests.Test></Tests.Test>
      </Common.Modal>
      <br/>
      <button onClick={() => toggleModal('testCounter')}>Open Test2</button>
      <Common.Modal isOpen={modalState.testCounter} onClose={() => toggleModal('testCounter')}>
        <Tests.TestCounter></Tests.TestCounter>
      </Common.Modal>
    </>
  );
};

export default TestModal;