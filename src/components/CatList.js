
import React, { useState, useEffect } from 'react';
import { fetchCatBreeds } from '../services/catService';

const CatList = ({ onSelectCat }) => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCatBreeds();
      setCats(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Cat Breeds</h2>
      <ul>
        {cats.map(cat => (
          <li key={cat.id} onClick={() => onSelectCat(cat)}>
            {cat.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatList;
