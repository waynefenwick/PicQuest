import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

function NavLink() {
  const [activePopup] = useState(null);
  const [addUser, { error }] = useMutation(ADD_USER);
  const [activeLink, setActiveLink] = useState('home'); // Initialize with the default active link
  const [userFormData, setUserFormdata ] = useState({firstName: '',lastName: '',email: '',password: ''});

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

  const handleNavLinkClick = (linkId) => {
    setActiveLink(linkId);
  };

  const handleSubmit = async () => {
    let first = document.getElementById('signUpFirstName').value;
    let last = document.getElementById('signUpLastName').value;
    let email = document.getElementById('signUpEmail').value;
    let password = document.getElementById('signUpPassword').value;

    setUserFormdata({
      firstName:first,
      lastName:last,
      email:email,
      password:password
    });

    const { data } = await addUser({
      variables: { ...userFormData }
    });

    console.log(data);
    Auth.login(data.addUser.token);

  }

  return (
    <>
      <nav className="navbar">
      <Link to="/" className={activeLink === 'home' ? 'active' : ''} onClick={() => handleNavLinkClick('home')}>Home</Link>
        <Link to="/tab1" className={activeLink === 'tab1' ? 'active' : ''} onClick={() => handleNavLinkClick('tab1')}>People</Link>
        <Link to="/tab2" className={activeLink === 'tab2' ? 'active' : ''} onClick={() => handleNavLinkClick('tab2')}>Animals</Link>
        <Link to="/tab3" className={activeLink === 'tab3' ? 'active' : ''} onClick={() => handleNavLinkClick('tab3')}>Nature</Link>
        <Link to="/tab4" className={activeLink === 'tab4' ? 'active' : ''} onClick={() => handleNavLinkClick('tab4')}>Oceans</Link>
        <Link to="/tab5" className={activeLink === 'tab5' ? 'active' : ''} onClick={() => handleNavLinkClick('tab5')}>Cities</Link>
        <Link to="/tab6" className={activeLink === 'tab6' ? 'active' : ''} onClick={() => handleNavLinkClick('tab6')}>Unusual</Link>
        <Link to="/tab7" className={activeLink === 'tab7' ? 'active' : ''} onClick={() => handleNavLinkClick('tab7')}>Relaxing</Link>
        <div className="search-bar">
          <button>Search</button>
          <input type="text" placeholder="Search..." />
        </div>
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
            <input id="loginUsername" type="text" placeholder="Username" />
            <input id="loginPassword" type="password" placeholder="Password" />
            <button>Log In</button>
          <span className="close" onClick={() => closePopup('loginPopup')}>
            &times;
          </span>
        </div>
      </div>
      <div className={`popup ${activePopup ? 'active' : ''}`} id="signupPopup">
        <div className="popup-content">
          <h2>Sign Up</h2>
            <input id="signUpFirstName" type="text" placeholder="FirstName" />
            <input id="signUpLastName" type="text" placeholder="LastName" />
            <input id="signUpEmail" type="email" placeholder="Email" />
            <input id="signUpPassword" type="password" placeholder="Password" />
            <button onClick={handleSubmit}>Sign Up</button>
          <span className="close" onClick={() => closePopup('signupPopup')}>
            &times;
          </span>
        </div>
      </div>
    </>
  );
}

export default NavLink;
