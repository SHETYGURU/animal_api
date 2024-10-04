
import React, { useState, useEffect } from 'react';
import { fetchDogBreeds } from '../services/dogService';

const DogList = ({ onSelectDog }) => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogBreeds();
      setDogs(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Dog Breeds</h2>
      <ul>
        {dogs.map(dog => (
          <li key={dog.id} onClick={() => onSelectDog(dog)}>
            {dog.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DogList;
