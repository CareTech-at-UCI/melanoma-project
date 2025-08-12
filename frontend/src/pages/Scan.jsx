import React from 'react'
import { CameraIcon, UploadIcon, CheckIcon} from '../components/scan/icons'
import StepCard from '../components/scan/step'
// import gradient from "../images/scan_gradient.png"
import Upload from '../components/scan/upload'
import '../components/scan/gradient.css'

export const Scan = () => {
  return (
    <>
    {/*Background gradient*/}
    <div className="scan-background">
    </div>
    <div className="w-full h-full flex flex-col items-center overflow-hidden">
        {/*Frame 44*/}
        <div className="pt-10 w-full flex flex-col items-center justify-center">
            {/*Frame 135*/}
            <div className="text-left w-full pl-2 md:pl-15">
                <h1 className="font-gantari text-main-brown text-scan-header-9 md:text-header-2 sm:pl-3">
                    Scan your skin
                </h1>
            </div>
            {/*Frame 43/46*/}
            <div className="w-full h-[90%] md:w-[80%] md:h-[90%] flex flex-col items-center px-10 py-3">
                {/*steps*/}
                <div className="w-full flex flex-col md:flex-row items-center justify-center gap-[8px] md:gap-[3%] p-2 md:p-10 items-stretch">
                    {/*Step 1*/}
                    <StepCard title="Step 1: Take a Photo" description="Use a device to take a photo of the affected area of skin, ensuring that the entire area has been captured." icon={CameraIcon}/>
                    {/*Step 2*/}
                    <StepCard title="Step 2: Upload Photo" description="Click “Upload” and select the photo from your photo library or files. Click “Submit”." icon={UploadIcon}/>
                    {/*Step 3*/}
                    <StepCard title="Step 3: Receive Results" description="You will be provided with an assessment of your skin alongside the confidence level of the identification." icon={CheckIcon}/>
                </div>                
            </div>
            {/* Upload component */}
            <Upload/>
        </div>
    </div>
    
    </>
  )
};