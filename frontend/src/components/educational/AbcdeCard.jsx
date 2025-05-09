import React from 'react'

export const AbcdeCard = ({ letter, imageSrc, title, description }) => {
  return (
    <div className="relative w-[221px] flex flex-col gap-4">
      <div className="w-[221px] h-[221px] overflow-hidden">
        <img
          src={imageSrc}
          alt="mole"
          className="border border-[rgba(181,153,136,1)] rounded-lg w-full h-full object-cover"
        />
      </div>
      <h2 className="text-2xl font-semibold w-[45px] h-[45px] rounded-full bg-[rgba(240,239,237,1)] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.2)] flex items-center justify-center absolute top-2 left-2">
        {letter}
      </h2>
      <div className="flex flex-col items-center text-center">
        <h3 className="text-header-4">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}
