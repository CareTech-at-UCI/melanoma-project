import React from "react";

export const ResourceCard = ({
  imageSrc,
  title,
  description,
  additionalInfo,
}) => {
  return (
    <div className="relative w-full md:w-[379px] h-[345px] md:h-[294px] bg-white rounded-[8px] border border-[#51210D] z-30">
      <a
        href={additionalInfo}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bg-[#E97C2E] flex justify-center items-center top-2 right-2 rounded-full h-[32px] w-[32px]"
      >
        <img src="/educational/white_arrow.png" alt="white arrow"></img>
      </a>
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-[138px] object-cover rounded-t-[8px]"
      ></img>
      <div className="p-4 md:p-[16px] text-left">
        <h3 className="text-header-4">{title}</h3>
        <p className="text-body-3">{description}</p>
      </div>
      <button></button>
    </div>
  );
};
