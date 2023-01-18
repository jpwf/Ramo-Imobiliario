import {
    Route,
    Routes,
} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import App from '../App'
import Busca from '../pages/Busca'
import CriarAnuncio from '../pages/CreateAnuncio'
import CriarAnuncio2 from '../pages/createAnuncio-2'
import ErrorPage from '../pages/Error'
import Inicio from '../pages/Inicio'
import LoginPage from '../pages/Login'
import Register from '../pages/Register'
// import CriarAnuncio from '../pages/CreateAnuncio'


export default function router() {
    return (
        <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/busca' element={<Busca />} />
            <Route path='/criar-anuncio' element={<CriarAnuncio />} />
            <Route path='/criar-anuncio2' element={<CriarAnuncio2 />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/cadastro' element={<Register />} />
            <Route path='*' element={<ErrorPage />} />
        </Routes>
    );
}