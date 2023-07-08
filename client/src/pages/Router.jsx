import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import LandingPage from './LandingPage/LandingPage'
import Home from './Home/Home'
import Detail from './Detail/Detail'
import FormCreation from './FormCreation/FormCreation'
import About from './About/About'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/detail/:id',
    element: <Detail />,
  },
  {
    path: '/recipe',
    element: <FormCreation />,
  },
  {
    path: '/about',
    element: <About />,
  },
])

export default router
