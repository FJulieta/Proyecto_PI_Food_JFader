const { Router } = require('express')

const getRecipes = require('./getRecipes')
const getDiets = require('./getDiets')
const getRecipesById = require('./getRecipesByID')
const createRecipe = require('./createRecipe')
const deleteRecipe = require('./deleteRecipe')

const router = Router()
router.use('/', getRecipes)
router.use('/?name=', getRecipes)
router.use('/', getDiets)
router.use('/', getRecipesById)
router.use('/recipe', createRecipe)
router.use('/recipe', deleteRecipe)

module.exports = router
