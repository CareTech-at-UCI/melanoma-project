import React from "react";
import { Link } from "react-router-dom";

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
    <section className="text-main-brown py-16 md:py-24 p-8 md:p-16">
      <div className="container mx-auto text-center">
        <h2 className="text-header-2 mb-4">How the Project was Built</h2>
        <p className="text-body text-secondary-brown mb-12 max-w-7xl mx-auto">
          An explanation of how the project was built for its purposes but also
          for the purpose of teaching stwudents. Include all information about
          how the project was built.
        </p>

        <div className="flex justify-center items-center flex-wrap mb-12 gap-4 md:gap-8">
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

        <div className="flex justify-center items-center gap-8">
          {/* ! LINK TO RIGHT THING */}
          <Link
            to="/team"
            className="text-main-orange text-xl font-bold hover:underline"
          >
            View Team &gt;
          </Link>
          {/* ! LINK TO RIGHT THING */}
          <Link
            to="/credits"
            className="text-main-orange text-xl font-bold hover:underline"
          >
            Project Credits &gt;
          </Link>
        </div>
      </div>
    </section>
  );
};
