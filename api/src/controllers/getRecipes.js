require('dotenv').config()

const getRecipesFromApi = require('../repository/api/findRecipes')
const getRecipesFromDB = require('../repository/db/findRecipes')

const getAll = async (name) => {
  let recipes = []

  recipes = recipes.concat(await getRecipesFromDB())

  try {
    recipes = recipes.concat(await getRecipesFromApi(name))
  } catch (error) {
    console.error(error)
  }

  return recipes
}

module.exports = getAll
