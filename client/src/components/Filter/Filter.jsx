import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as actions from '../../redux/actions'

import s from './Filter.module.css'

const Filter = ({ setOrden, setCurrentPage }) => {
  const dispatch = useDispatch()

  const handleFilterCreated = (e) => {
    dispatch(actions.filterCreated(e.target.value))
  }

  const handleFilterTypeDiet = (diet) => {
    dispatch(actions.filterRecipesByTypeDiet(diet))
  }

  const handleSort = (e) => {
    e.preventDefault()
    const { value } = e.target
    dispatch(actions.orderByName(value))
    setCurrentPage(1)
    setOrden(`Ordenado ${value}`)
  }

  const handlePuntuation = (e) => {
    e.preventDefault()
    const { value } = e.target
    dispatch(actions.orderByPuntuation(value))
    setCurrentPage(1)
    setOrden(`Ordenado ${value}`)
  }

  const renderDietImages = () => {
    return Object.keys(dietImages).map((diet) => (
      <div key={diet} className={s.dietImage} onClick={() => handleFilterTypeDiet(diet)}>
        <img src={dietImages[diet]} alt={diet} />
        <span>{diet}</span>
      </div>
    ))
  }

  return (
    <div className={s.filterContainer}>
      <div className={s.filterItemImg}>
        <label htmlFor={s.filterTypeDietSelectImg} />
      </div>

      <div className={s.filterRow}>
        <div className={s.filterItem1}>
          <label htmlFor={s.puntuationSelect}>PUNTUACTION</label>
          <select id={s.puntuationSelectID} className={s.filterSelect} onChange={handlePuntuation}>
            <option value="all">ALL SCORES</option>
            <option value="menormayor">SMALLEST TO LARGEST</option>
            <option value="mayormenor">LARGEST TO SMALLEST</option>
          </select>
        </div>

        <div className={s.filterItemDos}>
          <label htmlFor={s.filterCreatedSelect}>FILTER BY CREATION</label>
          <select id={s.filterCreatedSelect} className={s.filterSelect} onChange={handleFilterCreated}>
            <option value="All">ALL RECIPES</option>
            <option value="created">YOUR CREATION</option>
            <option value="api">EXISTING RECIPES</option>
          </select>
        </div>

        <div className={s.filterItemTres}>
          <label htmlFor={s.sortSelect}>ORDER:</label>
          <select id={s.sortSelect} className={s.filterSelect} onChange={handleSort}>
            <option value="asc">UPWARD (A-Z)</option>
            <option value="des">FALLING (Z-A)</option>
          </select>
        </div>

        <div className={s.filterItemCuatro}>
          <label htmlFor={s.sortHealthScore}>HEALTH SCORE:</label>
          <select id={s.sortHealthScore} className={s.filterSelect} onChange={handleSort}>
            <option value="asc_health_score">UPWARD</option>
            <option value="des_health_score">FALLING</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Filter
