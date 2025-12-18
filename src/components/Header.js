import React from "react";
import WelcomeFace from "./WelcomeFace";

function Header() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <div className="brand">
          <WelcomeFace />
          <div className="brand-text">
            <span className="brand-name">FastStep</span>
            <span className="brand-sub">E‑commerce</span>
          </div>
        </div>
        <nav className="primary-nav" aria-label="Main navigation">
          <a href="#" className="nav-link">
            Home
          </a>
          <a href="#" className="nav-link">
            Shop
          </a>
          <a href="#" className="nav-link">
            Cart
          </a>
          <a href="#" className="nav-link">
            Account
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
