import React from "react";
import './footer.css'; // Make sure the CSS file is imported

export const Footer = () => {
  return (
    <footer className="bg-off-white text-center p-4">
      <p className="footer-text">
        Courtesy of the CareTech Team <br />
        Special thanks to these projects, which inspired Melanoma Detector{" "}
        <br />© 2025 Melanoma Detector by CareTech
      </p>
    </footer>
  );
};
