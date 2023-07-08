const { Router } = require('express')

const router = Router()
const getRecipes = require('./get/getRecipes')
const routerGetDiets = require('./get/getDiets')
const routerGetRecipesById = require('./get/getRecipesByID')
const routerPost = require('./post/routerPost')
const routerDelete = require('./delete/routerDelete')

router.use('/', getRecipes)
router.use('/?name=', getRecipes)
router.use('/', routerGetDiets)
router.use('/', routerGetRecipesById)
router.use('/recipe', routerPost)
router.use('/recipe', routerDelete)

module.exports = router
