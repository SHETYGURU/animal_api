import axios from 'axios';

export const fetchDogBreeds = async () => {
  const response = await axios.get('https://api.thedogapi.com/v1/breeds', {
    headers: {
      'x-api-key': process.env.REACT_APP_DOG_API_KEY
    }
  });
  return response.data;
};
