
import React from 'react';

const DogDetail = ({ dog }) => {
  if (!dog) return null;

  return (
    <div className="grid-item">
      <h2>{dog.name}</h2>
      {dog.image && <img src={dog.image.url} alt={dog.name} />}
      <p>{dog.temperament}</p>
    </div>
  );
};

export default DogDetail;
