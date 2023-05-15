import PropTypes from 'prop-types';
import axios from 'axios';
import { BASE_URL, API_KEY } from './api';

const fetchFilms = async (parameters, query = '', page = 1) => {
  return await axios
    .get(`${BASE_URL}${parameters}`, {
      params: {
        page: page,
        api_key: API_KEY,
        language: 'en',
        query: query,
      },
    })
    .then(response => response.data);
};

export default fetchFilms;

fetchFilms.propType = {
  parameters: PropTypes.string,
  query: PropTypes.string,
  page: PropTypes.number,
};
