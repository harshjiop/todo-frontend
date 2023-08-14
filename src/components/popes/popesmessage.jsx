// MessagePopup.js

import React, { useState } from 'react';
import './popesmessage.css';

function MessagePopup({ message }) {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="message-popup">
          <div className="message-content">
            <span className="message-text">{message}</span>
            <button className="close-button" onClick={handleClosePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default MessagePopup;
