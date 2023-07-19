import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { getRecipes } from '../../redux/actions'

import Filter from '../../components/Filter/Filter'
import Card from '../../components/Cards/Card'
import Pagination from '../../components/Pagination/Pagination'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'

import s from './Home.module.css'

const RECIPES_PER_PAGE = 9

export default function Home() {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    dispatch(getRecipes()).finally(() => {
      setIsLoading(false)
    })
  }, [dispatch])

  const allRecipes = useSelector((state) => state.recipes)
  const [currentPage, setCurrentPage] = useState(1)
  const [orden, setOrden] = useState('')

  const indexOfLastRecipe = currentPage * RECIPES_PER_PAGE
  const indexOfFirstRecipe = indexOfLastRecipe - RECIPES_PER_PAGE

  const currentRecipes = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe)

  function handleClick(event) {
    event.preventDefault()
    setIsLoading(true)
    dispatch(getRecipes()).finally(() => setIsLoading(false))
  }

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className={s.HomeAll}>
      <div className={s.CardcontainerHome}>
        <Nav handleClick={handleClick} />
        <Filter setCurrentPage={setCurrentPage} setOrden={setOrden} orden={orden} />

        <div className={s.title}>
          <h1 className={s.pageTitle}>SPICY FOOD</h1>
        </div>

        <div className={s.pagination}>
          <Pagination
            limit={RECIPES_PER_PAGE}
            total={allRecipes.length}
            currentPage={currentPage}
            onChange={paginado}
          />
        </div>

        <div className={`${s.cardsContainer} ${isLoading ? s.loadingContainer : ''}`}>
          {isLoading ? (
            <div className={s.loader}></div>
          ) : currentRecipes && currentRecipes.length > 0 ? (
            currentRecipes.map((element) => (
              <Card
                key={element.id}
                id={element.id}
                name={element.name}
                imagen={element.imagen}
                diets={element.diets}
                typeDiets={element.typeDiets}
              />
            ))
          ) : (
            <p className={s.noResultsText}>No se encontraron resultados</p>
          )}
        </div>

        <div className={s.pagination}>
          <Pagination
            limit={RECIPES_PER_PAGE}
            total={allRecipes.length}
            currentPage={currentPage}
            onChange={paginado}
          />
        </div>

        <Footer />
      </div>
    </div>
  )
}
