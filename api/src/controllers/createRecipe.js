const { Recipe } = require('../db')

const createRecipe = async({
  name,
  summary,
  imagen,
  healthScore,
  process,
  createdInDb,
}) => {
  const createRecipe = await Recipe.create({
    name,
    summary,
    imagen,
    healthScore,
    process,
    createdInDb,
  })

  const dietTypeDb = await TypeDiet.findAll({ where: { name: typeDiets } })
  createRecipe.addTypeDiet(dietTypeDb)
}

module.exports = createRecipe