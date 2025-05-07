import React from "react";

const ArrowDownIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 9l-7 7-7-7"
    ></path>
  </svg>
);

export const Hero = () => {
  const handleLearnMoreClick = (e) => {
    e.preventDefault();
    const whyWeMatterSection = document.getElementById("why-we-matter");
    if (whyWeMatterSection) {
      whyWeMatterSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="text-main-brown h-screen flex flex-col">
      {/* Main Content Area - centered */}
      <div className="flex-grow flex items-center justify-center p-8 md:p-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-header-1 mb-4">
              Application utility and purpose in a sentence.
            </h1>
            <p className="text-body mb-2">
              Explain the purpose, utility, and function of the application in a
              single sentence in greater detail for the user to understand and
              follow.
            </p>
            <p className="text-sm text-secondary-brown mb-8">
              Disclaimer: This is not a replacement for receiving professional
              treatment. Redirect with hyperlink to Doctors & Clinic resources.
            </p>
            <button className="text-white text-3xl font-bold bg-orange-500 py-3 px-8 rounded-full hover:opacity-90 transition-opacity">
              Start Scanning
            </button>
          </div>
          {/* Image */}
          <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0 relative">
            <img
              src="/assets/creative-young-adult-cropped.png"
              alt="Melanoma detection concept"
              className="max-w-full h-auto md:max-w-md lg:max-w-lg rounded-3xl"
            />
            <img src="assets/brown-circle.svg" alt="Brown Circle" className="absolute w-full h-full -rotate-6" />
          </div>
        </div>
      </div>

      {/* Learn More - at the bottom of the section */}
      <div className="pb-10 text-center">
        <a
          href="#why-we-matter"
          onClick={handleLearnMoreClick}
          className="text-main-brown text-lg hover:text-orange-500 transition-colors inline-flex items-center"
        >
          Learn More
          <ArrowDownIcon className="w-5 h-5 inline-block ml-2" />
        </a>
      </div>
    </section>
  );
};
