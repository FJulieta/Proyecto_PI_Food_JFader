import React, { useEffect } from 'react'

import s from './Pagination.module.css'

export default function Pagination({ limit, total, currentPage, onChange }) {
  const totalPages = Math.ceil(total / limit)
  const pageNumbers = []
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

  if (totalPages <= 1) {
    return <></>
  }

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
