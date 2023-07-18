require('dotenv').config()

const { API_KEY, API_BASE_URL } = process.env
const axios = require('axios')

const findRecipes = async (query) => {
  const apiInfo = await axios.get(`${API_BASE_URL}/recipes/complexSearch`, {
    params: {
      apiKey: API_KEY,
      number: 100,
      addRecipeInformation: true,
      ...(query ? { query } : {}),
    },
  })

  const recipes = await apiInfo.data.results.map((data) => ({
    id: data.id,
    name: data.title,
    diets: data.diets,
    imagen: data.image,
    summary: data.summary,
    healthScore: data.healthScore,
    process: data.analyzedInstructions,
    vegetarian: data.vegetarian,
    vegan: data.vegan,
    glutenFree: data.glutenFree,
  }))

  return recipes
}

module.exports = findRecipes
