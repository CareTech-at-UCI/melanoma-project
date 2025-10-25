import React, { useState } from "react";
import { AbcdeCard } from "../components/educational/AbcdeCard";
import { ResourceCard } from "../components/educational/ResourceCard";
import "../components/educational/styles.css"


const ExampleImage = ({ src, alt, containerClass = "" }) => {
  const [isBlurred, setIsBlurred] = useState(true);

  return (
    <div
      className={`${containerClass} overflow-hidden cursor-pointer`}
      onClick={() => setIsBlurred((p) => !p)}
    >
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-all duration-300 ${isBlurred ? "blur-md" : "blur-0"}`}
      />
    </div>
  );
};

export const Educational = () => {
  return (
    <div className="font-gantari text-main-brown bg-[rgba(240,239,237,1)]">
      {/* Learn About Melanoma */}
      <div style={{ backgroundImage: "url('/educational/gradient-bg.png')" }} className="bg-cover bg-center border-b border-[rgba(81,33,13,1)]">
        <div className="mx-auto text-center pt-36">
          <h1 className="text-[40px] font-medium">
            Learn About Melanoma
          </h1>
          <img
            src="/educational/curlyLine.png"
            alt="A person examining a mole on their back"
            className="max-w-xs mx-auto"
          />
        </div>

        <div className="p-10 md:p-0 pt-12 md:pl-16 lg:pl-[106px] flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-xl">
            <h2 className="text-header-2">
              What <i>is</i> Melanoma?
            </h2>
            <p className="text-xl font- leading-relaxed">
              Melanoma is a type of skin cancer that develops when melanocytes,
              cells that give skin its tan or brown color, begin growing
              uncontrollably. Melanoma is significantly more dangerous because of its
              high likelihood to spread to other parts of the body if not found
              and treated early on (American Cancer Society). Keeping an eye on changes 
              in your skin and checking unusual spots early can make a big difference in protecting your health.
            </p>
          </div>
          <div className="mt-8 md:mt-0 md:ml-12">
            <img
              src="/educational/melanoma_back.jpg"
              alt="A person examining a mole on their back"
              className="w-full max-w-[720px] max-h-[408px]"
            />
          </div>
        </div>
      </div>

      {/* ABCDE of Skin Cancer */}
      <div className="px-12 py-12 md:px-16 md:py-12 lg:px-[106px] lg:py-[70px]">
        <img src="/educational/doubleLoopLine.png" alt="double loop line" />
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-header-2">ABCDE of Skin Cancer</h2>
            <p className="text-lg">
              A straightforward way to identify early melanoma risk and take
              steps to prevent further skin damage.
            </p>
          </div>
          <div className="flex flex-row flex-wrap gap-8 justify-center lg:justify-between">
            <AbcdeCard
              letter="A"
              imageSrc="/educational/asymmetric.jpg"
              title="Asymmetry"
              description={
                <span>
                  One half of the spot is <b>unlike</b> or <b>different</b> from
                  the other half.
                </span>
              }
            />
            <AbcdeCard
              letter="B"
              imageSrc="/educational/border.jpg"
              title="Border"
              description={
                <span>
                  The spot has an <b>irregular</b> or <b>ragged border</b>.
                </span>
              }
            />
            <AbcdeCard
              letter="C"
              imageSrc="/educational/color.jpg"
              title="Color"
              description={
                <span>
                  The spot contains a <b>variation</b> of <b>distinct colors</b>{" "}
                  within it.
                </span>
              }
            />
            <AbcdeCard
              letter="D"
              imageSrc="/educational/diameter.png"
              title="Diameter"
              description={
                <span>
                  Above <b>6 millimeters</b> or <b>~1/4 inches</b> in{" "}
                  <b>size</b> (may vary).
                </span>
              }
            />
            <AbcdeCard
              letter="E"
              imageSrc="/educational/evolution.jpg"
              title="Evolution"
              description={
                <span>
                  The spot <b>differs from other spots</b> or <b>changes</b> in{" "}
                  <b>shape</b>, <b>size</b>, <b>texture</b>, or <b>color</b>.
                </span>
              }
            />
          </div>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="relative bg-[#B59988] py-16 pb-14 md:pb-40 text-center">
        <img
          src="/educational/doubleLoopLineWhite.png"
          alt="white looped line"
          className="absolute right-0 top-[-65px] w-3/5 md:w-auto"
        />
        <img
          src="/educational/doubleLoopLineWhiteAlt.png"
          alt="white looped line"
          className="absolute left-0 bottom-[-10px] lg:bottom-[80px] w-3/5 md:w-auto z-20"
        />
        <h2 className="text-header-2">Additional Resources</h2>
        <img
          src="/educational/curlyLine.png"
          alt="brown curly line"
          className="max-w-64 mx-auto"
        />
        <div className="max-w-[80%] py-5 px-4 md:px-16 flex flex-wrap justify-center mx-auto gap-4 md:gap-7">
          <ResourceCard
            imageSrc="/educational/melanoma_types.png"
            title="Types of Melanoma"
            description="There are 7 types of melanoma, with 3 of them being rare variants. The 4 main types are superficial spreading, nodular, lentigo maligna and acral lentiginous."
            additionalInfo="https://cancer.ca/en/cancer-information/cancer-types/melanoma-skin/what-is-melanoma/types-of-melanoma"
          />
          <ResourceCard
            imageSrc="/educational/melanoma_dark_skin.jpg"
            title="Melanoma Skin Cancer on Darker Skin Tones"
            description="Melanoma is often diagnosed in the late stage on darker skin tones. Learn how to identify melanoma on darker skin."
            additionalInfo="https://www.mskcc.org/cancer-care/types/melanoma/melanoma-skin-cancer-dark-black-skin"
          />
          <ResourceCard
            imageSrc="/educational/american_cancer_soc.jpg"
            title="Signs and Symptoms of Melanoma Skin Cancer"
            description="Seeing unusual lesions or discoloring of your skin may indicate a warning of skin cancer, skin cancer itself, or potentially melanoma."
            additionalInfo="https://www.cancer.org/cancer/types/melanoma-skin-cancer/detection-diagnosis-staging/signs-and-symptoms.html"
          />
          <ResourceCard
            imageSrc="/educational/treatment_doctor.jpeg"
            title="Treatment of Melanoma"
            description="Treatment of melanoma is dependent on factors such as location, general health, and whether or not it has spread."
            additionalInfo="https://www.nhs.uk/conditions/melanoma-skin-cancer/treatment/"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <img
            src="/educational/wave.png"
            alt="wavy divider"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Examples of Melanoma */}
      <div className="relative pt-16 pb-20 md:pb-36 px-5 text-center">
        <h2 className="text-header-2">Examples of Melanoma</h2>
        <p className="text-body-3 md:text-body-2">
          If you suspect that there is a lesion on your skin that resembles one
          of these images, try using our scan feature to find further clarity.
        </p>
        <div className="flex justify-center items-center gap-8 py-5 md:py-8">
          <ExampleImage
            src="/educational/skin_lesion.png"
            alt="skin lesion"
            containerClass="h-[194px] w-[292px] rounded-[4px] border border-[#B59988] hidden lg:inline-block"
          />
          <ExampleImage
            src="/educational/skin_lesion1.png"
            alt="skin lesion"
            containerClass="h-[120px] md:h-[194px] w-[180px] md:w-[292px] rounded-[4px] border border-[#B59988]"
          />
          <ExampleImage
            src="/educational/skin_lesion2.png"
            alt="skin lesion"
            containerClass="h-[194px] w-[292px] rounded-[4px] border border-[#B59988] hidden lg:inline-block"
          />
        </div>
        <div className="hidden md:flex items-center justify-center space-x-4">
          <a href="/scan" className="scan-button">
            Start Scanning
          </a>
        </div>
      </div>
    </div>
  );
};
