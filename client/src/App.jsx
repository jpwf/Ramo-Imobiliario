import Navbar from './components/navBar';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes/Routes'

import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthProvider } from './contexts/AuthContext';
import LoginPage from './pages/Login';


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
    <AuthProvider>
      <ThemeProvider theme={theme}>
          <Router>
            <ToastContainer
              position="bottom-center"
              autoClose={3000}
              limit={1}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            {/* <Navbar> */}
              <Routes />
            {/* </Navbar> */}
          </Router>
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App
