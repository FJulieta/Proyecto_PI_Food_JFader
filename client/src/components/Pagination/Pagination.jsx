import React, { useEffect } from 'react'

import s from './Pagination.module.css'

//La siguiente función representa un componente de React para paginación, recibe las propiedades limit, total, currentPage, onChange

export default function Pagination({ limit, total, currentPage, onChange }) {
  //Calculo el número total de páginas sobre el límite, con math ceil redondeo hacia arriba en el caso de que haya algún resultado decimal,
  // se redondea hacia arriba, para que no queden elementos sin páginar.
  const totalPages = Math.ceil(total / limit)
  //Declaro la siguiente constante para almacenar el resultado obtenido.
  const pageNumbers = []

  //lo que hago a continuacion es recorrer el resultado de totalPages y con push lo guardo dentro del array pageNumbers
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

  //Si el resultado de totalPages es menor igual a uno, es decir si no hay página o sólo una, no devolver nada. Esto evita que se muestre la paginación si no hay nada.
  if (totalPages <= 1) {
    return <></>
  }


  //A continuacion, inicializo un contenedor div, para agrupar los elementos de la paginación
  return (
    <nav>
      <ul className={s.ul}>
        {currentPage > 1 && (
          <li>
            <button className={s.arrow} onClick={() => onChange(currentPage - 1)}>
              &#8249;
            </button>
          </li>
        )}
        {pageNumbers.map((n) => (
          <li key={n}>
            <button
              className={currentPage === n ? s.container + ' ' + s.current : s.container}
              onClick={() => onChange(n)}
            >
              {n}
            </button>
          </li>
        ))}
        {currentPage < totalPages && (
          <li>
            <button className={s.arrow} onClick={() => onChange(currentPage + 1)}>
              &#8250;
            </button>
          </li>
        )}
      </ul>
    </nav>
  )
}
