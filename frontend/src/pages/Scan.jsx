import React from 'react'
import { CameraIcon, UploadIcon, CheckIcon} from '../components/scan/icons'
import StepCard from '../components/scan/step'
import gradient from "../images/scan_gradient.png"

export const Scan = () => {
  return (
    <div className="bg-off-white min-h-screen w-full flex flex-col items-center">
        {/*Background gradient*/}
        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{backgroundImage: `url(${gradient})`}}>
        </div>
        {/*Frame 44*/}
        <div className="absolute top-[175px] w-[1271px] h-[747px] flex flex-col items-center">
            {/*Frame 135*/}
            <div className="text-left w-[1266px] h-[58px]">
                <h1 className="font-gantari text-main-brown text-header-1">
                    Scan your skin.
                </h1>
            </div>
            {/*Frame 43*/}
            <div className="absolute bottom-0 left-0 w-[1271px] h-[653px]">
                {/*steps*/}
                <div className="w-[1271px] h-[200px] flex flex-row items-center justify-center gap-[32px]">
                    {/*Step 1*/}
                    <StepCard title="Step 1: Take a Photo" description="Use a device to take a photo of the affected area of skin, ensuring that the entire area has been captured." icon={CameraIcon}/>
                    {/*Step 2*/}
                    <StepCard title="Step 2: Upload Photo" description="Click “Upload” and select the photo from your photo library or files. Click “Submit”." icon={UploadIcon}/>
                    {/*Step 3*/}
                    <StepCard title="Step 3: Receive Results" description="You will be provided with an assessment of your skin alongside the confidence level of the identification.”." icon={CheckIcon}/>
                </div>
                {/*upload-image-component*/}
                <div>

                </div>
            </div>
        </div>
    </div> 
    
  )
};