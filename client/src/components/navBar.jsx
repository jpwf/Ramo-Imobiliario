import React from 'react';
import logo from '../../public/logo.png'
// import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div>
      
      <div className=" flex flex-row justify-center items-center text-base mt-12  ">
        <img className='mt-4 'src={logo}/>
        <div className="mr-56 ml-48">
          <button className="mx-8"> Início </button>
          <button className="mx-8"> Buscar imóveis</button>
          <button className="mx-8"> Anunciar </button>
        </div>
        <div className="mr-8 ">
          <button className="mr-8"> Entrar </button>
          <button className="px-3 py-4 bg-blue-500 text-white"> Cadastre-se</button>
        </div>

      </div>
    </div>
  )
}
 
export default Navbar;
