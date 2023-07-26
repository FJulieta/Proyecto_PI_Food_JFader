//A continuacion tenemos la inicializacion del store, el store es el objeto central de Redux que almacena el stado de la app.

//Que es el Thunk? 'redux-thunk' es el middleware que se utiliza para manejar acciones asincronas.

//Cuando una action es despachada(a través del dispatch) se procesa por el middleware antes de llegar al reducer.

//Por que es necesario utilizar acciones asincronas? Son necesarias cuando se realizan tareas que llevan tiempo, como en este caso obtener datos de una API.

//Al usar acciones asincronas la aplicacion no se bloquea y sigue siendo receptiva, hace que la experiencia de usuario sea optima.

//Los componetes de la app de react y la store de redux, se hace a través de la biblioteca 'react-redux'
//Esta biblioteca proporciona componentes y funciones que permiten conectarlos. Como en este caso el Provider.

import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducer'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunkMiddleware)))

export default store
