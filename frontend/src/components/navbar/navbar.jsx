import React, { useState } from 'react'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="bg-off-white py-2">
      <div className="container mx-auto px-8">
        <div className="flex justify-between items-center">
          <a href="/" className="text-[16px] text-main-brown font-gantari font-bold">
            Melanoma Detector
          </a>
          <button
            onClick={toggleMenu}
            className="lg:hidden text-main-brown focus:outline-none"
          >
            {/* Hamburger */}
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Normal */}
          <div className="hidden lg:flex justify-center items-center space-x-8">
            <a href="/" className="text-main-brown">Home</a>
            <a href="/" className="text-main-brown">Doctors & Clinics</a>
            <a href="/" className="text-main-brown">Credits</a>
            <a href="/" className="text-main-brown">Education</a>
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="/"
              className="bg-[#D35400] text-white px-3.5 py-1.5 rounded-full transition duration-300"
            >
              Scan
            </a>
          </div>
        </div>

        {/* Mobile */}
        <div
          className={`lg:hidden ${
            isOpen ? 'block' : 'hidden'
          } pt-4`}
        >
          <div className="flex flex-col space-y-4">
            <a href="/" className="text-main-brown">Home</a>
            <a href="/" className="text-main-brown">Doctors & Clinics</a>
            <a href="/" className="text-main-brown">Credits</a>
            <a href="/" className="text-main-brown">Education</a>
            <a
              href="/"
              className="bg-[#D35400] text-white px-6 py-2 rounded-full transition duration-300 inline-block w-fit"
            >
              Scan
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export const Footer = () => {
  return (
      <footer className="bg-off-white text-center p-4">
          <p className="text-[16px] text-main-brown">
              Courtesy of the CareTech Team <br />
              Special thanks to these projects, which inspired Melanoma Detector <br />
              © 2025 Melanoma Detector by CareTech 
          </p>

      </footer>
  );
}

// export const navbar = () => {
//   return (
//     <div>navbar</div>
//   )
// }


