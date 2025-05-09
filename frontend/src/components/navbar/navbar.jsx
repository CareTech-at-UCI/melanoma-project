import React, { useState } from "react";
import "./navbar.css"; // Ensure the CSS file is imported

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar lg:py-4">
      <div className="container mx-auto lg:px-4 sm:px-0">
        <div className="bar-header flex justify-between items-center">
          {/* Logo with Two Lines on Mobile */}
          <a1 href="/" className="logo">
            Melanoma Detector
          </a1>

          {/* Hamburger Icon with Larger Size on Mobile */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-main-brown focus:outline-none"
          >
            <svg
              className="hamburger-icon"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M4 6h16M4 12h16M4 18h16" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex justify-center items-center space-x-8">
            <a href="/" className="text-main-brown">
              Home
            </a>
            <a href="/" className="text-main-brown">
              Doctors & Clinics
            </a>
            <a href="/" className="text-main-brown">
              Credits
            </a>
            <a href="/" className="text-main-brown">
              Education
            </a>
          </div>

          {/* Desktop Scan Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="/" className="scan-button">
              Scan
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${isOpen ? "block" : "hidden"} mobile-menu`}>
          <div className="mobile-nav flex flex-col">
            <a href="/" className="mobile-menu-item">
              Home
            </a>
            <a href="/" className="mobile-menu-item">
              Doctors & Clinics
            </a>
            <a href="/" className="mobile-menu-item">
              Credits
            </a>
            <a href="/" className="mobile-menu-item">
              Education
            </a>
            <a href="/" className="scan-button mobile-scan-button">
              Scan
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
