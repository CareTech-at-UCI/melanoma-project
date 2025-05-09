import React from 'react'

const StepCard = ({title, description, icon: Icon }) => {
    return (
        <div className="
            bg-cream
            w-full
            h-full
            rounded-[8px] 
            p-[1.5%] 
            shadow-[0px_8px_8px_0px_rgba(0,0,0,0.15)]
            flex 
            flex-col
            items-center
        ">
            {/*step content*/}
            <div className="w-[95%] h-full flex flex-col gap-[8px]">
                {/*icon*/}
                <div className="w-[32px] h-[30px] bg-light-brown flex flex-col items-center justify-center" style={{borderRadius: "50%"}}>
                    <Icon/>
                </div>
                {/*step-text*/}
                <div className="w-[95%] h-[50%] flex flex-col gap-[8px] md:gap-[16px]">
                    <h1 className="font-gantari text-main-brown text-scan-header-7 md:text-scan-header-5">
                        {title}
                    </h1>
                    <h1 className="font-gantari text-main-brown text-scan-header-8 md:text-scan-header-6">
                        {description}
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default StepCard;