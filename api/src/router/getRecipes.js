const { Router } = require('express')

const router = Router()
const getRecipes = require('../controllers/getRecipes')

router.get('/recipes', async (req, res) => {
  const { name } = req.query
  try {
    const recipesTotal = await getRecipes(name)
    if (name) {
      if (recipesTotal.length >= 0) {
        res.status(200).send(recipesTotal)
      } else {
        res.status(404).send('No se encuentra esa receta')
      }
    } else {
      res.status(200).send(recipesTotal)
    }
  } catch (error) {
    res.status(500).send(error)
  }
})

module.exports = router
