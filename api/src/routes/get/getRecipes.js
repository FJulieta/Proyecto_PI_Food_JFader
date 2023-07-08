const { Router } = require('express')

const router = Router()
const getAll = require('../../controllers/get/getAll')

router.get('/recipes', async (req, res) => {
  const { name } = req.query
  const recipesTotal = await getAll()
  if (name) {
    const recipeName = await recipesTotal.filter((e) => e.name.toLowerCase().includes(name.toLowerCase()))
    recipeName.length ? res.status(200).send(recipeName) : res.status(404).send('No se encuentra esa receta')
  } else {
    res.status(200).send(recipesTotal)
  }
})

module.exports = router
