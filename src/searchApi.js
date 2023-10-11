const axios = require('axios/dist/browser/axios.cjs');
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchFromApi(query, page = 1) {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        key: '38430435-7ecdf3387c91dd38e6d749add',
        q: `${query}`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page,
        per_page: 40,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}


