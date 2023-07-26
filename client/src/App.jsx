import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import router from './pages/Router'

import store from './redux/store'

function App() {
  return (

    //El componente Provider (es un componente que nos provee redux), se utiliza para envolver la raíz de la app 
    // proporciona acceso a la store de todos los componentes descendientes,
    //de esta manera cualquier componente dentro de la aplicación puede acceder al estado de redux y despachar acciones.
    <Provider store={store}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Handlee&family=Raleway:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <div className="app">
        <RouterProvider router={router} />
      </div>
    </Provider>
  )
}

export default App
