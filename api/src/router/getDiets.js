const { Router } = require('express')

const router = Router()
const getDiets = require('../controllers/getDiets')

router.get('/diets', async (req, res) => {
  try {
    const allDiets = await getDiets()
    res.status(200).json(allDiets)
  } catch (error) {
    res.status(500).send(error)
  }
})

module.exports = router
