import React from 'react';
import Popup from '../Popup/Popup'; // Import the Popup component

function SignupButton() {
  return (
    <Popup id="signupPopup">
      <h2>Sign Up</h2>
      <form>
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign Up</button>
      </form>
    </Popup>
  );
}

export default SignupButton;

