import axios from 'axios'
import {
  GET_RECIPES,
  FILTER_BY_TYPEDIET,
  FILTER_CREATED,
  ORDER_BY_NAME,
  ORDER_BY_PUNTUATION,
  GET_BY_NAME,
  GET_BY_ID,
  GET_TYPE_DIETS,
  CREATE_RECIPE,
  DELETE_RECIPE,
} from './action-types'



//A continuacion se encuentran los actions creators, que son funciones que crean y devuelven objetos de accion.
//A través del dispatch se comunica el componente con las actions.
//Cada funcion representa una accion específica que ocurre en la app, su objetivo es modificar el estado global mediante el REDUCER.
//Las funciones definidas aquí son las que se utilizan en los componentes de la aplicación para interactuar con Redux y desencadenar cambios en el estado.



//la siguiente función se exporta para que pueda ser importada y utilizada en otros archivos.
//se utiliza una funcion asincrona ya que se hace una peticion a la API
export const getRecipes = () =>
  async function (dispatch) {
    const json = await axios.get('http://localhost:3001/recipes')
    return dispatch({
      type: GET_RECIPES, //tipo de accion
      payload: json.data,
    })
  }

export function filterRecipesByTypeDiet(payload) {
  return {
    type: FILTER_BY_TYPEDIET,
    payload,
  }
}

export function filterCreated(payload) {
  return {
    type: FILTER_CREATED,
    payload,
  }
}

export function orderByName(payload) {
  return {
    type: ORDER_BY_NAME,
    payload,
  }
}

export function orderByPuntuation(payload) {
  return {
    type: ORDER_BY_PUNTUATION,
    payload,
  }
}

export function getRecipesByName(name) {
  return async function (dispatch) {
    await axios
      .get(`http://localhost:3001/recipes?name=${name}`)
      .then((response) => dispatch({ type: GET_BY_NAME, payload: response.data }))
      .catch((error) => {
        alert('Recipe not found')
      })
  }
}

export function getRecipesById(id) {
  return async function (dispatch) {
    const json = await axios.get(`http://localhost:3001/recipes/${id}`)
    return dispatch({
      type: GET_BY_ID,
      payload: json.data,
    })
  }
}

export function getTypeDiets() {
  return async function (dispatch) {
    const json = await axios.get('http://localhost:3001/diets')
    return dispatch({
      type: GET_TYPE_DIETS,
      payload: json.data,
    })
  }
}

export function createRecipe(payload) {
  return async function (dispatch) {
    const json = await axios.post('http://localhost:3001/recipes', payload)
    return dispatch({
      type: CREATE_RECIPE,
      payload: json.data,
    })
  }
}

export function deleteRecipe(id) {
  return async function (dispatch) {
    const json = await axios.delete(`http://localhost:3001/recipes/${id}`)
    return dispatch({
      type: DELETE_RECIPE,
      payload: json.data,
    })
  }
}
