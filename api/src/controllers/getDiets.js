require('dotenv').config()

const findRecipes = require('../repository/api/findRecipes')
const getAllDiets = require('../repository/db/getAllDiets')

const getDiets = async () => {
  const dietsFromDB = await getAllDiets()

  if (dietsFromDB && dietsFromDB.length > 0) {
    return dietsFromDB
  }

  const recipes = await findRecipes()
  const diets = new Set()
  recipes.map((recipe) => recipe.diets.forEach((diet) => diets.add(diet)))

  for (const diet of diets) {
    await TypeDiet.findOrCreate({ where: { name: diet } })
  }

  return [...diets].map((diet) => ({ name: diet }))
}

module.exports = getDiets
