import React from 'react';
import { Link } from 'react-router-dom';

function NavLink() {
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
    </nav>
  );
}

export default NavLink;
