import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from '../Popup/Popup'; // Corrected import path

function NavLink() {
  const [activePopup, setActivePopup] = useState(null);

  const showPopup = (popupId) => {
    setActivePopup(popupId);
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/tab1">People</Link>
      <Link to="/tab2">Animals</Link>
      <Link to="/tab3">Nature</Link>
      <Link to="/tab4">Oceans</Link>
      <Link to="/tab5">Cities</Link>
      <Link to="/tab6">Unusual</Link>
      <Link to="/tab7">Relaxing</Link>
      <div className="login-buttons-container">
        <button className="login-button" onClick={() => showPopup('loginPopup')}>Log In</button>
        <button className="signup-button" onClick={() => showPopup('signupPopup')}>Sign Up</button>
      </div>
      {/* Render popups here */}
      {activePopup === 'loginPopup' && (
        <Popup id="loginPopup" buttonText="Log In" onClose={closePopup}>
          {/* Login form and content */}
        </Popup>
      )}
      {activePopup === 'signupPopup' && (
        <Popup id="signupPopup" buttonText="Sign Up" onClose={closePopup}>
          {/* Signup form and content */}
        </Popup>
      )}
    </nav>
  );
}

export default NavLink;
