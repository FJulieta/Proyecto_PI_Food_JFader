import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import router from './pages/Router'

import store from './redux/store'

function App() {
  return (
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
