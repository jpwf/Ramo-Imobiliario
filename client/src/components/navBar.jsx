import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom'

import { List } from 'phosphor-react';
import logo from '../assets/logo.png'


function Navbar() {

  const [navbar, setNavbar] = useState(false);
  const activeStyle = "underline underline-offset-4";

  return (
    <nav className=' w-full text-base border-b-[1px] bg-white border-b-gray-300'>
      <div className="flex justify-between h-20 items-center">
        <Link to={"/"} aria-label='inicio' className='flex items-center py-5 md:ml-9 lg:ml-20 md:py-2'>
          <img className='min-w-[140px] min-h-full' src={logo} alt="Logo Ramo Imobiliário" />
        </Link>

        {/* primary nav */}
        <div className='w-full hidden md:flex md:justify-center items-center lg:space-x-16 lg:text-base md:text-sm md:space-x-2'>
          <NavLink 
            to={"/"}
            className={({isActive}) =>
              isActive
                ? activeStyle
                : ""
            }
          >
            <p className="py-5 px-3 text-gray-700 hover:text-gray-900"> Início </p>
          </NavLink>
          <NavLink 
            to={"/busca"}
            className={({isActive}) =>
              isActive
                ? activeStyle
                : ""
            }
          >
            <p className="py-5 px-3 text-gray-700 hover:text-gray-900"> Buscar imóveis </p>
          </NavLink>
          <NavLink 
            to={"/criar-anuncio"}
            className={({isActive}) =>
              isActive
                ? activeStyle
                : ""
            }
          >
            <p className="py-5 px-3 text-gray-700 hover:text-gray-900"> Anunciar </p>
          </NavLink>
        </div>

        {/* secondary nav */}
        <div className="hidden md:flex items-center md:mr-9 lg:mr-20 lg:text-base md:text-sm">
          <NavLink 
            to={"/login"}
            className={({isActive}) =>
              isActive
                ? activeStyle
                : ""
            }
          >
            <p className=" py-5 px-3 mr-6"> Entrar </p>
          </NavLink>
          <Link
           to={"/cadastro"}
            className=" py-3 px-4 bg-blue-500 text-white rounded lg:w-32 md:w-[116px] hover:bg-blue-700"
          >
            Cadastre-se
          </Link>
        </div>

        {/* mobile buttons */}
        <div className='md:hidden flex items-center mr-6'>
          <button
            aria-label='menu'
            className='mobile-menu-button'
            onClick={() => setNavbar(!navbar)}
          >
            <List size={32} />
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <div className={`border flex-col justify-self-center md:hidden ${navbar ? "flex" : "hidden"}`}>
        <Link to={"/"} className="block py-4 px-2 text-sm text-gray-700 hover:bg-gray-200"> Início </Link>
        <Link to={"/busca"} className="py-4 px-2 text-sm text-gray-700 hover:bg-gray-200"> Buscar imóveis</Link>
        <Link to={"/criar-anuncio"} className="py-4 px-2 text-sm text-gray-700 hover:bg-gray-200"> Anunciar </Link>
        <Link to={"/login"} className="py-4 px-2 text-sm text-gray-700 hover:bg-gray-200"> Entrar </Link>
        <Link 
          to={"/cadastro"}
          className=" py-4 px-2 bg-blue-500 text-sm text-white rounded hover:bg-blue-700"
        >
          Cadastre-se
        </Link>
      </div>
    </nav>
  )
}

export default Navbar;
