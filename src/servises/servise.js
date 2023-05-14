import axios from 'axios';
import { BASE_URL, API_KEY } from './api';

const fetchFilms = async (params, page = 1) => {
  return await axios
    .get(`${BASE_URL}${params}`, {
      params: {
        page: page,
        api_key: API_KEY,
        // language: 'uk',
        language: 'en',
      },
    })
    .then(response => response.data);
};

export default fetchFilms;
