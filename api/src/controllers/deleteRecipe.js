const { Recipe } = require('../db')

const deleteRecipe = async (id) => {
    const recipe = await Recipe.findByPk(id)
    if (recipe) {
      return recipe.destroy()
    } else {
      throw new Error('Recipe not found');
    }
}

module.exports = deleteRecipe