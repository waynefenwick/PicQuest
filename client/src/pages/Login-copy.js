import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1">
      <button onClick={openPopup}>Open Login Popup</button>

      {isPopupOpen ? (
        <div className="popup" id="loginPopup">
          <div className="popup-content">
            <h2>Log In</h2>
            <form onSubmit={handleFormSubmit}>
              <input
                type="text"
                placeholder="Username"
                name="email"
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
              <button type="submit">Log In</button>
            </form>
            <span className="close" onClick={closePopup}>&times;</span>
          </div>
        </div>
      ) : null}

      {/* Rest of your login component content */}
    </div>
  );
}

export default Login;
