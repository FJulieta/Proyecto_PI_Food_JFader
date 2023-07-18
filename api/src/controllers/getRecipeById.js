require('dotenv').config()

const { API_KEY } = process.env
const axios = require('axios')
const { Recipe, TypeDiet } = require('../db')

const getRecipeById = async (id) => {
  const validate = id.includes('-') // si tiene el guion es porque se encuentra en la base de datos
  let recipe = null
  if (validate) {
    try {
      recipe = await Recipe.findOne({
        where: { id },
        include: {
          model: TypeDiet,
          attributes: ['name'],
          through: {
            attributes: [],
          },
        },
      })

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
        typeDiets, // Utilizar el arreglo filtrado
        createdAt: recipe.createdAt,
        createdInDB: recipe.createdInDB,
        updatedAt: recipe.updatedAt,
      }
    } catch (err) {
      console.log(err)
      return { error: 'Hubo un error al buscar la receta en la base de datos' }
    }
  } else {
    try {
      const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
      const recipeById = await axios.get(url)
      recipe = {
        id: recipeById.data.id,
        name: recipeById.data.title,
        imagen: recipeById.data.image,
        summary: recipeById.data.summary,
        healthScore: recipeById.data.healthScore,
        process: recipeById.data.analyzedInstructions,
        typeDiets: recipeById.data.diets,
        vegetarian: recipeById.data.vegetarian,
        vegan: recipeById.data.vegan,
        glutenFree: recipeById.data.glutenFree,
      }
      return recipe
    } catch (err) {
      console.log(err)
      return { error: 'Ocurrió un problema al buscar el id de la receta, seguramente este id no existe' }
    }
  }
}

module.exports = getRecipeById
