import React from 'react';
import 'assets/css/popup.css';

function Popup({ state, set, data }) {
  const closePopup = () => {
    set(prevState => ({
      ...prevState,
      isOpen: false
    }));
  };

  const goToPage = (idx) => {
    set(prevState => ({
      ...prevState,
      idx: Math.max(0, Math.min(prevState.list.length - 1, idx))
    }));
  };

  const renderContent = () => {
    return state.list.map((component, idx) => (
      <div key={idx} className={`popup-content ${state.idx === idx ? 'active' : ''}`}>
        {component}
      </div>
    ));
  };

  return (
    <div className="popup-container">
      <div className="popup">
          <div className="popup-header">
            <button onClick={() => goToPage(state.idx - 1)}>Prev</button>
            <span>{state.idx + 1} / {state.list.length}</span>
            <button onClick={() => goToPage(state.idx + 1)}>Next</button>
            <span className="close-button" onClick={closePopup}>X</span>
          </div>
          {renderContent()}
      </div>
    </div>
  );
}

export default Popup;