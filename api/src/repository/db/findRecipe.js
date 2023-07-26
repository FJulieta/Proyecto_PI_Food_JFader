const { Recipe, TypeDiet } = require('../../db')

const findRecipe = async (id) => {
  const recipe = await Recipe.findOne({
    where: { id },
    include: {
      model: TypeDiet,
      attributes: ['name'],
      through: {
        attributes: [],
      },
    },
  })

  return recipe
}

module.exports = findRecipe
