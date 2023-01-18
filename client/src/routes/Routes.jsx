import {
    Route,
    Routes,
} from 'react-router-dom'

import Busca from '../pages/Busca'
import CriarAnuncio from '../pages/CreateAnuncio'
import CriarAnuncio2 from '../pages/createAnuncio-2'
import CriarAnuncio3 from '../pages/createAnuncio-3'
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
            <Route path='/criar-anuncio2' element={<CriarAnuncio2 />} />
            <Route path='/criar-anuncio3' element={<CriarAnuncio3 />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/cadastro' element={<Register />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
}