import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import LoginPage from '../src/pages/Login.jsx'
import './index.css'
import Register from './pages/Register'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Register />
  </React.StrictMode>,
)
