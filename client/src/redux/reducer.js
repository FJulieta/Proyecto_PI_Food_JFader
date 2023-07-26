export const initialState = {
  recipes: [],
  allRecipes: [],
  data: [],
  typediets: [],
}

//La funcion del reducer es manejar los cambios de estados de la aplicacion,, toma el estado actual y la accion como argumento y devuelve el nuevo estado actualizado
//El reducer es una función pura que recibe el estado actual y una acción,y devuelve un nuevo estado modificado. 
//Su función es procesar las acciones creadas por los action creators y actualizar el estado de la aplicación en consecuencia.
// En este archivo, el estado inicial está definido como un objeto con diferentes propiedades (recipes, allRecipes, data, typediets)
// que representan diferentes datos de la aplicación. 
//Cada caso en el switch del reducer corresponde a una acción específica y contiene la lógica para actualizar el estado apropiadamente según la acción recibida

//POR QUE CON UNA SENTENCIA SWITCH?
// 1- Hace que el código sea más legible siendo eficiente, algo que con multiples 'if' no se podría.
// 2- Facilidad de mantenimiento, si se necesita agregar o modificar la lógica, solo se agrega un case o se modifica un nuevo caso, eso hace que sea fácil de mantener
// 3- El uso de switch es una convencion comun en redux para manejar acciones y hacer que el código sea coherente
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_RECIPES':
      return {
        ...state,
        recipes: action.payload,
        allRecipes: action.payload,
      }
    case 'NEW_API':
      return {
        ...state,
        recipes: action.payload,
        allRecipes: action.payload,
      }
    case 'FILTER_BY_TYPEDIET':
      const allRecDiet = state.allRecipes
      const typeDietFilter = allRecDiet.filter((recipes) => recipes.diets && recipes.diets.includes(action.payload))
      return {
        ...state,
        recipes: action.payload === 'All' ? allRecDiet : typeDietFilter,
      }

    case 'FILTER_CREATED':
      const { allRecipes } = state
      const createdFilter =
        action.payload === 'created'
          ? allRecipes.filter((el) => el.createdInDB)
          : allRecipes.filter((el) => !el.createdInDB)
      return {
        ...state,
        recipes: action.payload === 'All' ? state.allRecipes : createdFilter,
      }

    case 'ORDER_BY_NAME':
      const order =
        action.payload === 'asc'
          ? state.recipes.sort((a, b) => {
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1
              }
              if (b.name.toLowerCase() > a.name.toLowerCase()) {
                return -1
              }
              return 0
            })
          : state.recipes.sort((a, b) => {
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return -1
              }
              if (b.name.toLowerCase() > a.name.toLowerCase()) {
                return 1
              }
              return 0
            })
      return {
        ...state,
        recipes: order,
      }

    case 'ORDER_BY_PUNTUATION':
      const orderpunt =
        action.payload === 'menormayor'
          ? state.recipes.sort((a, b) => {
              if (a.healthScore > b.healthScore) {
                return 1
              }
              if (b.healthScore > a.healthScore) {
                return -1
              }
              return 0
            })
          : state.recipes.sort((a, b) => {
              if (a.healthScore > b.healthScore) {
                return -1
              }
              if (b.healthScore > a.healthScore) {
                return 1
              }
              return 0
            })
      return {
        ...state,
        recipes: orderpunt,
      }
    case 'GET_BY_NAME':
      return {
        ...state,
        recipes: action.payload,
      }
    case 'GET_BY_ID':
      return {
        ...state,
        data: action.payload,
      }
    case 'POST_RECIPE':
      return {
        ...state,
      }
    case 'GET_TYPE_DIETS':
      return {
        ...state,
        typediets: action.payload,
      }
    case 'DELETE_RECIPE':
      return {
        ...state,
      }
    case 'CREATE_RECIPE':
      return {
        ...state,
      }
    // case PUT_RECIPE:
    //     return{
    //         ...state,
    //     }
    default:
      return state
  }
}

export default rootReducer
