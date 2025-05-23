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
    <section className="text-main-brown min-h-screen flex flex-col">
      {/* Main Content Area - centered */}
      <div className="flex-grow flex items-center justify-center p-8 lg:p-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-left mt-20">
            <h1 className="mb-8 text-4xl lg:text-header-1 md:text-header-1 lg:font-bold md:font-bold sm:font-bold"> {/* Have to add repeated font-bold because of other font overriding */}
              Application utility and purpose in a sentence.
            </h1>
            <p className="text-body text-xl mb-6">
              Explain the purpose, utility, and function of the application in a
              single sentence in greater detail for the user to understand and
              follow.
            </p>
            <p className="lg:text-body-3 md:text-lg mb-8">
              Disclaimer: This is not a replacement for receiving professional
              treatment. Redirect with hyperlink to Doctors & Clinic resources.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="text-white text-2xl lg:text-header-4 md:text-3xl font-bold bg-orange-500 py-2 lg:py-1 md:py-3 px-4 lg:px-6 md:px-8 rounded-full hover:opacity-90 transition-opacity">
                Start Scanning
              </button>
            </div>
          </div>
          {/* Image */}
          <div className="lg:w-5/12 md:w-1/2 flex justify-center items-center relative mt-20">
            <img
              src="/assets/creative-young-adult-cropped.png"
              alt="Melanoma detection concept"
              className="w-60 md:w-full h-auto rounded-3xl"
            />
            <img src="assets/brown-circle.svg" alt="Brown Circle" className="absolute w-full h-full -rotate-6 mt-10" />
          </div>
        </div>
      </div>
      {/* Learn More - at the bottom of the section */}
      <div className="flex flex-col pb-24 text-center justify-center items-center">
        <a
          href="#why-we-matter"
          onClick={handleLearnMoreClick}
          className="text-main-brown text-lg md:text-2xl hover:text-orange-500 transition-colors flex flex-col items-center"
        >
          Learn More
          <ArrowDownIcon className="w-5 md:w-8 h-5 md:h-8 inline-block ml-2" />
        </a>
      </div>
    </section>
  );
};
