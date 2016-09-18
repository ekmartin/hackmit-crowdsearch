import Link from 'react-router/Link';
import React from 'react';

const Header = () => (
  <header className="hero background-color">
    <div className="hero-head">
      <div className="container">
        <nav className="nav">
          <div className="nav-left">
            <Link to="/" className="nav-item is-brand">
              <img src="/images/logo.svg" alt="Crowd Search" />
              <h1 className="title">Crowd Search</h1>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
