import React from 'react'
import { NavLink } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'

import s from './Nav.module.css'

export default function Nav({ handleClick }) {
  return (
    <div className={s.navbar}>
      <NavLink to="/recipe" className={s.navLink}>
        <button className={s.navCreateRecipeButton}>Create Recipe</button>
      </NavLink>
      <div className={s.searchBarContainer}>
        <SearchBar />
      </div>
      <button onClick={(event) => handleClick(event)} className={s.navAllRecipeButton}>
        All Recipes
      </button>
    </div>
  )
}
