import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeContextProviderFunction } from './Context/ThemeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeContextProviderFunction>
    <App />
  </ThemeContextProviderFunction>
)
