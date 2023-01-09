import axios from 'axios';

const URL = 'https://pixabay.com';
const KEY = '31300950-842c8d9c887ca9fc025b1c855';

export const fetchData = (query, page, perPage) => {
  return axios
    .get(
      `${URL}/api/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
    )
    .then(response => response.data);
};

export default fetchData;