import React from 'react';
import NavLink from './NavLink';
import LoginButton from './LoginButton';
import SignupButton from './SignupButton';
import Auth from '../../utils/auth'; // Import your Auth utility
import { Link } from 'react-router-dom'; // Import React Router's Link component

function Navbar() {
  const loggedIn = Auth.loggedIn();

  return (
    <nav className="navbar">
      <NavLink href="#home">Home</NavLink>
      {/* Add NavLink components for other sections */}
      <div className="login-buttons-container">
        {loggedIn ? (
          // If the user is logged in, show a link to a profile or dashboard
          <Link to="/profile">Profile</Link>
        ) : (
          // If not logged in, show login and signup buttons
          <>
            <LoginButton />
            <SignupButton />
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
