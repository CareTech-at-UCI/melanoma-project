import React from 'react'
import { AbcdeCard } from '../components/educational/AbcdeCard';

export const Educational = () => {
  return (
    <div className="font-gantari text-main-brown bg-[rgba(240,239,237,1)]">
      {/* Learn About Melanoma */}
      <div style={{ backgroundImage: "url('/educational/gradient-bg.png')" }} className="bg-cover bg-center">
        <div className="mx-auto text-center pt-24">
          <h1 className="text-[40px] font-medium">
            Learn About Melanoma
          </h1>
          <img
            src="/educational/curlyLine.png" 
            alt="A person examining a mole on their back" 
            className="max-w-xs mx-auto"
          />
        </div>

        <div className="pl-12 pt-12 md:pl-16 lg:pl-[106px] flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-xl">
            <h2 className="text-header-2">
              What <i>is</i> Melanoma?
            </h2>
            <p className="text-xl font- leading-relaxed">
              Melanoma is a type of skin cancer that develops when melanocytes, cells that give skin its tan or brown color, begin growing uncontrollably. Though less common compared to other types of skin cancers, melanoma is significantly more dangerous because of its high likelihood to spread to other parts of the body if not found and treated early on (American Cancer Society).
            </p>
          </div>
          <div className="mt-8 md:mt-0 md:ml-12">
            <img 
              src="/educational/melanoma_back.jpg" 
              alt="A person examining a mole on their back" 
              className="w-full max-w-[720px] max-h-[408px]"
            />
          </div>
        </div>
      </div>
      
      {/* ABCDE of Skin Cancer */}
      <div className="px-12 py-12 md:px-16 md:py-12 lg:px-[106px] lg:py-[70px]">
        <img src="/educational/doubleLoopLine.png" alt="double loop line" />
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-header-2">ABCDE of Skin Cancer</h2>
            <p className="text-lg">A straightforward way to identify early melanoma risk and take steps to prevent further skin damage.</p>
          </div>
          <div className="flex flex-row flex-wrap gap-8 justify-center lg:justify-between">
            <AbcdeCard
              letter="A" 
              imageSrc="/educational/asymmetric.jpg" 
              title="Asymmetry" 
              description={<span>One half of the spot is <b>unlike</b> or <b>different</b> from the other half.</span>} 
            />
            <AbcdeCard
              letter="B" 
              imageSrc="/educational/border.jpg" 
              title="Border" 
              description={<span>The spot has an <b>irregular</b> or <b>ragged border</b>.</span>}
            />
            <AbcdeCard
              letter="C"
              imageSrc="/educational/color.jpg"
              title="Color"
              description={<span>The spot contains a <b>variation</b> of <b>distinct colors</b> within it.</span>}
            />
            <AbcdeCard
              letter="D"
              imageSrc="/educational/diameter.png"
              title="Diameter"
              description={<span>Above <b>6 millimeters</b> or <b>~1/4 inches</b> in <b>size</b> (may vary).</span>}
            />
            <AbcdeCard
              letter="E"
              imageSrc="/educational/evolution.jpg"
              title="Evolution"
              description={<span>The spot <b>differs from other spots</b> or <b>changes</b> in <b>shape</b>, <b>size</b>, <b>texture</b>, or <b>color</b>.</span>}
            />
          </div>
        </div>
      </div>
    </div>
  )
}