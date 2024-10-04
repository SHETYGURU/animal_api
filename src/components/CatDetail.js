
import React from 'react';

const CatDetail = ({ cat }) => {
  if (!cat) return null;

  return (
    <div className="grid-item">
      <h2>{cat.name}</h2>
      {cat.image && <img src={cat.image.url} alt={cat.name} />}
      <p>{cat.description}</p>
    </div>
  );
};

export default CatDetail;
