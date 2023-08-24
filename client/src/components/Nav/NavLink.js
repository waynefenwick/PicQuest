import React from 'react';

function NavLink({ href, children }) {
  return (
    <a href={href}>{children}</a>
  );
}

export default NavLink;
