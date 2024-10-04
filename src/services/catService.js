
import axios from 'axios';

export const fetchCatBreeds = async () => {
  const response = await axios.get('https://api.thecatapi.com/v1/breeds', {
    headers: {
      'x-api-key': process.env.REACT_APP_CAT_API_KEY
    }
  });
  return response.data;
};
