import React from 'react';
import Popup from '../Popup/Popup'; // Import the Popup component

function LoginButton() {
  return (
    <Popup id="loginPopup">
      <h2>Log In</h2>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Log In</button>
      </form>
    </Popup>
  );
}

export default LoginButton;

