import {
    Route,
    Routes,
} from 'react-router-dom'

import Busca from '../pages/Busca'
import CriarAnuncio from '../pages/CriarAnuncio'
import Inicio from '../pages/Inicio'
import LoginPage from '../pages/Login'
import Register from '../pages/Register'
import NotFound from '../pages/NotFound'
import { RequireAuth } from '../contexts/RequireAuth'




export default function router() {
    return (
        <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/apartment/search?' element={<Busca />} >
               
            </Route>  
            <Route path='/criar-anuncio' element={<RequireAuth><CriarAnuncio /></RequireAuth> } />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/cadastro' element={<Register />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
}