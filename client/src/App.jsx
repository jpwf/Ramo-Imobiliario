import Navbar from './components/navBar';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes/Routes'

import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

function App() {
  
  return (
    <Router>
      <ToastContainer
        position="bottom-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
    />
      <Navbar />
      <Routes/>
    </Router>
  )
}

export default App
