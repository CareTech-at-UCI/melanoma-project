import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export const Results = () => {
  const location = useLocation();
  const { imagePath, imageName, confidence } = location.state || {};
  const wholeNumberConfidence = (confidence * 100).toFixed(2);

  const constModelAccuracy = 75;
  const [showConfidenceInfo, setShowConfidenceInfo] = useState(false);

  const getConfidenceColor = (conf) => {
    if (conf >= 75) return "text-[#E83A34]";
    if (conf >= 40) return "text-[#EDA200]";
    return "text-[#80B700]";
  };

  const getConfidenceMessage = (conf) => {
    if (conf >= 75) {
      return {
        text: (
          <>
            Based on our analytics, we are{" "}
            <span className="font-bold">{conf}% confident</span> that{" "}
            <span className="font-bold">melanoma may have been identified</span>{" "}
            from the provided image. We suggest that the person in the image
            seeks{" "}
            <span className="font-bold">professional medical attention</span> to
            confirm any diagnoses.
          </>
        ),
      };
    }
    if (conf >= 40) {
      return {
        text: (
          <>
            Based on our analytics, we are{" "}
            <span className="font-bold">{conf}% confident</span> that melanoma has
            been identified from the provided image. Therefore, there is a
            <span className="font-bold"> possible chance</span> that the image
            provided may contain melanoma. Please scan again and follow up with{" "}
            <span className="font-bold">professional medical</span> attention to
            verify.
          </>
        ),
      };
    }
    return {
      text: (
        <>
          Based on our analytics, we are{" "}
          <span className="font-bold">{conf}% confident</span> that melanoma has been
          identified from the provided image. Therefore, there is a <span className="font-bold">low chance</span>{" "}
          that the image contains{" "}
          melanoma.
        </>
      ),
    };
  };

  const message = getConfidenceMessage(wholeNumberConfidence);
  console.log(confidence);
  console.log(wholeNumberConfidence);

  return (
    <div className="min-h-screen pb-20 font-gantari bold text-main-brown bg-off-white">
      {/* Main Container */}
      <div className="w-[80%] md:w-full max-w-7xl mx-auto px-4 pt-28 md:pt-32">
        {/* Header */}
        <h1 className="fontbold text-4xl md:text-5xl mb-4 md:mb-8">Scan Results</h1>

        {/* Content Container */}
        <div className="flex flex-col md:flex-row md:gap-8">
          {/* Left Column - Image Section */}
          <div className="w-full md:w-[40%] mb-8 md:mb-0 flex flex-col">
            {/* Filename - Shows first on mobile, last on desktop */}
            <p className="mb-0.5 md:mb-0 md:mt-4 order-first md:order-last font-bold text-base">
              {imageName}
            </p>
            {/* Image - Shows second on mobile, first on desktop */}
            <div className="w-full aspect-[4/3] order-last mb-2 md:order-first">
              <img
                src={imagePath}
                alt="Scanned skin area"
                className="w-full h-full object-cover rounded-lg border border-[#B59988]"
              />
            </div>
          </div>

          {/* Right Column - Info Section */}
          <div className="w-full md:w-[60%] md: -mt-8">
            {/* Statistics Section */}
            <div className="mb-2 md:mb-4">
              <h2 className="text-results-header-3 md:text-results-header-2 test mb-2 md:mb-6 text-center md:text-left">Statistics</h2>
              <div className="flex justify-center md:justify-start gap-8 md:gap-16">
                <div className="text-center">
                  <div
                    className={`text-5xl md:text-6xl font-black ${getConfidenceColor(
                      confidence
                    )}`}
                  >
                    {(confidence * 100).toFixed(2)}%
                  </div>
                  <div className="text-lg md:text-xl">Confidence</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-black text-[#E06929]">
                    {constModelAccuracy}%
                  </div>
                  <div className="whitespace-nowrap text-lg md:text-xl">Model Accuracy</div>
                </div>
              </div>
            </div>

            {/* Next Steps Section */}
            <div className="mb-2">
              <h2 className="text-results-header-3 md:text-results-header-2 text-center md:text-left mb-2 md:mb-6">Next Steps</h2>
              <div className="border border-[#B59988] bg-transparent rounded-lg p-3 md:p-6">
                <p className="text-base md:text-lg">{message.text}</p>
              </div>
            </div>

            {/* Confidence Level Info */}
            <div className="mb-4 relative">
              <button
                onMouseEnter={() => setShowConfidenceInfo(true)}
                onMouseLeave={() => setShowConfidenceInfo(false)}
                className="flex items-center text-sm hover:opacity-80"
                type="button"
              >
                <span className="mr-2">ⓘ</span>
                What is confidence level?
              </button>

              {showConfidenceInfo && (
                <div className="absolute left-0 top-full mt-2 w-72 p-4 bg-white border border-[#B59988] rounded-lg text-sm shadow-lg">
                  Confidence level is a measure of certainty that a specific
                  parameter lies within a certain range. 0-39 confidence
                  indicates a low likeliness, 40-74 confidence indicates a
                  medium likeliness, and 75+ indicates a high likeliness.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
