import * as ReactDOM from 'react-dom'
import React from 'react'

import App from './App'
import './index.css'

const rootNode = document.getElementById('root')

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootNode,
)
