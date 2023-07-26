import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { getTypeDiets, createRecipe } from '../../redux/actions'
import CloseSVG from '../../icons/CloseSVG'
import EditSVG from '../../icons/EditSVG'
import { isNotEmpty } from '../../utils/object'

import imageDefault from '../../assets/chef.jpg'
import s from './Form.module.css'

function controlForm(input) {
  const errors = {}

  if (!input.name) errors.name = 'Please enter the name of the recipe'
  if (!input.summary) errors.summary = 'Please enter the summary of the recipe'

  const healthScore = parseInt(input.healthScore, 10)
  if (isNaN(healthScore) || healthScore < 1 || healthScore > 100) {
    errors.healthScore = 'Please enter a health score between 1 and 100'
  }

  if (!input.typeDiets) errors.typeDiets = 'Please enter the typeDiets of the recipe'

  return errors
}

export default function CreateRecipe() {
  const dispatch = useDispatch()
  const listDiets = useSelector((state) => state.typediets)
  const [errors, setErrors] = useState({})

  const [listSteps, setListSteps] = useState([])
  const [stepDescription, setStepDescription] = useState('')
  const [editStepIndex, setEditStepIndex] = useState()

  const [input, setInput] = useState({
    name: '',
    summary: '',
    healthScore: '',
    process: '',
    typeDiets: [],
    imagen: '',
  })

  useEffect(() => {
    dispatch(getTypeDiets())
  }, [dispatch])

  useEffect(() => {
    const stepsString = listSteps.join('|')
    setInput({
      ...input,
      process: stepsString,
    })
  }, [listSteps])

  const handleChange = (event) => {
    if (event.target.name === 'name') {
      const inputValue = event.target.value
      const sanitizedValue = inputValue.replace(/[^a-zA-Z\s]/g, '')
      setInput({
        ...input,
        [event.target.name]: sanitizedValue,
      })
    } else {
      setInput({
        ...input,
        [event.target.name]: event.target.value,
      })
    }
  }
  function handleSelect(e) {
    if (!input.typeDiets.includes(e.target.value)) {
      setInput({
        ...input,
        typeDiets: [...input.typeDiets, e.target.value],
      })
    }
  }

  function handleDelete(diet) {
    setInput({
      ...input,
      typeDiets: input.typeDiets.filter((d) => d !== diet),
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()

    const _errors = controlForm(input)
    setErrors(_errors)

    if (isNotEmpty(_errors)) {
      return false
    }

    const recipeData = {
      ...input,
      imagen: input.imagen || imageDefault,
    }

    try {
      const data = await dispatch(createRecipe(recipeData))
      alert('Receta Creada...')
      location.href = `/detail/${data.payload.id}`
    } catch (error) {
      alert(error)
    }
  }

  function handleChangeStep(e) {
    setStepDescription(e.target.value)
  }

  function handleRemoveStep(i) {
    if (editStepIndex !== undefined) {
      setEditStepIndex()
      setStepDescription('')
    }

    const _listSteps = listSteps.filter((_step, index) => index !== i)
    setListSteps(_listSteps)
  }

  function handleEditStep(step, index) {
    setStepDescription(step)
    setEditStepIndex(index)
  }

  function handleStep(e) {
    e.preventDefault()
    if (stepDescription !== '') {
      if (editStepIndex !== undefined) {
        const _listSteps = [...listSteps]
        _listSteps[editStepIndex] = stepDescription
        setListSteps(_listSteps)
        setEditStepIndex()
      } else {
        setListSteps([...listSteps, stepDescription])
      }
      setStepDescription('')
    } else {
      alert('Please enter a step')
    }
  }

  function handleImageUpload(event) {
    const file = event.target.files[0]
    setInput({
      ...input,
      imagen: URL.createObjectURL(file),
    })
  }

  return (
    <div className={s.backgroundContainer}>
      <div className={s.createRecipeForm}>
        <div>
          <NavLink to="/home">
            <button className={s.BackButtonForm}>Back</button>
          </NavLink>
          <h1 className={s.CreateRecipeTitle}>Create your Recipe</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className={s.inputContainer}>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                className={`${s.inputField} ${errors.name ? s.inputError : ''}`}
                placeholder="Name"
              />
              {errors.process && <p className={s.inputError}>{errors.process}</p>}
            </div>
            <div className={s.inputContainer}>
              <input
                type="text"
                name="summary"
                onChange={handleChange}
                className={`${s.inputField} ${errors.summary ? s.inputError : ''}`}
                placeholder="Summary"
              />
              {errors.summary && <p className={s.inputError}>{errors.summary}</p>}
            </div>

            <div className={s.inputContainer}>
              <input
                type="number"
                name="healthScore"
                value={input.healthScore}
                onChange={(e) => handleChange(e)}
                className={`${s.inputField} ${errors.healthScore ? s.inputError : ''}`}
                placeholder="HealthScore"
              />
              {errors.healthScore && <p className={s.inputError}>{errors.healthScore}</p>}
            </div>
            <div className={s.inputContainer}>
              <input
                type="text"
                name="process"
                value={stepDescription}
                onChange={handleChangeStep}
                className={s.inputField}
                placeholder="Step by step"
              />
              <button className={s.stepButtonAdd} onClick={handleStep}>
                {editStepIndex !== undefined ? 'Edit' : 'Add'}
              </button>
            </div>
            {listSteps && listSteps.length > 0 ? (
              <div className={s.stepsContainer}>
                {listSteps.map((step, index) => (
                  <div key={`${index}-${step}`} className={s.step}>
                    <span>
                      {index + 1} - {step}
                    </span>
                    <div className={s.actions}>
                      <span onClick={() => handleEditStep(step, index)}>
                        <EditSVG />
                      </span>
                      <span onClick={() => handleRemoveStep(index)}>
                        <CloseSVG />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <></>
            )}

            <div className={s.inputContainerImg}>
              <label className={s.input}></label>
              <input type="file" accept="image/*" onChange={handleImageUpload} className={s.imageUploadText} />
            </div>

            <div className={s.inputContainerImg}>
              {input.imagen && <img src={input.imagen} alt="Recipe" className={s.previewImage} />}
            </div>

            <div className={s.inputContainerSelect}>
              <label className={s.inputLabel}></label>
              <div className={s.selectContainer}>
                <select className={s.selectDiet} onChange={(e) => handleSelect(e)}>
                  <option value="">Select a Diet</option>
                  {listDiets.map((t) => (
                    <option key={t.name} value={t.name}>
                      {t.name}
                    </option>
                  ))}
                </select>
                <div className={s.selectedTypeDiets}>
                  {input.typeDiets.map((diet) => (
                    <span key={diet} className={s.selectedDiet}>
                      <span>{diet}</span>
                      <span onClick={() => handleDelete(diet)}>
                        <CloseSVG width="12px" height="12px" />
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {isNotEmpty(errors) && (
              <p className="error-message">Please complete all the inputs to create your recipe</p>
            )}
            <button type="submit" className={s.createRecipeButton}>
              Create Recipe
            </button>
          </form>
        </div>
      </div>
      <div className={s.imgContainer}>
        <img className={s.imgForm} src="/formFood.jpg" alt="imgForm" />
      </div>
    </div>
  )
}
