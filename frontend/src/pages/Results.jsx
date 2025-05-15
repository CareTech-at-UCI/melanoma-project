import React from 'react'
export const Results = () => {
  return (
  <>
    <div className="h-screen flex flex-col items-center justify-center pt-24">
      <div className="w-[80%] h-[80%] flex flex-col items-center gap-8">
        {/* Header */}
        <div className="text-left w-full h-[10%]">
          <h1 className="font-gantari text-main-brown text-header-1">
            Scan Results
          </h1>
        </div>
        {/* Results */}
        <div className="bg-off-white w-full h-[80%] flex flex-row items-center gap-8">
          
          {/* Image */}
          <div className="w-[40%] h-full flex flex-col items-center justify-center gap-4">
            {/* Image File*/}
            <div className="bg-light-brown w-full h-[90%] flex items-center justify-center">
              <h2 className="font-gantari text-main-brown text-header-2">
                INSERT IMAGE HERE
              </h2>
            </div>
            {/* Image Filename*/}
            <div className="bg-light-brown w-full h-[10%] flex items-center">
              <h2 className="font-gantari text-main-brown text-scan-header-5 text-left">
                insert variable here image.jpg
              </h2>
            </div>
          </div>

          {/* Statistics */}
          <div className="w-[60%] h-[100%] flex flex-col items-center justify-center gap-6">
            {/* Header */}
            <div className="bg-light-brown w-full h-[10%] flex items-center ">
              <h2 className="font-gantari text-main-brown text-results-header-1 text-left">
                Statistics
              </h2>
            </div>
            {/* Percentages */}
            <div className="bg-light-brown w-full h-[20%] flex flex-row items-center justify-center">
              <h2 className="font-gantari text-main-brown text-results-header-1">
                Percentages
              </h2>
            </div>
            {/* Next Steps */}
            <div className="bg-light-brown w-full h-[60%] flex items-center justify-center">
              <h2 className="font-gantari text-main-brown text-results-header-1">
                Next Steps
              </h2>
            </div>
            {/* Buttons */}
            <div className="bg-light-brown w-full h-[10%] flex items-center justify-center">
              <h2 className="font-gantari text-main-brown text-results-header-1">
                Buttons
              </h2>
            </div>

          </div>
        </div>
      </div>
    </div>
  </>
  )
};
