require('dotenv').config()

const findRecipeFromDB = require('../repository/db/findRecipe')
const findRecipeFromApi = require('../repository/api/findRecipe')

const getRecipeById = async (id) => {
  if (id.includes('-')) {
    // si tiene el guion es porque se encuentra en la base de datos
    try {
      const recipe = await findRecipeFromDB(id)

      if (!recipe) {
        return { error: 'No se encontró la receta en la base de datos' }
      }

      // Filtrar las dietas y obtener solo los nombres
      const typeDiets = recipe.typeDiets.map((typeDiet) => typeDiet.name)

      return {
        id: recipe.id,
        name: recipe.name,
        imagen: recipe.imagen,
        summary: recipe.summary,
        healthScore: recipe.healthScore,
        process: recipe.process,
        createdAt: recipe.createdAt,
        createdInDB: recipe.createdInDB,
        updatedAt: recipe.updatedAt,
        typeDiets, // Utilizar el arreglo filtrado
      }
    } catch (err) {
      console.err(err)
      return { error: 'Hubo un error al buscar la receta en la base de datos' }
    }
  } else {
    try {
      const recipe = await findRecipeFromApi(id)
      return {
        id: recipe.data.id,
        name: recipe.data.title,
        imagen: recipe.data.image,
        summary: recipe.data.summary,
        healthScore: recipe.data.healthScore,
        process: recipe.data.analyzedInstructions,
        typeDiets: recipe.data.diets,
        vegetarian: recipe.data.vegetarian,
        vegan: recipe.data.vegan,
        glutenFree: recipe.data.glutenFree,
      }
    } catch (err) {
      console.error(err)
      return { error: 'Ocurrió un problema al buscar el id de la receta, seguramente este id no existe' }
    }
  }
}

module.exports = getRecipeById
