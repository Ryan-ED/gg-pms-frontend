import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">GG PMS</a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/product-management">Product management</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/product-capture">Product Capture</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;