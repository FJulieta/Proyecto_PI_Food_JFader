const { TypeDiet } = require('../../db')

const getAllDiets = () => {
  return TypeDiet.findAll()
}

module.exports = getAllDiets
