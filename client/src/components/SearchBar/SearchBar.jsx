import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getRecipesByName } from '../../redux/actions'

import s from './SearchBar.module.css'

export default function SearchBar() {
  const dispacth = useDispatch()
  const [name, setName] = useState('')

  function handleInputChange(event) {
    event.preventDefault()
    setName(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (name.trim() !== '') {
      dispacth(getRecipesByName(name))
    }
  }
  return (
    <div className={s.searchBarContainer}>
      <input
        type="text"
        className={s.searchBarInput}
        placeholder="Search..."
        onChange={(event) => handleInputChange(event)}
      />
      <button className={s.searchBarButton} type="submit" onClick={(event) => handleSubmit(event)}>
        Search
      </button>
    </div>
  )
}
