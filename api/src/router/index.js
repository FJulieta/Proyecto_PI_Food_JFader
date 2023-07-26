const { Router } = require('express')

const diets = require('./diets')
const recipes = require('./recipes')

const router = Router()
router.use('/diets', diets)
router.use('/recipes', recipes)

module.exports = router
