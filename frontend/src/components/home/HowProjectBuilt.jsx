import React from "react";

export const HowProjectBuilt = () => {
  const technologies = [
    { alt: "TensorFlow", src: "tensorflow" },
    { alt: "Python", src: "python" },
    { alt: "React", src: "react" },
    { alt: "Tailwind", src: "tailwind" },
    { alt: "FastAPI", src: "fastapi" },
    { alt: "Render", src: "render" },
  ];

  return (
    <section className="text-main-brown py-16 lg:mb-60 md:py-24 p-8 md:p-16">
      <div className="container mx-auto text-center">
        <h2 className="text-header-2 lg:text-header-2 md:text-header-1 mb-4">How the Project was Built</h2>
        <p className="lg:text-body-2 text-body-1 text-base md:text-2xl text-secondary-brown mb-6 max-w-7xl mx-auto">
          This project was built using the ISIC-2019 dataset and various technologies. First,
          we prepared the dataset with proper data cleaning and image preprocessing techniques
          and then trained a convolutional neural network to detect melanoma in images.
        </p>

        <div className="flex justify-center items-center flex-wrap mb-6 gap-4 md:gap-8 lg:pt-10">
          {technologies.map((tech) => (
            <div
              key={tech.alt}
              className="flex flex-col items-center m-2"
              title={tech.alt}
            >
              {/* each image css */}
              <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
                <img
                  src={`/assets/icons/${tech.src}.png`}
                  alt={tech.alt}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
