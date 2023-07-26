const { Router } = require('express')

const router = Router()
const getRecipeById = require('../controllers/getRecipeById')
const getRecipes = require('../controllers/getRecipes')
const deleteRecipe = require('../controllers/deleteRecipe')
const createRecipe = require('../controllers/createRecipe')

router.get('/', async (req, res) => {
  const { name } = req.query
  try {
    const recipesTotal = await getRecipes(name)
    if (name) {
      if (recipesTotal.length >= 0) {
        res.status(200).send(recipesTotal)
      } else {
        res.status(404).send('Recipe not found')
      }
    } else {
      res.status(200).send(recipesTotal)
    }
  } catch (error) {
    res.status(500).send(error)
  }
})

router.get('/:id', (req, res) => {
  const { id } = req.params // Obtener el id de la ruta

  getRecipeById(id) // Pasar el id al controlador
    .then((recipe) => {
      if (recipe && !recipe.error) {
        res.status(200).json(recipe)
      } else if (recipe && recipe.error) {
        res.status(400).json({ error: recipe.error })
      } else {
        res.status(404).send('Recipe not found')
      }
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send('Internal server error')
    })
})

router.post('/', async (req, res, next) => {
  const { name, summary } = req.body
  if (!name || !summary) {
    return res.status(400).send('Please, insert a name and a summary to continue!')
  }

  try {
    const recipe = await createRecipe(req.body)
    res.status(200).send(recipe)
  } catch (e) {
    next(e) // Que hace este next?
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  const validIdRegex = /^[A-Za-z0-9-]+$/

  if (validIdRegex.test(id)) {
    try {
      await deleteRecipe(id)
      res.status(200).json({ message: 'Recipe deleted' })
    } catch (err) {
      if (err.message === 'Recipe not found') {
        res.status(404).json({ message: 'Recipe not found' })
      } else {
        res.status(500).json({ message: 'Internal server error' })
      }
    }
  } else {
    res.status(400).json({ message: 'Unable to delete recipe' })
  }
})

module.exports = router
