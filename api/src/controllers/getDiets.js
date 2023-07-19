require('dotenv').config()

const findRecipes = require('../repository/api/findRecipes')
const getAllDiets = require('../repository/db/getAllDiets')

const getDiets = async () => {
  const dietsFromDB = await getAllDiets()

  //------------------------Compruebo si se obtuvieron dietas desde la base de datos
  //------------------------Devuelvo las dietas obtenidas de la base de datos
  if (dietsFromDB && dietsFromDB.length > 0) {
    return dietsFromDB
  }

  const recipes = await findRecipes()
  const diets = new Set()

  //-----------------------Itero sobre las recetas obtenidas y agrego las dietas únicas a un conjunto (Set)
  recipes.map((recipe) => recipe.diets.forEach((diet) => diets.add(diet)))

  //-----------------------Itero sobre cada dieta del conjunto y realizo una operación
  for (const diet of diets) {
    await TypeDiet.findOrCreate({ where: { name: diet } }) // Encuentra o crea la dieta en algún lugar no especificado
  }

  // Convierte el conjunto de dietas en un array y devuelve un objeto con el nombre de cada dieta
  return [...diets].map((diet) => ({ name: diet }))
}

module.exports = getDiets
//La funcionalidad de los controllers es comunicar la interfaz entre el usuario, procesarlas y enviar la respuesta esperada