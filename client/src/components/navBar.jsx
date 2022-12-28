import React, { useState } from 'react';
import logo from '../assets/logo.png'

import { List } from 'phosphor-react';
// import {Link} from 'react-router-dom'
function Navbar() {
  
  const [navbar, serNavbar] = useState(false);

  return (
    <nav className=' w-full text-base border-b-[1px] border-b-gray-300'>
      <div className="flex justify-between h-20 items-center">
          <a href="#" className='flex items-center py-5 md:ml-9 lg:ml-20 md:py-2'>
            <img className='min-w-[140px] min-h-full'src={logo}/>
          </a>
        
          {/* primary nav */}
          <div className='w-full hidden md:flex md:justify-center items-center lg:space-x-16 lg:text-base md:text-sm md:space-x-2'>
            <a href='' className="py-5 px-3 text-gray-700 hover:text-gray-900"> Início </a>
            <a href='' className="py-5 px-3 text-gray-700 hover:text-gray-900"> Buscar imóveis</a>
            <a href='' className="py-5 px-3 text-gray-700 hover:text-gray-900"> Anunciar </a>
          </div>

        {/* secondary nav */}
        <div className="hidden md:flex items-center md:mr-9 lg:mr-20 lg:text-base md:text-sm">
          <a href='' className=" py-5 px-3 mr-6"> Entrar </a>
          <a
            href=''
            className=" py-3 px-4 bg-blue-500 text-white rounded lg:w-32 md:w-[116px] hover:bg-blue-700"
          > 
            Cadastre-se
          </a>
        </div>

        {/* mobile buttons */}
        <div className='md:hidden flex items-center mr-6'>
          <button 
            className='mobile-menu-button'
            onClick={() => serNavbar(!navbar)}
          >
            <List size={32}/>
          </button>
        </div>
      </div>

        {/* mobile menu */}
        <div className={`border flex-col justify-self-center md:hidden ${navbar ? "hidden" : "flex"}`}>
          <a href='' className="block py-4 px-2 text-sm text-gray-700 hover:bg-gray-200"> Início </a>
          <a href='' className="py-4 px-2 text-sm text-gray-700 hover:bg-gray-200"> Buscar imóveis</a>
          <a href='' className="py-4 px-2 text-sm text-gray-700 hover:bg-gray-200"> Anunciar </a>
          <a href='' className="py-4 px-2 text-sm text-gray-700 hover:bg-gray-200"> Entrar </a>
          <a
            href=''
            className=" py-4 px-2 bg-blue-500 text-sm text-white rounded hover:bg-blue-700"
          > 
            Cadastre-se
          </a>        
        </div>
    </nav>
  )
}
 
export default Navbar;
