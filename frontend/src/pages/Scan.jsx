import React from 'react'
import { CameraIcon, UploadIcon, CheckIcon} from '../components/scan/icons'
import StepCard from '../components/scan/step'
import gradient from "../images/scan_gradient.png"
import Upload from '../components/scan/upload'

export const Scan = () => {
  return (
    <div className="bg-off-white w-full h-full flex flex-col items-center">
        {/*Background gradient*/}
        <div className="fixed w-full h-full inset-0 bg-cover bg-center opacity-50" style={{backgroundImage: `url(${gradient})`}}>
        </div>
        {/*Frame 44*/}
        <div className="absolute top-[115px] w-[326px] h-[694px] md:top-[175px] md:w-[1271px] md:h-[747px] flex flex-col items-center ">
            {/*Frame 135*/}
            <div className="text-left w-[334px] h-[41px] md:w-[1266px] md:h-[58px] ">
                <h1 className="font-gantari text-main-brown text-header-9 md:text-header-1">
                    Scan your skin.
                </h1>
            </div>
            {/*Frame 43/46*/}
            <div className="absolute bottom-0 left-0 w-[326px] h-[626px] md:w-[1271px] md:h-[653px] flex flex-col items-center justify-center gap-[16px] md:gap-[36px]">
                {/*steps*/}
                <div className="w-full flex flex-col md:flex-row items-center justify-center gap-[8px] md:gap-[32px]">
                    {/*Step 1*/}
                    <StepCard title="Step 1: Take a Photo" description="Use a device to take a photo of the affected area of skin, ensuring that the entire area has been captured." icon={CameraIcon}/>
                    {/*Step 2*/}
                    <StepCard title="Step 2: Upload Photo" description="Click “Upload” and select the photo from your photo library or files. Click “Submit”." icon={UploadIcon}/>
                    {/*Step 3*/}
                    <StepCard title="Step 3: Receive Results" description="You will be provided with an assessment of your skin alongside the confidence level of the identification." icon={CheckIcon}/>
                </div>

                {/*upload-image-component*/}
                <div className="bg-[#F5F5F5] w-[289px] h-[222px] md:w-[994px] md:h-[417px]">
                    <p className='font-gantari text-main-brown pl-[5%] pt-[5%]'>Upload Image</p>
                    <Upload/>
                </div>
            </div>
        </div>
    </div> 
  )
};