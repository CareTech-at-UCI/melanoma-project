import React from 'react'

const StepCard = ({title, description, icon: Icon }) => {
    return (
        <div className="
            bg-cream
            w-full
            md:w-[350px]
            rounded-[8px] 
            p-[1.2%] 
            shadow-[0px_8px_8px_0px_rgba(0,0,0,0.15)]
            flex 
            flex-col
            items-center
        ">
            {/*step content*/}
            <div className="w-full h-full flex flex-col gap-[8px] p-1">
                {/*icon*/}
                <div className="w-[32px] h-[30px] bg-light-brown flex flex-col items-center justify-center" style={{borderRadius: "50%"}}>
                    <Icon/>
                </div>
                {/*step-text*/}
                <div className="lg:w-[300px] w-[80%] h-[50%] flex flex-col gap-[8px] md:gap-[10px]">
                    <h1 className="font-gantari text-main-brown text-scan-header-7 lg:text-scan-header-5 md:text-scan-header-5">
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