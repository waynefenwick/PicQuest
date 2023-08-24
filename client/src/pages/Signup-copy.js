import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import SignupPopup from './SignupPopup'; // Update the path as needed

function Signup(props) {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });
  const [addUser] = useMutation(ADD_USER);
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // Call the necessary mutation and Auth.login() here
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
      <Link to="/login">← Go to Login</Link>

      <h2>Signup</h2>
      <button onClick={openPopup}>Open Signup Popup</button>

      {isPopupOpen && (
        <SignupPopup
          onClose={closePopup}
          handleFormSubmit={handleFormSubmit}
          handleChange={handleChange}
        />
      )}
    </div>
  );
}

export default Signup;
