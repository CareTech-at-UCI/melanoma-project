import React from 'react'
import { AbcdeCard } from '../components/educational/AbcdeCard';

export const Educational = () => {
  return (
    <div className="font-gantari text-main-brown">
        <div></div>
        <div className="bg-[rgba(240,239,237,1)]">
            <img src="/educational/doubleLoopLine.png" alt="double loop line" />
            <h2 className="text-header-2">ABCDE of Skin Cancer</h2>
            <p>A straightforward way to identify early melanoma risk and take steps to prevent further skin damage.</p>
            <div className="flex">
                <AbcdeCard letter="A" imageSrc="/educational/asymmetric.jpg" title="Asymmetry" description="One half of the spot is unlike or different the other half." />
                <AbcdeCard letter="B" imageSrc="/educational/border.jpg" title="Border" description="The spot has an irregular or ragged border." />
                <AbcdeCard letter="C" imageSrc="/educational/color.jpg" title="Color" description="The spot contains a variation of distinct colors within it." />
                <AbcdeCard letter="D" imageSrc="/educational/diameter.png" title="Diameter" description="Above 6 millimeters or ~1/4 inches in size (may vary)." />
                <AbcdeCard letter="E" imageSrc="/educational/evolution.jpg" title="Evolution" description="The spot differs from other spots or changes in shape, size, texture, or color." />
            </div>
        </div>
    </div>
  )
}
