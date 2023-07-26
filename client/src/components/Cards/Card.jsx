import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import s from './Card.module.css'

//A continuacion lo que tenemos, es un componente llamado Card:
//Este componente acepta una serie de props, como argumentos , y muestra una tarjeta con la información proporciona por estas props.
//La card tiene un estructura div para poder aplicarle estilos, los cuales están importados a través de un objeto (s)
//Proporciono un aimagen por defecto en el caso de que no se pueda obtener la info de la prop "imagen"
//utilizo el componente proporcionado por react-router-dom, para el enrutamiento y navegar hacia el detail, el contenido de este enlace está condicionado por la prop showActions.
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
