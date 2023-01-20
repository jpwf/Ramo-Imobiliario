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
import CriarAnuncio1 from '../pages/AnuncioParte1'
import CriarAnuncio2 from '../pages/AnuncioParte2'
import CriarAnuncio3 from '../pages/AnuncioParte3'




export default function router() {
    return (
        <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/apartment/search?' element={<Busca />} />
            <Route path='/criar-anuncio' element={<RequireAuth><CriarAnuncio /></RequireAuth> } >
                <Route path="1" element={<CriarAnuncio1/>}/>
                <Route path="2" element={<CriarAnuncio2/>}/>
                <Route path="3" element={<CriarAnuncio3/>}/>
            </Route>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/cadastro' element={<Register />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
}