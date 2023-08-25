import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavLink() {
  const [activePopup] = useState(null);

  const showPopup = (popupId) => {
    const popupElement = document.getElementById(popupId);
    if (popupElement) {
      popupElement.style.display = 'flex';
    }
  };

  const closePopup = (popupId) => {
    const popupElement = document.getElementById(popupId);
    if (popupElement) {
      popupElement.style.display = 'none';
    }
  };

  return (
    <>
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
          <button className="login-button" onClick={() => showPopup('loginPopup')}>
            Log In
          </button>
          <button className="signup-button" onClick={() => showPopup('signupPopup')}>
            Sign Up
          </button>
        </div>
      </nav>
      <div className={`popup ${activePopup ? 'active' : ''}`} id="loginPopup">
        <div className="popup-content">
          <h2>Log In</h2>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Log In</button>
          </form>
          <span className="close" onClick={() => closePopup('loginPopup')}>
            &times;
          </span>
        </div>
      </div>
      <div className={`popup ${activePopup ? 'active' : ''}`} id="signupPopup">
        <div className="popup-content">
          <h2>Sign Up</h2>
          <form>
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Sign Up</button>
          </form>
          <span className="close" onClick={() => closePopup('signupPopup')}>
            &times;
          </span>
        </div>
      </div>
    </>
  );
}

export default NavLink;
