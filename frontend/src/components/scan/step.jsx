import React from 'react'

const StepCard = ({title, description, icon: Icon }) => {
    return (
        <div className="
            bg-cream
            w-[326px] 
            h-[200px] 
            rounded-[8px] 
            p-[16px] 
            shadow-[0px_8px_8px_0px_rgba(0,0,0,0.15)]
            flex 
            flex-col
            items-center
            gap-[10px]
        ">
            {/*step content*/}
            <div className="w-[294px] h-[140px] flex flex-col gap-[8px]">
                {/*icon*/}
                <div className="w-[32px] h-[30px] bg-light-brown flex flex-col items-center justify-center" style={{borderRadius: "50%"}}>
                    <Icon/>
                </div>
                {/*step-text*/}
                <div className="w-[294px] h-[102px] flex flex-col gap-[16px]">
                    <h1 className="font-gantari text-main-brown text-header-5">
                        {title}
                    </h1>
                    <h1 className="font-gantari text-main-brown text-header-6">
                        {description}
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default StepCard;