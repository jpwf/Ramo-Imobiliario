import React from 'react';
import logo from '../assets/logo.png'
// import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <>
    <div className=" w-full h-24 flex justify-between items-center text-base border-b-[1px] border-b-gray-300">
      <img className='ml-12 lg:ml-20'src={logo}/>
        <div className='w-full flex justify-center'>
          <a className=""> Início </a>
          <a className="px-16"> Buscar imóveis</a>
          <a className=""> Anunciar </a>
        </div>
      
      <div className="flex mr-12 lg:mr-20">
        <button type='button' className=" mr-8"> Entrar </button>
        <button
          type='button'
          className=" py-3 px-4 bg-blue-500 text-white rounded w-32 "
        > 
          Cadastre-se
        </button>
      </div>

    </div>
  </>
  )
}
 
export default Navbar;
