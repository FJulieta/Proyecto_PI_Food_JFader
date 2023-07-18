import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import s from './Card.module.css'

function Card({ name, imagen, diets, id, showActions }) {
  return (
    <div className={s.cardContainer}>
      <div className={s.imgStore}>
        <img
          src={
            imagen ||
            'https://img.freepik.com/vector-gratis/vector-ilustracion-dibujos-animados-varias-verduras-sobre-fondo-madera_1441-519.jpg'
          }
          alt={name}
        />
        <div className={s.contentCard}>
          <div className={s.containerAction}>
            {showActions && <NavLink to={`/detail/${id}`}>{name}</NavLink>}
            {!showActions && <NavLink to={`/detail/${id}`}>{name}</NavLink>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
