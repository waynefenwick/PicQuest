import React, { useState } from 'react';

function Popup({ id, buttonText, children }) {
  const [isVisible, setIsVisible] = useState(false);

  const showPopup = () => {
    setIsVisible(true);
  };

  const closePopup = () => {
    setIsVisible(false);
  };

  let popupContent;
  if (id === 'loginPopup') {
    popupContent = (
      <div className="popup-content">
        <h2>Log In</h2>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Log In</button>
        </form>
        <span className="close" onClick={closePopup('loginPopup')}>
          &times;
        </span>
      </div>
    );
  } else if (id === 'signupPopup') {
    popupContent = (
      <div className="popup-content">
        <h2>Sign Up</h2>
        <form>
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign Up</button>
        </form>
        <span className="close" onClick={closePopup('signupPopup')}>
          &times;
        </span>
      </div>
    );
  }

  return (
    <div className="popup">
      <button className="popup-button" onClick={showPopup}>
        {buttonText}
      </button>
      {isVisible && (
        <div className="popup-content" id={id}>
          {popupContent}
        </div>
      )}
    </div>
  );
}

export default Popup;
