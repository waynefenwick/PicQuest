// Pages/Home.js
import React from 'react';
import HomeContent from '../components/Home';
import Popup from '../components/Popup';
import Buttons from '../components/Buttons'; // Corrected import path for Buttons

function Tabs() {
  return (
    <div>
      <HomeContent />
      <Popup />
      <Buttons /> {/* Include the Buttons component */}
    </div>
  );
}

export default Tabs;

