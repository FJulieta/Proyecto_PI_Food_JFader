const { API_KEY, API_BASE_URL } = process.env
const axios = require('axios')

const findRecipe = async (id) => {
  return axios.get(`${API_BASE_URL}/recipes/${id}/information`, {
    params: {
      apiKey: API_KEY,
    },
  })
}

module.exports = findRecipe
