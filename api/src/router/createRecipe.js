const { Router } = require('express')
const { Recipe, TypeDiet } = require('../db')

const router = Router()

router.post('/', async (req, res, next) => {
  const { name, summary, imagen, healthScore, process, createdInDb, typeDiets } = req.body
  if (!name || !summary) {
    return res.status(400).send('Please, insert a name and a summary to continue!')
  }

  try {
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

    res.status(200).send(createRecipe)
  } catch (e) {
    next(e)
  }
})

module.exports = router
