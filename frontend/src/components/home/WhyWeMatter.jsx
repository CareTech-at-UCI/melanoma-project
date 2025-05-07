import React from "react";

export const WhyWeMatter = () => {
  return (
    <section
      id="why-we-matter"
      className="text-main-brown bg-[#DECEC2] py-16 md:py-24 p-8 md:p-16"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-header-2 mb-6">Why We Matter.</h2>
          <p className="text-body mb-8">
            A paragraph about why the application is important and any
            additional information related to it. This will be as long or as
            short as you need it.
          </p>
          <button className="text-orange-500 text-xl font-bold bg-white border border-main-orange py-3 px-8 rounded-full hover:bg-orange-500 hover:text-white transition-colors">
            Professional Assistance &gt;
          </button>
        </div>
        {/* Image */}
        <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
          <img
            src="/assets/why-we-matter.png"
            alt="People connecting"
            className="max-w-full h-auto md:max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};
