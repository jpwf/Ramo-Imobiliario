import Navbar from './components/navBar';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes/Routes'

import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  typography: {
    fontFamily: [
      'Inter',
      'Roboto',
      'sans-serif'
    ].join(','),
  },
  palette: {
    primary: {
      main: '#3b82f6',
      dark: '#1d4ed8',
      contrastText: '#fff',

    }
  }
});


function App() {

  return (

    <Router>
      <ThemeProvider theme={theme}>
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
        
        <Routes />
      </ThemeProvider>
    </Router>
  )
}

export default App
