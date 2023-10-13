import React from 'react';

function DigimonCard({ name, img, level, type }) {
  return (
    <div className="digimon-card">
      <img src={img} alt={`Imagem de ${name}`} />
      <h2>{name}</h2>
      <p>Level: {level}</p>
      <p className='type'>Type: {type}</p>
    </div>
  );
}

export default DigimonCard;
