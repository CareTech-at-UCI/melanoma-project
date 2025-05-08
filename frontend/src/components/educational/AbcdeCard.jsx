import React from 'react'

export const AbcdeCard = ({ letter, imageSrc, title, description }) => {
  return (
    <div>
      <h2>{letter}</h2>
      <img src={imageSrc} alt="mole" width={221} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
