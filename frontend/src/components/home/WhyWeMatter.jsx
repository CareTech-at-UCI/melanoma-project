import React from "react";

export const WhyWeMatter = () => {
  return (
    <section
      id="why-we-matter"
      className="h-[90vh] md:h-[70vh] flex flex-col md:flex-row text-main-brown bg-[#B59988]"
    >
      <div className="h-full mx-auto container flex flex-col md:flex-row items-center py-16 md:py-0 p-8 md:p-0">
        {/* Text Content */}
        <div className="md:w-full p-0 md:px-20 text-left space-y-5">
          <h2 className="text-header-2 lg:text-header-3 lg:font-semibold md:text-header-1">Why <i>We</i> Matter.</h2>
          <p className="text-body text-base lg:text-body-2 lg:text-0xl md:text-2xl">
            A paragraph about why the application is important and any
            additional information related to it. This will be as long or as
            short as you need it.
          </p>
          <button className="text-orange-500 text-lg md:text-xl font-bold bg-white border border-main-orange py-2 md:py-3 px-4 md:px-8 rounded-full hover:bg-orange-500 hover:text-white transition-colors">
            Professional Assistance &gt;
          </button>
        </div>
      </div>
      {/* Image */}
      <div className="w-full bg-cover bg-center bg-no-repeat h-full"
        style={{ backgroundImage: "url('/assets/why-we-matter.png')" }}>
      </div>
    </section>
  );
};