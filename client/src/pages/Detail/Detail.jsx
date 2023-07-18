import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, NavLink } from 'react-router-dom'
import { getRecipesById, deleteRecipe } from '../../redux/actions'

import s from './Detail.module.css'

export default function Detail() {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(true)
  const data = useSelector((state) => state.data)
  const { id } = useParams()
  const [fromApi, setFromApi] = useState(false)

  useEffect(() => {
    setIsLoading(true)

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    dispatch(getRecipesById(id))
  }, [dispatch, id])

  useEffect(() => {
    if (data && data.fromApi) {
      setFromApi(true)
    }
  }, [data])

  function handleSubmit(e) {
    e.preventDefault()
    if (fromApi) {
      alert('Esta receta viene de la API y no puede ser eliminada.')
    } else {
      dispatch(deleteRecipe(id))
        .then(() => {
          alert('Receta Eliminada...')
          location.href = '/home'
        })
        .catch(() => {
          alert('Las Recetas Provenientes de la API no pueden ser borradas')
        })
    }
  }

  return (
    <div className={s.detailsContainer}>
      {!isLoading && (
        <>
          <div className={s.containerLeftDetails}>
            <div className={s.containerButtons}>
              <NavLink to="/home">
                <button type="button" className={s.backButton}>
                  Back
                </button>
              </NavLink>
              <button className={s.deleteButton} onClick={handleSubmit}>
                Delete Recipe
              </button>
            </div>
            <img
              src={
                data.imagen ||
                'https://img.freepik.com/vector-gratis/vector-ilustracion-dibujos-animados-varias-verduras-sobre-fondo-madera_1441-519.jpg?size=626&ext=jpg&ga=GA1.2.227501000.1662982549'
              }
              alt={data.name}
              className={s.detailsImage}
            />
          </div>

          <div className={s.detailsInfo}>
            <h2 className={s.detailsName}>{data.name}</h2>
            <h3 className={s.detailsHealthScore}>
              HealthScore <span className={s.detailsDietItem}>{data.healthScore}</span>
            </h3>
            <h3 className={s.detailsTypeDiet}>Type Diet</h3>
            <ul className={s.detailsDietList}>
              {data.typeDiets.map((t, index4) => (
                <li key={index4} className={s.detailsDietItem}>
                  {t}
                </li>
              ))}
            </ul>
            <h3>SUMMARY</h3>
            <p className={s.detailsSummary}>{data.summary.replace(/(<([^>]+)>)/gi, '')}</p>
            <h5>Steps:</h5>
            <ol className={s.detailsStepsList}>
              {Array.isArray(data.process)
                ? data.process.map((e, index1) =>
                    e.steps.map((f, index2) => (
                      <li key={`${index1}-${index2}`} className={s.detailsStepItem}>
                        {f.step}
                      </li>
                    )),
                  )
                : data.process.split('|').map((step, index3) => (
                    <li key={index3} className={s.detailsStepItem}>
                      {step}
                    </li>
                  ))}
            </ol>
          </div>
        </>
      )}
    </div>
  )
}
